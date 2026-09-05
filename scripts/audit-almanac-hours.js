"use strict";

const fs=require("fs");
const path=require("path");
const vm=require("vm");

const root=path.resolve(__dirname,"..");
const ids=[13,53,54,55,94,134,137,138,174,175,214,297,332,333,372,373,413,454,493,533,571,611,613,651,691,692,730,772,810,894,895,935,974,975];
const index=fs.readFileSync(path.join(root,"index.html"),"utf8");
const master=JSON.parse(fs.readFileSync(path.join(root,"murcia_master.json"),"utf8"));

function fail(message){throw new Error(message)}
function assert(condition,message){if(!condition)fail(message)}
function parseAngle(value){
 const text=String(value).replace(/,/g,".");
 const match=text.match(/([+−-])?\s*(\d+)°\s*(\d+(?:\.\d+)?)?[′']?\s*(\d+(?:\.\d+)?)?[″"]?/);
 assert(match,`No se pudo leer el ángulo: ${value}`);
 const sign=match[1]==="−"||match[1]==="-"?-1:1;
 return sign*(Number(match[2])+(Number(match[3]||0)/60)+(Number(match[4]||0)/3600));
}
function mod360(value){return((value%360)+360)%360}
function arcMinuteDifference(a,b){let d=Math.abs(mod360(a)-mod360(b));d=Math.min(d,360-d);return d*60}
function close(a,b,toleranceMinutes=.06){return arcMinuteDifference(a,b)<=toleranceMinutes}

const assetMatch=index.match(/const ALMANAC_ASSETS=({[\s\S]*?\n});/);
assert(assetMatch,"No se encontró ALMANAC_ASSETS");
const assetSandbox={value:null};
vm.runInNewContext(`value=${assetMatch[1]}`,assetSandbox);
const assets=assetSandbox.value;

const window={RECLASSIFIED_LESSON_IDS:new Set(),RECLASSIFIED_CALCULATOR_GUIDES:{},reclassifiedTypeHTML:()=>"",reclassifiedSolutionHTML:()=>"",reclassifiedQuickHTML:()=>"",initReclassifiedGraphics:()=>{}};
const sandbox={window,ALMANAC_ASSETS:assets,console,setInterval,clearInterval,ResizeObserver:function(){}};
vm.runInNewContext(fs.readFileSync(path.join(root,"assets","almanac-hours-lessons.js"),"utf8"),sandbox);
const lessons=window.ALMANAC_HOURS_LESSONS;

assert(lessons&&Object.keys(lessons).length===34,`Se esperaban 34 lecciones y hay ${lessons?Object.keys(lessons).length:0}`);
assert(new Set(ids).size===34,"La lista de auditoría contiene identificadores repetidos");
assert(ids.every(id=>lessons[id]),"Falta una lección de la lista editorial");
assert(Object.keys(lessons).every(id=>ids.includes(Number(id))),"Hay una lección fuera de la lista editorial");
assert(/november2022Declination[\s\S]{0,220}answer:"c"/.test(index),"La corrección de la clave de Noviembre 2022 P15 no se aplica en la web");

function expectedAssets(s){
 if(s.kind==="sun"||s.kind==="aries")return["daily","increment"];
 if(s.kind==="star"||s.kind==="starSeconds")return s.ariesGiven?["stars"]:["daily","increment","stars"];
 if(s.kind==="pole")return["stars"];
 if(s.kind==="declination")return["daily"];
 return[];
}
function assetKind(src){return src.includes("incrementos-")?"increment":/angulos-sidereos|estrellas-as|\/2017-estrellas\.png/.test(src)?"stars":"daily"}

for(const id of ids){
 const s=lessons[id],q=master.questions.find(item=>item.id===id);
 assert(q,`P${id}: no existe en el MASTER`);
 assert(String(q.answer||"").toUpperCase()===s.answer,`P${id}: la respuesta ${s.answer} no coincide con el MASTER (${q.answer})`);

 if(s.kind==="sun"||s.kind==="aries")assert(close(parseAngle(s.base)+parseAngle(s.inc),parseAngle(s.result)),`P${id}: suma de hora e incremento incorrecta`);
 if(s.kind==="star"||s.kind==="starSeconds"){
  if(!s.ariesGiven&&s.ariesBase)assert(close(parseAngle(s.ariesBase)+parseAngle(s.ariesInc),parseAngle(s.base)),`P${id}: obtención de hGγ incorrecta`);
  assert(close(parseAngle(s.base)+parseAngle(s.sha),parseAngle(s.result)),`P${id}: suma hGγ + A.S.* incorrecta`);
 }
 if(s.kind==="local"){
  const signed=s.operator==="−"?-parseAngle(s.longitude):parseAngle(s.longitude);
  assert(close(parseAngle(s.base)+signed,parseAngle(s.result)),`P${id}: aplicación de la longitud incorrecta`);
 }
 if(s.kind==="pole"){
  const star=mod360(parseAngle(s.aries)+parseAngle(s.sha));
  const local=mod360(star-parseAngle(s.longitude));
  assert(close(local,parseAngle(s.computed)),`P${id}: hL* calculado incorrectamente`);
  assert(arcMinuteDifference(local,parseAngle(s.result))<=.41,`P${id}: la opción oficial se aparta más de 0,4′ de la cuenta`);
 }
 if(s.kind==="declination"){
  const correction=(parseAngle(s.at11)-parseAngle(s.at10))*10/60;
  assert(Math.abs(correction*3600+5)<.01,`P${id}: interpolación de declinación incorrecta`);
  assert(Math.abs(parseAngle(s.result)-(-20-58/60-11/3600))<1e-8,`P${id}: resultado de declinación incorrecto`);
 }
 if(s.kind==="height"){
  const rad=Math.PI/180,l=parseAngle(s.latitude)*rad,d=parseAngle(s.declination)*rad,p=parseAngle(s.pole)*rad;
  const ae=Math.asin(Math.sin(l)*Math.sin(d)+Math.cos(l)*Math.cos(d)*Math.cos(p))/rad;
  assert(Math.abs(ae-parseAngle(s.calculated))*60<.06,`P${id}: altura estimada calculada incorrectamente`);
  assert(Math.abs(ae-parseAngle(s.result))*60<.25,`P${id}: la opción elegida no es la aproximación correcta`);
 }

 const required=expectedAssets(s),questionAssets=assets[id]||[];
 for(const kind of required)assert(questionAssets.some(src=>assetKind(src)===kind),`P${id}: falta la hoja ${kind}`);
 for(const src of questionAssets){
  const file=path.join(root,src);
  assert(fs.existsSync(file),`P${id}: no existe ${src}`);
  if(src.endsWith(".png")){
   const data=fs.readFileSync(file);
   assert(data.length>30000,`P${id}: imagen demasiado pequeña o vacía: ${src}`);
   assert(data.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),`P${id}: PNG inválido: ${src}`);
  }
 }

 const html=window.reclassifiedSolutionHTML(q);
 assert(/PASO 1/.test(html)&&/Resolución completa/.test(html),`P${id}: resolución incompleta`);
 assert(html.includes(s.result),`P${id}: el resultado no aparece en la resolución`);
 assert(!html.includes("thenauticalalmanac.com"),`P${id}: queda un enlace externo de incrementos`);
 assert(/data-almanac-(?:wheel|special)/.test(html),`P${id}: falta el gráfico específico`);
 assert(window.RECLASSIFIED_CALCULATOR_GUIDES[`almanac-${id}`],`P${id}: falta la guía de calculadora`);
 console.log(`OK ${String(id).padStart(4)} · ${q.convocatoria} P${q.number} · ${s.kind} · ${s.result} (${s.answer})`);
}

console.log(`\nAUDITORÍA COMPLETA: ${ids.length}/34 preguntas superadas.`);
