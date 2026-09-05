(function(){
"use strict";

const LESSONS={
 13:{kind:"sun",date:"24 de junio de 2023",time:"10:20:00",base:"329°23,9′",inc:"5°00,0′",result:"334°23,9′",answer:"C",carry:"La fecha estaba en la pregunta anterior del examen original. Aquí la dejamos a la vista porque esta práctica presenta preguntas sueltas."},
 53:{kind:"aries",date:"24 de marzo de 2023",time:"23:10:00",base:"167°09,4′",inc:"2°30,4′",result:"169°39,8′",answer:"D"},
 54:{kind:"star",date:"24 de marzo de 2023",time:"23:30:00",body:"Spica",base:"174°40,6′",sha:"158°23,6′",result:"333°04,2′",answer:"B",ariesGiven:true},
 55:{kind:"pole",date:"25 de marzo de 2023",time:"09:20:00",body:"Vega",aries:"322°34,8′",sha:"80°34,4′",longitude:"27°05,0′ W",computed:"16°04,2′ W",result:"16°04,6′ W",answer:"C"},
 94:{kind:"declination",date:"26 de noviembre de 2022",time:"10:10:00",result:"−20°58′11″",answer:"C",carry:"La fecha, la hora y la situación pertenecen a la pregunta anterior del examen original; por eso se repiten aquí."},
 134:{kind:"sun",date:"1 de julio de 2022",time:"15:20:10",base:"44°01,0′",inc:"5°02,5′",result:"49°03,5′",answer:"C"},
 137:{kind:"aries",date:"2 de julio de 2022",time:"03:20:50",base:"325°08,3′",inc:"5°13,4′",result:"330°21,7′",answer:"B"},
 138:{kind:"star",date:"2 de julio de 2022",time:"05:10:10",body:"Deneb",base:"357°46,1′",sha:"49°26,7′",result:"47°12,8′",answer:"D",normalize:true,ariesGiven:true},
 174:{kind:"local",date:"2 de abril de 2022",time:"23:10:00",base:"178°46,3′",longitude:"62°36,4′ W",operator:"−",result:"116°09,9′",answer:"A"},
 175:{kind:"star",date:"2 de abril de 2022",time:"23:55:00",body:"Sirius",base:"190°03,2′",sha:"258°28,3′",result:"88°31,5′",answer:"C",normalize:true,ariesGiven:true},
 214:{kind:"sun",date:"17 de noviembre de 2021",time:"10:00:00",base:"330°17,9′",inc:"0°00,0′",result:"330°17,9′",answer:"A",note:"La reproducción oficial marca las cuatro opciones; la comprobación del Almanaque conduce a 330°17,9′."},
 297:{kind:"local",date:"20 de abril de 2021",time:"23:26:00",base:"200°45,4′",longitude:"66°14,4′ W",operator:"−",result:"134°31,0′",answer:"D"},
 332:{kind:"sun",date:"29 de marzo de 2020",time:"10:20:00",base:"328°50,0′",inc:"5°00,0′",result:"333°50,0′",answer:"D"},
 333:{kind:"aries",date:"30 de marzo de 2020",time:"10:40:00",base:"338°15,0′",inc:"10°01,6′",result:"348°16,6′",answer:"D"},
 372:{kind:"sun",date:"29 de marzo de 2020",time:"10:20:00",base:"328°50,0′",inc:"5°00,0′",result:"333°50,0′",answer:"D"},
 373:{kind:"aries",date:"30 de marzo de 2020",time:"10:40:00",base:"338°15,0′",inc:"10°01,6′",result:"348°16,6′",answer:"D"},
 413:{kind:"sun",date:"16 de noviembre de 2019",time:"11:15:00",base:"348°49,8′",inc:"3°45,0′",result:"352°34,8′",answer:"B",note:"El texto importado arrastraba el valor 356°19,8′ de la pregunta siguiente del examen. No se usa aquí."},
 454:{kind:"sun",date:"22 de junio de 2019",time:"10:40:00",base:"329°30,9′",inc:"10°00,0′",result:"339°30,9′",answer:"D"},
 493:{kind:"sun",date:"22 de marzo de 2019",time:"13:10:00",base:"13°15,7′",inc:"2°30,0′",result:"15°45,7′",answer:"B",carry:"La fecha procede del comienzo del bloque de cálculo del examen original y se muestra aquí para que la pregunta funcione aislada."},
 533:{kind:"height",date:"17 de noviembre de 2018",time:"10:40:00",latitude:"28°30,0′ N",declination:"−19°01,2′",pole:"30°54,0′ E",result:"33°52,4′",answer:"C",carry:"La situación estimada del examen original era 28°30,0′ N · 014°40,0′ W. Para esta fórmula se utiliza su latitud."},
 571:{kind:"sun",date:"12 de junio de 2018",time:"06:00:00",base:"270°03,1′",inc:"0°00,0′",result:"270°03,1′",answer:"D",carry:"La hora oficial era 08:00 (H+2); antes de entrar en el Almanaque se convierte en HcG = 06:00."},
 611:{kind:"aries",date:"9 de marzo de 2018",time:"23:00:30",base:"152°34,8′",inc:"0°07,5′",result:"152°42,3′",answer:"A"},
 613:{kind:"star",date:"10 de marzo de 2018",time:"03:20:10",body:"Spica",base:"217°47,9′",sha:"158°27,6′",result:"16°15,5′",answer:"B",normalize:true,ariesGiven:true},
 651:{kind:"aries",date:"20 de noviembre de 2017",time:"06:30:00",base:"149°26,7′",inc:"7°31,2′",result:"156°57,9′",answer:"A",carry:"La hora de huso 22:30 del día 19 corresponde a HcG 06:30 del día 20. El cambio de fecha es imprescindible."},
 691:{kind:"aries",date:"25 de junio de 2017",time:"17:43:40",base:"168°59,1′",inc:"10°56,0′",result:"179°55,1′",answer:"D",carry:"La pregunta escribe «hora de huso», pero utiliza la HcG = 17:43:40 obtenida en el ejercicio anterior."},
 692:{kind:"star",date:"25 de junio de 2017",time:"17:43:40",body:"Antares",base:"179°58,1′",sha:"112°22,6′",declination:"−26°28,1′",result:"292°20,7′",answer:"B",ariesGiven:true},
 730:{kind:"sun",date:"26 de marzo de 2017",time:"12:50:00",base:"358°36,0′",inc:"12°30,0′",result:"11°06,0′",answer:"C",normalize:true,carry:"La HRB 10:50, ya arreglada a hora de huso, corresponde a HcG 12:50. Primero se convierte la hora; después se abre el Almanaque."},
 772:{kind:"sun",date:"20 de noviembre de 2016",time:"10:50:00",base:"333°34,6′",inc:"12°30,0′",result:"346°04,6′",answer:"C"},
 810:{kind:"starSeconds",date:"26 de junio de 2016",time:"22:30:00",body:"Antares",ariesBase:"245°27′10″",ariesInc:"7°31′14″",base:"252°58′24″",sha:"112°23′24″",raw:"365°21′48″",result:"005°21′48″",answer:"A",normalize:true},
 894:{kind:"sun",date:"22 de noviembre de 2015",time:"07:43:20",base:"288°30,1′",inc:"10°50,0′",result:"299°20,1′",answer:"D",carry:"El enunciado da HcL = 06:30 y L = 18°20′ W. Esa longitud equivale a 1 h 13 min 20 s; al estar al Oeste: HcG = 06:30:00 + 01:13:20 = 07:43:20."},
 895:{kind:"star",date:"22 de noviembre de 2015",time:"08:10:00",body:"Procyon",ariesBase:"180°59,6′",ariesInc:"2°30,4′",base:"183°30,0′",sha:"244°57,9′",result:"68°27,9′",answer:"A",normalize:true},
 935:{kind:"sun",date:"21 de junio de 2015",time:"06:30:00",base:"254°35,0′",inc:"7°30,0′",result:"262°05,0′",answer:"B"},
 974:{kind:"sun",date:"29 de marzo de 2015",time:"10:20:00",base:"328°46,8′",inc:"5°00,0′",result:"333°46,8′",answer:"C"},
 975:{kind:"aries",date:"29 de marzo de 2015",time:"10:40:00",base:"336°29,6′",inc:"10°01,6′",result:"346°31,2′",answer:"D"}
};

const IDS=new Set(Object.keys(LESSONS).map(Number));
IDS.forEach(id=>window.RECLASSIFIED_LESSON_IDS?.add(id));

const baseType=window.reclassifiedTypeHTML;
const baseSolution=window.reclassifiedSolutionHTML;
const baseQuick=window.reclassifiedQuickHTML;
const baseGraphics=window.initReclassifiedGraphics;

const angleParts=value=>{const m=String(value).match(/(\d+)°\s*(\d+)(?:[,.](\d+))?′(?:\s*(\d+(?:[,.]\d+)?)″)?/);return m?[m[1],m[2]+(m[3]?","+m[3]:""),m[4]||""]:null};
const angleKeys=value=>{const p=angleParts(value);if(!p)return[];const out=[];p[0].split("").forEach(x=>out.push(x));out.push("°′″");p[1].split("").forEach(x=>out.push(x===","?".":x));out.push("°′″");if(p[2]){p[2].split("").forEach(x=>out.push(x===","?".":x));out.push("°′″")}return out};
const operationFor=s=>s.kind==="local"?s.operator:"+";
const operands=s=>s.kind==="star"||s.kind==="starSeconds"?[s.base,s.sha]:s.kind==="local"?[s.base,s.longitude]:[s.base,s.inc];

Object.entries(LESSONS).forEach(([id,s])=>{
 if(!["sun","aries","star","starSeconds","local"].includes(s.kind))return;
 const [a,b]=operands(s),op=operationFor(s),expected=angleKeys(a).concat([op],angleKeys(b),["="]);
 if(s.normalize)expected.push("−","3","6","0","°′″","=");
 const directions=expected.map(k=>`Pulsa ${k}.`);
 directions[0]=s.kind==="star"||s.kind==="starSeconds"?`Empieza escribiendo hGγ = ${s.base}.`:s.kind==="local"?`Empieza escribiendo hGγ = ${s.base}.`:`Empieza con el valor de la hora entera: ${s.base}.`;
 directions[angleKeys(a).length]=op==="−"?"Pulsa − porque la longitud Oeste se resta.":"Pulsa + para añadir el segundo arco.";
 window.RECLASSIFIED_CALCULATOR_GUIDES[`almanac-${id}`]={expected,directions,formulaEnd:expected.length,inverseEnd:expected.length,milestones:[{at:expected.length,value:s.result}],storageKey:`navegandoAndo_almanac_${id}_v1`,finalText:`Resultado: ${s.result} · respuesta ${s.answer}.`,subtitle:"Cálculo guiado del horario astronómico.",objective:`Objetivo: ${s.result} · respuesta ${s.answer}`,initial:directions[0],steps:"<li>Escribir el primer valor.</li><li>Aplicar la suma o resta indicada.</li><li>Si supera 360°, quitar una vuelta completa.</li>"};
});

const formulaRow=(symbol,label,expression,tone="green")=>`<div class="context-formula almanac-formula"><div class="context-formula-left"><small>${label}</small><b>${symbol}</b></div><div class="context-formula-eq">=</div><div class="context-formula-right ${tone}"><b>${expression}</b></div></div>`;
const almanacSheets=q=>{const local=typeof window.almanacHTML==="function"?window.almanacHTML(q):"";if(local)return local;const s=LESSONS[q.id],year=(s?.date.match(/(20\d{2})/)||[])[1];if(!year)return"";const href=year==="2020"?"https://thenauticalalmanac.com/TNARegular/2020_Nautical_Almanac.pdf#page=66":year==="2015"?"https://thenauticalalmanac.com/TNARegular/2015_Nautical_Almanac.pdf":"";return href?`<a class="almanac-btn" href="${href}" target="_blank" rel="noopener">📖 Abrir el Almanaque Náutico ${year} · busca la fecha ${s.date}</a><div class="sub" style="margin-top:8px">La hoja se abre en el documento anual; localiza la fecha indicada antes de leer la fila UT.</div>`:""};
const dataBox=(label,value,missing=false)=>`<div class="context-data${missing?" almanac-missing":""}"><span>${label}</span><b>${value}</b></div>`;
const finalBox=s=>`<div class="context-result almanac-result"><b>Resultado final: ${resultSymbol(s)} = ${s.result}${s.declination&&(s.kind==="star"||s.kind==="starSeconds")?` · d* = ${s.declination}`:""} · respuesta ${s.answer}</b></div>`;
const resultSymbol=s=>s.kind==="sun"?"hG☉":s.kind==="aries"?"hGγ":s.kind==="star"||s.kind==="starSeconds"?"hG*":s.kind==="local"?"hLγ":s.kind==="pole"?"P":s.kind==="declination"?"d☉":"ae☉";
const kindTitle=s=>s.kind==="sun"?"Horario de Greenwich del Sol":s.kind==="aries"?"Horario de Greenwich de Aries":s.kind==="star"||s.kind==="starSeconds"?`Horario de Greenwich de ${s.body}`:s.kind==="local"?"Horario local de Aries":s.kind==="pole"?"Ángulo en el Polo con una estrella":s.kind==="declination"?"Declinación del Sol":"Altura estimada · triángulo de posición";
const recognition=s=>s.kind==="sun"?"dan fecha y HcG, y piden hG☉. La latitud y la longitud no se usan para un horario de Greenwich.":s.kind==="aries"?"dan fecha y HcG, y piden hGγ. Se lee Aries, no la columna del Sol.":s.kind==="star"||s.kind==="starSeconds"?"dan hGγ y piden el horario de una estrella. Hay que sumar el ángulo sidéreo A.S.* de esa estrella.":s.kind==="local"?"ya dan hGγ y piden hLγ. La longitud Este suma y la longitud Oeste resta.":s.kind==="pole"?"piden P. Antes hay que obtener el horario de la estrella y llevarlo al meridiano del observador.":s.kind==="declination"?"piden d☉, no un horario. Se interpola la declinación entre dos horas consecutivas.":"piden ae☉ y aparecen l, d y P: es la fórmula del triángulo de posición, no un ejercicio de horario.";

window.reclassifiedTypeHTML=function(q){
 const s=LESSONS[q.id];if(!s)return baseType(q);
 const needs=s.kind==="local"?"Solo si hGγ no viniera ya dado; en esta pregunta ya está calculado.":s.kind==="height"?"No para el horario: l, d y P ya están dados.":"Sí. Se abre en el paso exacto en que hace falta cada dato.";
 return `<div class="context-lesson"><div class="context-card context-type almanac-type"><h3>TIPO DE PROBLEMA · ${kindTitle(s).toUpperCase()}</h3><p><b>Cómo reconocerlo:</b> ${recognition(s)}</p><div class="context-note"><b>¿Necesitas Almanaque?</b> ${needs}</div>${!["sun","aries","star","starSeconds","local"].includes(s.kind)?`<div class="context-note"><b>Clasificación afinada:</b> esta pregunta aparecía dentro del lote del Almanaque, pero su operación real es <b>${kindTitle(s)}</b>. Por eso recibe su método correcto y no una plantilla equivocada.</div>`:""}</div></div>`;
};

function standardSolution(q,s){
 const isStar=s.kind==="star"||s.kind==="starSeconds",isLocal=s.kind==="local",isAries=s.kind==="aries",starNeedsAries=isStar&&!s.ariesGiven;
 const firstSymbol=isStar||isLocal?"hGγ":isAries?"hGγ":"hG☉";
 const requested=resultSymbol(s);
 const secondLabel=isStar?`A.S.* DE ${s.body.toUpperCase()}`:isLocal?"LONGITUD":isAries?"INCREMENTO DE ARIES":"INCREMENTO DEL SOL";
 const secondValue=isStar?s.sha:isLocal?s.longitude:s.inc;
 const rule=isStar?`hGγ + A.S.*`:isLocal?`hGγ ${s.operator} L`:isAries?"valor de la hora entera + incremento de Aries":"valor de la hora entera + incremento del Sol";
 const calcExpression=isStar?`${s.base} + ${s.sha}`:isLocal?`${s.base} ${s.operator} ${s.longitude.replace(/\s[WE]$/,'')}`:`${s.base} + ${s.inc}`;
 const rawNeedsNormalize=s.normalize?`<p>La primera cuenta supera 360°. Un horario se expresa entre 0° y 360°, así que resta <b>360° una sola vez</b>.</p>`:"";
 const sheetInstruction=isLocal?`El enunciado ya entrega <b>hGγ = ${s.base}</b>; no abras el Almanaque de nuevo. Solo aplica la longitud.`:isStar?(starNeedsAries?`Primero, en la página diaria de <b>${s.date}</b>, busca Aries a UT ${s.time.slice(0,2)}: <b>${s.ariesBase}</b>. Añade el incremento de ${s.time.slice(3,5)} min ${s.time.slice(6,8)} s: <b>${s.ariesInc}</b>. Así obtienes <b>hGγ = ${s.base}</b>. Después, en la tabla de estrellas, busca <b>${s.body}</b>.`:`El enunciado ya entrega <b>hGγ = ${s.base}</b>. En la tabla de estrellas busca la fila <b>${s.body}</b> y copia su <b>A.S.* = ${s.sha}</b>${s.declination?` y su <b>d* = ${s.declination}</b>`:""}.`):`En la página diaria de <b>${s.date}</b>, busca la fila <b>UT ${s.time.slice(0,2)}</b> y la columna <b>${isAries?"ARIES · hGγ":"SOL · hG☉"}</b>. Copia <b>${s.base}</b>.`;
 const incrementInstruction=isLocal?`La longitud es <b>${s.longitude}</b>. Regla fija: Este suma · Oeste resta. Por eso aquí se utiliza <b>${s.operator}</b>.`:isStar?`En la fila de <b>${s.body}</b> copia <b>A.S.* = ${s.sha}</b>${s.declination?` y <b>d* = ${s.declination}</b>`:""}. El ángulo sidéreo siempre se <b>suma</b> a hGγ.`:`La página diaria solo da la hora entera. Como la HcG es ${s.time}, busca <b>${s.time.slice(3,5)} min ${s.time.slice(6,8)} s</b> en la tabla de incrementos, columna <b>${isAries?"Aries":"Sol y planetas"}</b>: <b>${s.inc}</b>.`;
 const minute=Number(s.time.slice(3,5)),incrementPage=261+Math.floor(minute/3),incrementLink=!isLocal&&(!isStar||starNeedsAries)?`<a class="almanac-btn almanac-increment-link" href="https://thenauticalalmanac.com/TNARegular/2023_Nautical_Almanac.pdf#page=${incrementPage}" target="_blank" rel="noopener">📖 Abrir la tabla real de incrementos · ${minute} minutos</a><div class="sub" style="margin-top:7px">La tabla de incrementos es universal: el valor depende de los minutos y segundos, no del año de la observación.</div>`:"";
 const firstFormula=isStar&&starNeedsAries?`${s.ariesBase} + ${s.ariesInc} = ${s.base}`:s.base;
 const ariesGivenExplanation=isStar&&s.ariesGiven?`<div class="context-note"><b>¿Qué significa hGγ y de dónde sale?</b> <b>hG</b> significa horario en Greenwich y <b>γ</b> representa el punto Aries. Juntos, <b>hGγ</b> es el horario en Greenwich del punto Aries. En esta pregunta no tienes que calcularlo ni buscarlo en el Almanaque: el propio enunciado ya proporciona <b>hGγ = ${s.base}</b>.</div>`:"";
 const graphicHeading=isStar?`de Greenwich a ${s.body}`:isLocal?"de Greenwich al meridiano del lugar":isAries?"avance de Aries durante la hora":"avance del Sol durante la hora";
 const graphicIntro=isStar?`El arco <b>azul</b> es <b>hGγ</b>: desde el meridiano de Greenwich hasta Aries, contado hacia el <b>Oeste</b>. Al mover el control aparece el arco <b>naranja</b>, <b>A.S.*</b>: desde Aries hasta ${s.body}, también hacia el <b>Oeste</b>. El arco <b>verde</b> reúne ambos y representa <b>${requested}</b>. Aunque el punto final quede cerca del lado Este de Greenwich, aquí no usamos el camino corto: el horario de Greenwich se expresa siempre de 0° a 360° hacia el Oeste.`:isLocal?`El arco <b>azul</b> lleva de Greenwich a Aries y representa <b>hGγ</b>. El arco <b>naranja</b> sitúa el meridiano del observador mediante su longitud. El arco <b>verde</b> se mide desde ese meridiano hasta Aries, hacia el <b>Oeste</b>, y es <b>hLγ</b>.`:isAries?`El arco <b>azul</b> es el horario de Aries a la hora entera. El tramo <b>naranja</b> es lo que Aries avanza durante los minutos y segundos. El arco <b>verde</b> es el horario final <b>hGγ</b>. Todos se cuentan desde Greenwich hacia el <b>Oeste</b>.`:`El arco <b>azul</b> es el horario del Sol a la hora entera. El tramo <b>naranja</b> es lo que el Sol avanza durante los minutos y segundos. El arco <b>verde</b> es el horario final <b>hG☉</b>. Todos se cuentan desde Greenwich hacia el <b>Oeste</b>.`;
 const trainer=["sun","aries","star","starSeconds","local"].includes(s.kind)?`<div class="calc-trainer" data-calculator-trainer data-trainer-instance="pregunta-${q.id}" data-height-guide="almanac-${q.id}"></div>`:"";
 return `<details class="card almanac-complete" open><summary><b>🟢 Resolución completa · comprobada varias veces</b></summary><div class="context-lesson">
 <div class="context-step blue"><span class="context-step-label">PASO 1</span><b>IDENTIFICA QUÉ PIDEN Y ORDENA LOS DATOS</b><div class="context-data-grid">${dataBox("FECHA",s.date)}${dataBox("HORA CIVIL DE GREENWICH · HcG",s.time)}${(isStar&&s.ariesGiven)||isLocal?dataBox("hGγ YA DADO",s.base):""}${dataBox("RESULTADO QUE FALTA",`${requested} = ?`,true)}</div>${ariesGivenExplanation}${s.carry?`<div class="context-note"><b>Dato recuperado del examen original:</b> ${s.carry}</div>`:""}<div class="context-note"><b>No mezcles coordenadas con este cálculo:</b> si piden un horario <b>en Greenwich</b>, la situación estimada no modifica el resultado. La longitud solo interviene cuando se pide un horario <b>del lugar</b>.</div></div>
 <div class="context-step"><span class="context-step-label">PASO 2</span><b>${isLocal?"APLICA LA LONGITUD":"ABRE LA HOJA CORRECTA DEL ALMANAQUE"}</b><p>${sheetInstruction}</p>${isLocal?"":almanacSheets(q)}${formulaRow(firstSymbol,starNeedsAries?"OBTÉN PRIMERO hGγ":"PRIMER DATO",firstFormula)}</div>
 <div class="context-step green"><span class="context-step-label">PASO 3</span><b>${isStar?"LEE EL ÁNGULO SIDÉREO DE LA ESTRELLA":isLocal?"DECIDE EL SIGNO DE LA LONGITUD":"LEE EL INCREMENTO DE MINUTOS Y SEGUNDOS"}</b><p>${incrementInstruction}</p>${incrementLink}<div class="context-data-grid">${dataBox(secondLabel,secondValue)}${s.declination&&isStar?dataBox("d* · DECLINACIÓN DE LA ESTRELLA",s.declination):""}</div>${formulaRow(requested,"FÓRMULA PREPARADA",rule)}</div>
 <div class="context-step purple" data-calculation-zone><span class="context-step-label">PASO 4</span><b>REALIZA LA CUENTA CON LA CALCULADORA</b>${formulaRow(requested,"SUSTITUCIÓN COMPLETA",calcExpression)}${rawNeedsNormalize}${trainer}${finalBox(s)}${s.note?`<div class="context-note"><b>Comprobación del original:</b> ${s.note}</div>`:""}</div>
 <div class="context-visual almanac-visual" id="almanac-graphic-${q.id}"><h3>GRÁFICO INTERACTIVO · ${graphicHeading}</h3><p>${graphicIntro}</p><canvas data-almanac-wheel data-question-id="${q.id}" aria-label="Círculo horario interactivo del ejercicio"></canvas><div class="context-controls"><label>Ver avance <input data-almanac-progress type="range" min="0" max="100" value="100" step="1"></label><button type="button" data-almanac-reset>Repetir</button></div></div>
 <div class="context-check"><b>Comprobación independiente:</b> ${calcExpression}${s.normalize?"; después se resta 360°":""} = <b>${s.result}</b>. Coincide con la respuesta ${s.answer}.</div>
 </div></details>`;
}

function poleSolution(q,s){return `<details class="card almanac-complete" open><summary><b>🟢 Resolución completa · comprobada varias veces</b></summary><div class="context-lesson">
 <div class="context-step blue"><span class="context-step-label">PASO 1</span><b>ORDENA LOS DATOS</b><div class="context-data-grid">${dataBox("hGγ · ARIES",s.aries)}${dataBox("A.S.* · VEGA",s.sha)}${dataBox("LONGITUD",s.longitude)}${dataBox("P · RESULTADO",s.result,true)}</div></div>
 <div class="context-step"><span class="context-step-label">PASO 2</span><b>OBTÉN EL HORARIO DE GREENWICH DE VEGA</b>${almanacSheets(q)}${formulaRow("hG*","HORARIO DE VEGA",`${s.aries} + ${s.sha} = 403°09,2′ − 360° = 43°09,2′`)}</div>
 <div class="context-step green"><span class="context-step-label">PASO 3</span><b>LLEVA EL HORARIO AL MERIDIANO DEL OBSERVADOR</b><p>La longitud es Oeste, por tanto se resta:</p>${formulaRow("hL*","HORARIO LOCAL DE VEGA",`43°09,2′ − 27°05,0′ = ${s.computed}`)}</div>
 <div class="context-step purple"><span class="context-step-label">PASO 4</span><b>CONVIERTE hL* EN P Y COMPARA CON LAS OPCIONES</b><p>Como hL* es menor de 180°, ese mismo arco ya es el camino corto y queda al Oeste. El Almanaque da <b>${s.computed}</b>; la única opción con ese valor aproximado y el sentido correcto es <b>${s.result}</b>.</p>${formulaRow("P","ÁNGULO EN EL POLO",`P ≈ ${s.computed} → opción ${s.answer}: ${s.result}`)}${finalBox(s)}</div>
 <div class="context-check"><b>Comprobación transparente:</b> 322°34,8′ + 80°34,4′ − 360° − 27°05,0′ = 16°04,2′ W. La diferencia de 0,4′ con la opción oficial es de tabla/redondeo; no se oculta ni se fuerza la cuenta.</div></div></details>`}

function declinationSolution(q,s){return `<details class="card almanac-complete" open><summary><b>🟢 Resolución completa · comprobada varias veces</b></summary><div class="context-lesson">
 <div class="context-step blue"><span class="context-step-label">PASO 1</span><b>RECUPERA LOS DATOS QUE FALTAN DEL ENUNCIADO ANTERIOR</b><div class="context-data-grid">${dataBox("FECHA",s.date)}${dataBox("HcG",s.time)}${dataBox("DECLINACIÓN DEL SOL",`d☉ = ?`,true)}</div><div class="context-note">${s.carry}</div></div>
 <div class="context-step"><span class="context-step-label">PASO 2</span><b>LEE DOS FILAS CONSECUTIVAS</b>${almanacSheets(q)}<p>En la columna <b>Dec del Sol</b>: a UT 10 lee <b>S 20°58,1′</b>; a UT 11 lee <b>S 20°58,6′</b>. La letra S equivale al signo negativo.</p></div>
 <div class="context-step green"><span class="context-step-label">PASO 3</span><b>INTERPOLA SOLO LOS 10 MINUTOS</b><p>En una hora la declinación aumenta 0,5′ hacia el Sur. En 10 minutos cambia la sexta parte:</p>${formulaRow("corrección d","10 MIN DE 60 MIN",`0,5′ × 10 ÷ 60 = 0,0833′ = 5″`)}</div>
 <div class="context-step purple"><span class="context-step-label">PASO 4</span><b>SUMA LA CORRECCIÓN CONSERVANDO EL SUR</b>${formulaRow("d☉","DECLINACIÓN A LAS 10:10",`S 20°58′06″ + 5″ = S 20°58′11″`)}${finalBox(s)}</div>
 <div class="context-check"><b>Comprobación:</b> el resultado queda entre los valores de UT 10 y UT 11 y avanza hacia el Sur; por tanto <b>d☉ = −20°58′11″</b>.</div></div></details>`}

function heightSolution(q,s){return `<details class="card almanac-complete" open><summary><b>🟢 Resolución completa · comprobada varias veces</b></summary><div class="context-lesson">
 <div class="context-step blue"><span class="context-step-label">PASO 1</span><b>RECUPERA LA SITUACIÓN DEL EXAMEN ORIGINAL</b><div class="context-data-grid">${dataBox("LATITUD · l",s.latitude)}${dataBox("DECLINACIÓN · d",s.declination)}${dataBox("ÁNGULO EN EL POLO · P",s.pole)}${dataBox("ALTURA ESTIMADA · ae☉","?",true)}</div><div class="context-note">${s.carry}</div></div>
 <div class="context-step green"><span class="context-step-label">PASO 2</span><b>ESCRIBE LA FÓRMULA DEL TRIÁNGULO DE POSICIÓN</b>${formulaRow("sen(ae☉)","PARTE IZQUIERDA","sen(l) × sen(d) + cos(l) × cos(d) × cos(P)")}${formulaRow("sen(ae☉)","DATOS SUSTITUIDOS","sen(+28°30,0′) × sen(−19°01,2′) + cos(+28°30,0′) × cos(−19°01,2′) × cos(30°54,0′)")}</div>
 <div class="context-step purple" data-calculation-zone><span class="context-step-label">PASO 3</span><b>CALCULA LA PARTE DERECHA Y RECUPERA EL ÁNGULO</b><p>La parte derecha da aproximadamente <b>sen(ae☉) = 0,557408</b>. Pulsa <b>SHIFT → SIN</b> para recuperar el ángulo cuyo seno acabas de calcular.</p>${formulaRow("ae☉","RESULTADO DE LA FÓRMULA",`33°52,6′ ≈ opción ${s.answer}: ${s.result}`)}${finalBox(s)}</div>
 <div class="context-check"><b>Comprobación independiente y transparente:</b> la fórmula da <b>ae☉ ≈ 33°52,6′</b>. La opción más próxima —a solo 0,2′— es <b>33°52,4′, respuesta C</b>. No se fuerza la cuenta para fingir una coincidencia exacta.</div></div></details>`}

window.reclassifiedSolutionHTML=function(q){const s=LESSONS[q.id];if(!s)return baseSolution(q);if(s.kind==="pole")return poleSolution(q,s);if(s.kind==="declination")return declinationSolution(q,s);if(s.kind==="height")return heightSolution(q,s);return standardSolution(q,s)};
window.reclassifiedQuickHTML=function(q,options={}){const s=LESSONS[q.id];if(!s)return baseQuick(q);const sheets=options.includeSheets&&["sun","aries","star","starSeconds","pole","declination"].includes(s.kind)?`<details class="context-quick"><summary><b>Hojas del Almanaque necesarias</b></summary>${almanacSheets(q)}</details>`:"";return `${sheets}<div class="context-quick"><b>Recordatorio rápido:</b> ${s.kind==="sun"?"fila de la hora entera del Sol + incremento de minutos y segundos":s.kind==="aries"?"fila de Aries + incremento propio de Aries":s.kind==="star"||s.kind==="starSeconds"?"hG* = hGγ + A.S.*; si pasa de 360°, resta 360°":s.kind==="local"?"hL = hG + longitud algebraica; Este suma y Oeste resta":s.kind==="declination"?"lee dos declinaciones consecutivas e interpola la fracción de hora":s.kind==="pole"?"hG* = hGγ + A.S.*; después hL* y finalmente P":"sen(ae) = sen(l) × sen(d) + cos(l) × cos(d) × cos(P)"}. <b>${resultSymbol(s)} = ${s.result} · ${s.answer}</b>.</div>`};

function deg(value){const p=angleParts(value);return p?(+p[0]+(+p[1].replace(",","."))/60+(p[2]?+p[2].replace(",",".")/3600:0)):0}
function drawWheel(canvas,s,progress){
 const rect=canvas.getBoundingClientRect(),w=Math.max(320,rect.width||760),h=Math.max(500,Math.round(w*.6)),dpr=Math.min(2,devicePixelRatio||1);
 canvas.width=w*dpr;canvas.height=h*dpr;
 const c=canvas.getContext("2d");c.setTransform(dpr,0,0,dpr,0,0);
 const isStar=s.kind==="star"||s.kind==="starSeconds",isLocal=s.kind==="local",isAries=s.kind==="aries",cx=w*.5,cy=h*.5,r=Math.min(w*.27,h*.29),toRad=v=>(v-90)*Math.PI/180;
 const vals=operands(s),a=deg(vals[0]),b=deg(vals[1]),direction=operationFor(s)==="−"?-1:1,p=Math.max(0,Math.min(1,progress/100)),end=a+direction*b*p,resultAngle=deg(s.result);
 c.clearRect(0,0,w,h);c.fillStyle="#f7fbff";c.fillRect(0,0,w,h);

 c.strokeStyle="#c8dbe9";c.lineWidth=16;c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.stroke();
 c.strokeStyle="#7d93a3";c.lineWidth=1.5;c.beginPath();c.arc(cx,cy,r-8,0,Math.PI*2);c.stroke();
 for(let value=0;value<360;value+=30){
  const t=toRad(value),major=value%90===0;
  c.strokeStyle=major?"#516b7d":"#90a6b5";c.lineWidth=major?3:1.3;c.beginPath();c.moveTo(cx+Math.cos(t)*(r-13),cy+Math.sin(t)*(r-13));c.lineTo(cx+Math.cos(t)*(r+13),cy+Math.sin(t)*(r+13));c.stroke();
  if(major){c.fillStyle="#173f5b";c.font="800 12px Arial";c.textAlign="center";const label=value===0?"0° / 360°":value===90?"90° W":value===180?"180°": "270° W";c.fillText(label,cx+Math.cos(t)*(r+34),cy+Math.sin(t)*(r+34)+4)}
 }

 const ray=(value,color,width)=>{const t=toRad(value);c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.moveTo(cx+Math.cos(t)*22,cy+Math.sin(t)*22);c.lineTo(cx+Math.cos(t)*(r+4),cy+Math.sin(t)*(r+4));c.stroke()};
 const arcArrow=(from,to,color,width,radius)=>{
  const clockwise=to>=from,start=toRad(from),finish=toRad(to);
  c.strokeStyle=color;c.lineWidth=width;c.lineCap="round";c.beginPath();c.arc(cx,cy,radius,start,finish,!clockwise);c.stroke();
  if(Math.abs(to-from)<2)return;
  const theta=finish,tangent=theta+(clockwise?Math.PI/2:-Math.PI/2),x=cx+Math.cos(theta)*radius,y=cy+Math.sin(theta)*radius,size=10;
  c.fillStyle=color;c.beginPath();c.moveTo(x+Math.cos(tangent)*size,y+Math.sin(tangent)*size);c.lineTo(x+Math.cos(tangent+2.45)*size,y+Math.sin(tangent+2.45)*size);c.lineTo(x+Math.cos(tangent-2.45)*size,y+Math.sin(tangent-2.45)*size);c.closePath();c.fill();
 };
 const dot=(value,fill,stroke="#ffffff")=>{const t=toRad(value),x=cx+Math.cos(t)*r,y=cy+Math.sin(t)*r;c.fillStyle=fill;c.strokeStyle=stroke;c.lineWidth=3;c.beginPath();c.arc(x,y,8,0,Math.PI*2);c.fill();c.stroke()};
 const pointLabel=(value,title,detail,color)=>{const t=toRad(value),radius=r+38;let x=cx+Math.cos(t)*radius,y=cy+Math.sin(t)*radius;y=Math.max(105,Math.min(h-125,y));x=Math.max(78,Math.min(w-78,x));c.textAlign="center";c.fillStyle=color;c.font="900 13px Arial";c.fillText(title,x,y);c.font="700 12px Arial";c.fillText(detail,x,y+17)};
 const legend=(y,color,text)=>{c.fillStyle=color;c.fillRect(Math.max(18,cx-r),y-10,15,5);c.fillStyle="#173f5b";c.font="700 13px Arial";c.textAlign="left";c.fillText(text,Math.max(42,cx-r+24),y)};

 const longitudeIsEast=isLocal&&/\sE$/.test(s.longitude),observerAngle=longitudeIsEast?-b:b;
 ray(0,"#516b7d",3);ray(a,"#2f73a8",3);
 if(isLocal){
  ray(observerAngle,"#dc7a13",3);arcArrow(0,a,"#2f73a8",9,r);arcArrow(0,observerAngle,"#dc7a13",7,r-13);arcArrow(observerAngle,observerAngle+resultAngle*p,"#198754",7,r+14);dot(observerAngle,"#dc7a13");dot(a,"#2f73a8");
 }else{
  ray(end,"#dc7a13",3);arcArrow(0,a,"#2f73a8",9,r);arcArrow(a,end,"#dc7a13",10,r);arcArrow(0,resultAngle*p,"#198754",5,r-22);dot(a,"#2f73a8");dot(end,isStar?"#ffd33d":"#dc7a13",isStar?"#dc7a13":"#ffffff");
 }

 c.textAlign="center";c.fillStyle="#173f5b";c.font="900 18px Arial";c.fillText(isStar?`Horario de ${s.body} · ${resultSymbol(s)} = ${s.result}`:isLocal?`Horario local de Aries · hLγ = ${s.result}`:`${resultSymbol(s)} = ${s.result}`,cx,32);
 c.font="800 13px Arial";c.fillStyle="#8a4b08";c.fillText("Los horarios se cuentan hacia el OESTE ↻",cx,58);
 c.save();c.translate(cx+17,cy-r*.52);c.rotate(-Math.PI/2);c.fillStyle="#516b7d";c.font="700 12px Arial";c.textAlign="center";c.fillText("MERIDIANO DE GREENWICH",0,0);c.restore();
 if(isStar){
  pointLabel(a,"ARIES",`hGγ = ${s.base}`,"#225f91");
  pointLabel(end,s.body.toUpperCase(),`${resultSymbol(s)} = ${s.result}`,"#a95408");
  legend(h-73,"#2f73a8",`hGγ = ${s.base} · Greenwich → Aries · hacia el Oeste`);
  legend(h-49,"#dc7a13",`A.S.* = ${s.sha} · Aries → ${s.body} · hacia el Oeste`);
  legend(h-25,"#198754",`${resultSymbol(s)} = ${s.result} · Greenwich → ${s.body} · hacia el Oeste`);
 }else if(isLocal){
  pointLabel(a,"ARIES",`hGγ = ${s.base}`,"#225f91");
  pointLabel(observerAngle,"MERIDIANO DEL LUGAR",`L = ${s.longitude}`,"#a95408");
  legend(h-73,"#2f73a8",`hGγ = ${s.base} · Greenwich → Aries · hacia el Oeste`);
  legend(h-49,"#dc7a13",`L = ${s.longitude} · sitúa el meridiano del observador`);
  legend(h-25,"#198754",`hLγ = ${s.result} · meridiano del lugar → Aries · hacia el Oeste`);
 }else{
  const body=isAries?"ARIES":"SOL",baseSymbol=isAries?"hGγ":"hG☉",incrementName=isAries?"incremento de Aries":"incremento del Sol";
  pointLabel(a,`${body} · HORA ENTERA`,`${baseSymbol} = ${s.base}`,"#225f91");
  pointLabel(end,`${body} · HORA EXACTA`,`${resultSymbol(s)} = ${s.result}`,"#a95408");
  legend(h-73,"#2f73a8",`${baseSymbol} = ${s.base} · valor a la hora entera`);
  legend(h-49,"#dc7a13",`${incrementName} = ${s.inc} · minutos y segundos`);
  legend(h-25,"#198754",`${resultSymbol(s)} = ${s.result} · resultado final desde Greenwich hacia el Oeste`);
 }
}

window.initReclassifiedGraphics=function(root){baseGraphics?.(root);root.querySelectorAll("[data-almanac-wheel]").forEach(canvas=>{if(canvas.dataset.ready)return;canvas.dataset.ready="1";const s=LESSONS[+canvas.dataset.questionId];if(!s||!["sun","aries","star","starSeconds","local"].includes(s.kind))return;const block=canvas.closest(".almanac-visual"),range=block.querySelector("[data-almanac-progress]"),reset=block.querySelector("[data-almanac-reset]");const render=()=>drawWheel(canvas,s,+range.value);range.addEventListener("input",render);reset.addEventListener("click",()=>{range.value=0;render();let v=0;const timer=setInterval(()=>{v+=4;range.value=Math.min(100,v);render();if(v>=100)clearInterval(timer)},28)});new ResizeObserver(render).observe(canvas);render()})};
})();
