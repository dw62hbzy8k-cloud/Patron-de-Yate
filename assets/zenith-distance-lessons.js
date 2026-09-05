(function(){
"use strict";

const SOLUTIONS={
  17:{
    title:"Junio 2023 · P18",answer:"C",av:"29°54,5′",avDeg:29+54.5/60,
    z:"60°05,5′",zScreen:"60°05′30″",signedZ:"−60°05,5′",face:"Sur",
    lat:"38°28,6′ N",lon:"002°40,0′ E",dec:"+23°22,9′",time:"16:30 HcG",
    inherited:false,needsAlmanac:false,
    avKeys:[29,"54.5"],
    check:"29°54,5′ + 60°05,5′ = 90°00,0′"
  },
  771:{
    title:"Noviembre 2016 · P12",answer:"A",av:"29°44,2′",avDeg:29+44.2/60,
    z:"60°15,8′",zScreen:"60°15′48″",signedZ:"−60°15,8′",face:"Sur",
    lat:"40°10,6′ N",lon:"008°20,2′ W",dec:"−19°36,9′",time:"11:40 HcG",
    inherited:true,needsAlmanac:true,ai:"29°31,7′",index:"+1,0′",eye:"3 m",
    observed:"29°32,7′",dip:"−3,1′",apparent:"29°29,6′",table:"+14,4′",
    additional:"+0,2′",avKeys:[29,"44.2"],
    correctionOps:[
      {key:"+",keys:[0,"1.0"],label:"corrección de índice",screen:"29°32′42″"},
      {key:"−",keys:[0,"3.1"],label:"depresión del horizonte",screen:"29°29′36″"},
      {key:"+",keys:[0,"14.4"],label:"Tabla B · limbo inferior del Sol",screen:"29°44′00″"},
      {key:"+",keys:[0,"0.2"],label:"corrección adicional de fecha",screen:"29°44′12″"}
    ],
    check:"29°44,2′ + 60°15,8′ = 90°00,0′"
  }
};

const IDS=new Set(Object.keys(SOLUTIONS).map(Number));
window.ZENITH_DISTANCE_SOLUTIONS=SOLUTIONS;
window.ZENITH_DISTANCE_LESSON_IDS=IDS;

function resultFrame(left,right,color="#30945b",background="#e9f8ef"){
  return `<div class="zenith-formula"><div class="zenith-formula-left"><b>${left}</b></div><div class="zenith-equals">=</div><div class="zenith-formula-right" style="border-color:${color};background:${background};color:${color==="#30945b"?"#176b43":"#493270"}"><b>${right}</b></div></div>`;
}

function dataCards(s){
  return `<div class="zenith-data-grid">
    <div><span>ALTURA VERDADERA</span><b>av = ${s.av}</b></div>
    <div><span>LATITUD ESTIMADA</span><b>l = ${s.lat}</b></div>
    <div><span>LONGITUD ESTIMADA</span><b>L = ${s.lon}</b></div>
    <div><span>DECLINACIÓN DEL SOL</span><b>d = ${s.dec}</b></div>
    <div><span>HORA CIVIL DE GREENWICH</span><b>${s.time}</b></div>
  </div>`;
}

function inheritedAltitudeHTML(s){
  return `<div class="zenith-context"><b>Datos del ejercicio anterior del examen original</b><p>Esta pregunta aparece separada en la zona de práctica, por eso dejamos aquí todos los datos que necesita: <b>19 de noviembre de 2016</b>, <b>${s.time}</b>, <b>l = ${s.lat}</b>, <b>L = ${s.lon}</b>, <b>d = ${s.dec}</b>, <b>ai = ${s.ai}</b>, <b>e = ${s.eye}</b>, <b>CI = 1′ a la derecha</b> y observación del <b>limbo inferior del Sol</b>.</p></div>
  <div class="zenith-almanac">
    <div><h4>ALMANAQUE NÁUTICO · página de correcciones</h4><p>Primero aplica la corrección de índice. Después, en la <b>Tabla A</b>, busca <b>e = 3 m</b> para obtener la depresión <b>${s.dip}</b>. Con la altura aparente <b>aa = ${s.apparent}</b>, entra en la <b>Tabla B · Sol · limbo inferior</b> y copia <b>${s.table}</b>. Por último, toma la corrección adicional de la fecha: <b>${s.additional}</b>.</p></div>
    <details><summary>Abrir la hoja real del Almanaque ↓</summary><div class="zenith-almanac-scroll"><img src="assets/almanaque/2016/2016_p387_correcciones_altura_verdadera.png" alt="Página 387 del Almanaque Náutico de 2016 con las tablas de corrección de alturas" loading="lazy"></div></details>
  </div>
  <div class="zenith-substep"><b>A · Corrección de índice</b><p>«1′ a la derecha» significa <b>CI = +1,0′</b>: se suma a la altura instrumental.</p>${resultFrame("ao","29°31,7′ + 0°01,0′ = 29°32,7′")}</div>
  <div class="zenith-substep"><b>B · Depresión del horizonte</b><p>La Tabla A da <b>−3,1′</b> para 3 m. Se aplica con su signo.</p>${resultFrame("aa","29°32,7′ − 0°03,1′ = 29°29,6′")}</div>
  <div class="zenith-substep"><b>C · Tabla B y corrección adicional</b><p>Ahora suma <b>+14,4′</b> de la Tabla B y <b>+0,2′</b> de la fecha.</p>${resultFrame("av","29°29,6′ + 0°14,4′ + 0°00,2′ = 29°44,2′")}</div>`;
}

function zenithDistanceProblemTypeHTML(q){
  const s=SOLUTIONS[q.id];if(!s)return "";
  return `<div class="zenith-type"><b>TIPO DE PROBLEMA · DISTANCIA CENITAL (z) Y ORIENTACIÓN</b><p>Lo reconoces porque pide la <b>distancia cenital z</b>: el arco que va desde el <b>cenit Z</b> del observador hasta el Sol. La altura verdadera <b>av</b> se mide desde el horizonte hasta el Sol; por eso ambas completan siempre 90°.</p><div class="zenith-memory"><b>RECUERDA:</b> <span>z = 90° − av</span>. Después se añade el signo: <b>cara al Norte → z positiva</b> · <b>cara al Sur → z negativa</b>.</div><p class="zenith-small">El signo de z expresa hacia qué lado del cenit queda el astro. No significa que la altura del Sol sea negativa.</p></div>`;
}

function zenithDistanceSolutionHTML(q){
  const s=SOLUTIONS[q.id];if(!s)return "";
  const firstStep=s.inherited?inheritedAltitudeHTML(s):`${dataCards(s)}<div class="zenith-note"><b>Para hallar el valor de z solo necesitas av.</b> La hora, la situación estimada y la declinación ayudan a interpretar la orientación, pero no entran en la resta <b>90° − av</b>. No necesitas abrir el Almanaque: el enunciado ya entrega la altura verdadera.</div>`;
  const sourceText=s.inherited?`La latitud es Norte y la declinación del Sol es Sur: el Sol queda al Sur del cenit. En el convenio usado en estos ejercicios, <b>cara al Sur significa z negativa</b>.`:`En esta pregunta, la situación es <b>${s.lat}</b> y el Sol tiene declinación <b>${s.dec}</b>. El enunciado y las opciones emplean el convenio náutico de orientación: el Sol queda <b>cara al Sur</b> respecto del cenit y, por tanto, z lleva signo negativo.`;
  return `<details class="card zenith-solution" open><summary><b>🟢 Resolución completa</b></summary><div class="zenith-body">
    <section class="zenith-step"><span class="zenith-step-number">PASO 1</span><h3>${s.inherited?"OBTÉN PRIMERO LA ALTURA VERDADERA (av)":"ORDENA LOS DATOS"}</h3>${firstStep}</section>
    <section class="zenith-step"><span class="zenith-step-number">PASO 2</span><h3>CALCULA EL VALOR DE LA DISTANCIA CENITAL</h3><p>Desde el horizonte hasta el cenit hay <b>90°</b>. Ya hemos recorrido <b>${s.av}</b> desde el horizonte hasta el Sol; lo que falta desde el Sol hasta el cenit es z.</p>${resultFrame("|z|",`90°00,0′ − ${s.av} = ${s.z}`)}<p class="zenith-small">Las barras de <b>|z|</b> quieren decir «solo el valor, todavía sin decidir el signo».</p><div class="zenith-calculator" data-calculation-zone><div><b>CALCULADORA · realiza esta misma resta</b><p>Escribe <b>90°00,0′ − ${s.av}</b>. La guía ilumina únicamente la tecla correcta.</p></div><div class="calc-trainer" data-calculator-trainer data-trainer-instance="pregunta-${q.id}" data-height-guide="zenith-${q.id}"></div></div><div class="zenith-screen"><span>LECTURA DE LA PANTALLA</span><b>${s.zScreen} = ${s.z}</b><small>${q.id===17?"30″ ÷ 60 = 0,5′; por eso 60°05′30″ equivale a 60°05,5′.":"48″ ÷ 60 = 0,8′; por eso 60°15′48″ equivale a 60°15,8′."}</small></div></section>
    <section class="zenith-step"><span class="zenith-step-number">PASO 3</span><h3>DECIDE LA ORIENTACIÓN Y PON EL SIGNO</h3><p>${sourceText}</p>${resultFrame("z",`${s.signedZ} · cara al ${s.face}`,"#7657a5","#f4effb")}<div class="zenith-result"><b>RESULTADO FINAL · ${s.answer} · z = ${s.signedZ} cara al ${s.face}</b></div><div class="zenith-check"><b>Comprobación independiente:</b> ${s.check}. La altura verdadera y el valor absoluto de la distancia cenital suman exactamente 90°.</div></section>
    ${zenithGraphicHTML(s,q.id)}
  </div></details>`;
}

function zenithDistanceQuickHTML(q){
  const s=SOLUTIONS[q.id];if(!s)return "";
  const inherited=s.inherited?`<div class="zenith-quick-context"><b>Datos heredados que necesitas:</b> 19/11/2016 · ${s.time} · l = ${s.lat} · L = ${s.lon} · d = ${s.dec} · ai = ${s.ai} · e = ${s.eye} · CI = 1′ a la derecha · limbo inferior del Sol.</div><details class="zenith-quick-almanac"><summary>Abrir la hoja real del Almanaque ↓</summary><div class="zenith-almanac-scroll"><img src="assets/almanaque/2016/2016_p387_correcciones_altura_verdadera.png" alt="Página 387 del Almanaque Náutico de 2016 con las tablas de corrección de alturas" loading="lazy"></div></details>`:"";
  return `<details class="quick-reminder"><summary>⚡ Recordatorio rápido</summary><div class="quick-reminder-body"><b>Reconoce:</b> piden distancia cenital y su orientación.${inherited}<ol>${s.inherited?`<li>Corrige ai con la página 387: <b>av = ${s.av}</b>.</li>`:""}<li><b>|z| = 90° − av = 90° − ${s.av} = ${s.z}</b>.</li><li>Cara al Sur → signo negativo.</li><li><b>${s.answer} · z = ${s.signedZ} cara al Sur</b>.</li></ol></div></details>`;
}

function zenithGraphicHTML(s,id){
  return `<section class="zenith-graphic"><div class="zenith-graphic-head"><div><h3>ESFERA CELESTE INTERACTIVA · interpreta lo calculado</h3><p>Arrástrala con el ratón. Las líneas de la parte posterior se ven más tenues para que la Tierra no parezca colocada encima de ellas.</p></div><button type="button" class="action" data-zenith-reset>Recuperar vista</button></div><canvas data-zenith-sphere data-question-id="${id}" role="img" aria-label="Esfera celeste tridimensional con el observador, el horizonte, el cenit, el Sol, la altura verdadera ${s.av} y la distancia cenital ${s.z}"></canvas><div class="zenith-legend"><div style="--c:#c93645"><b>Horizonte del observador</b><span>El círculo rojo pasa por N, E, S y W.</span></div><div style="--c:#7657a5"><b>av = ${s.av}</b><span>Arco morado: del horizonte al Sol.</span></div><div style="--c:#248a55"><b>|z| = ${s.z}</b><span>Arco verde: del Sol al cenit Z.</span></div></div><div class="zenith-graphic-note"><b>Cómo leerlo:</b> av y |z| están sobre el mismo vertical y completan el cuarto de circunferencia de 90°. El dibujo muestra el <b>corte vertical Norte–Sur utilizado para aprender el signo</b>; no pretende calcular el azimut exacto del Sol.</div></section>`;
}

function initZenithDistanceGraphics(root=document){
  root.querySelectorAll("canvas[data-zenith-sphere]").forEach(canvas=>{
    if(canvas.dataset.ready)return;canvas.dataset.ready="1";
    const s=SOLUTIONS[Number(canvas.dataset.questionId)],ctx=canvas.getContext("2d"),wrap=canvas.closest(".zenith-graphic");
    let yaw=.58,pitch=.22,drag=false,lastX=0,lastY=0;
    const rad=n=>n*Math.PI/180;
    const rotate=v=>{let[x,y,z]=v;const cy=Math.cos(yaw),sy=Math.sin(yaw);[x,y]=[x*cy-y*sy,x*sy+y*cy];const cp=Math.cos(pitch),sp=Math.sin(pitch);[y,z]=[y*cp-z*sp,y*sp+z*cp];return[x,y,z]};
    const circle=(fn,n=240)=>Array.from({length:n+1},(_,i)=>fn(i/n*Math.PI*2));
    function draw(){
      const w=Math.max(320,canvas.clientWidth||820),compact=w<590,h=Math.round(w*(compact?.88:.61)),dpr=Math.min(2,devicePixelRatio||1);
      if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr)}
      ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
      const cx=w*(compact?.5:.47),cy=h*.53,R=Math.min(w*(compact?.38:.3),h*.40),project=v=>{const q=rotate(v),k=1/(1.18-.18*q[1]);return{x:cx+q[0]*R*k,y:cy-q[2]*R*k,z:q[1]}};
      const sky=ctx.createRadialGradient(cx-R*.3,cy-R*.35,R*.05,cx,cy,R);sky.addColorStop(0,"#fff");sky.addColorStop(1,"#cfe3ef");ctx.fillStyle=sky;ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#355f87";ctx.lineWidth=2.4;ctx.stroke();
      const drawCurve=(pts,color,width,back=.16,dash=[])=>{for(let pass=0;pass<2;pass++){ctx.beginPath();let started=false;for(const v of pts){const p=project(v),front=p.z>=0;if((pass===1)!==front){started=false;continue}if(started)ctx.lineTo(p.x,p.y);else{ctx.moveTo(p.x,p.y);started=true}}ctx.globalAlpha=pass?1:back;ctx.strokeStyle=color;ctx.lineWidth=width;ctx.setLineDash(dash);ctx.stroke()}ctx.globalAlpha=1;ctx.setLineDash([])};
      const horizon=circle(t=>[Math.sin(t),Math.cos(t),0]),vertical=circle(t=>[0,Math.cos(t),Math.sin(t)]);
      drawCurve(vertical,"#9fb1bd",1.7,.1,[6,5]);drawCurve(horizon,"#c93645",4,.2);
      const a=rad(s.avDeg),altArc=Array.from({length:90},(_,i)=>{const t=a*i/89;return[0,-Math.cos(t),Math.sin(t)]}),zArc=Array.from({length:120},(_,i)=>{const t=a+(Math.PI/2-a)*i/119;return[0,-Math.cos(t),Math.sin(t)]});
      drawCurve(altArc,"#7657a5",7,.23);drawCurve(zArc,"#248a55",8,.23);
      const center=project([0,0,0]),earthR=R*.105;ctx.fillStyle="#2c88a5";ctx.beginPath();ctx.arc(center.x,center.y,earthR,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#174c71";ctx.lineWidth=2;ctx.stroke();ctx.fillStyle="#66a95e";ctx.beginPath();ctx.ellipse(center.x-earthR*.2,center.y-earthR*.08,earthR*.34,earthR*.18,-.45,0,Math.PI*2);ctx.fill();
      const zen=[0,0,1],sun=[0,-Math.cos(a),Math.sin(a)],observer=[0,0,.105],zp=project(zen),sp=project(sun),op=project(observer);
      ctx.strokeStyle="#2878b5";ctx.lineWidth=2;ctx.setLineDash([6,5]);ctx.beginPath();ctx.moveTo(op.x,op.y);ctx.lineTo(zp.x,zp.y);ctx.stroke();ctx.setLineDash([]);
      const dot=(p,color,r)=>{ctx.fillStyle=color;ctx.strokeStyle="#fff";ctx.lineWidth=2;ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill();ctx.stroke()};dot(zp,"#173f5b",7);dot(sp,"#ffd400",10);dot(op,"#fff",4);
      const labels=[["Z · CENIT",zp,"#173f5b",12,-15,"left"],["☉ SOL",sp,"#8a5a00",15,17,"left"],["OBSERVADOR",op,"#174c71",0,34,"center"]];
      const dirs=[["N",[0,1,0]],["E",[1,0,0]],["S",[0,-1,0]],["W",[-1,0,0]]];dirs.forEach(([label,v])=>{const p=project(v);labels.push([label,p,"#9d2933",label==="W"?-13:8,label==="N"?-13:15,label==="W"?"right":"left"])});
      const halo=(text,p,color,dx,dy,align)=>{ctx.font=(compact?"800 11px":"900 13px")+" Arial";ctx.textAlign=align;ctx.textBaseline="middle";ctx.lineWidth=4;ctx.strokeStyle="rgba(255,255,255,.98)";ctx.strokeText(text,p.x+dx,p.y+dy);ctx.fillStyle=color;ctx.fillText(text,p.x+dx,p.y+dy)};labels.forEach(v=>halo(...v));
      const avp=project(altArc[Math.floor(altArc.length*.42)]),zpMid=project(zArc[Math.floor(zArc.length*.55)]);halo(`av · ${s.av}`,avp,"#5f3f8c",compact?15:22,compact?29:27,"left");halo(`|z| · ${s.z}`,zpMid,"#176b43",compact?-8:-14,compact?-18:-14,"right");
      const arrow=zArc[Math.floor(zArc.length*.72)],prev=zArc[Math.floor(zArc.length*.67)],pa=project(arrow),pb=project(prev),ang=Math.atan2(pa.y-pb.y,pa.x-pb.x);ctx.save();ctx.translate(pa.x,pa.y);ctx.rotate(ang);ctx.fillStyle="#248a55";ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-13,-7);ctx.lineTo(-13,7);ctx.closePath();ctx.fill();ctx.restore();
      const hp=project([Math.sin(5.15),Math.cos(5.15),0]);halo("HORIZONTE DEL OBSERVADOR",hp,"#9d2933",compact?20:25,-14,"left");
    }
    canvas.style.cssText="display:block;width:100%;height:auto;aspect-ratio:1.64;margin-top:12px;background:#f7fbff;border-radius:10px;cursor:grab;touch-action:none";
    canvas.addEventListener("pointerdown",e=>{drag=true;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId);canvas.style.cursor="grabbing"});
    canvas.addEventListener("pointermove",e=>{if(!drag)return;yaw+=(e.clientX-lastX)*.008;pitch=Math.max(-1.05,Math.min(1.05,pitch+(e.clientY-lastY)*.008));lastX=e.clientX;lastY=e.clientY;draw()});
    canvas.addEventListener("pointerup",()=>{drag=false;canvas.style.cursor="grab"});
    const reset=wrap.querySelector("[data-zenith-reset]");if(reset)reset.onclick=()=>{yaw=.58;pitch=.22;draw()};
    new ResizeObserver(draw).observe(canvas);draw();
  });
}

window.zenithDistanceProblemTypeHTML=zenithDistanceProblemTypeHTML;
window.zenithDistanceSolutionHTML=zenithDistanceSolutionHTML;
window.zenithDistanceQuickHTML=zenithDistanceQuickHTML;
window.initZenithDistanceGraphics=initZenithDistanceGraphics;

if(!document.getElementById("zenith-distance-styles")){
  const style=document.createElement("style");style.id="zenith-distance-styles";style.textContent=`
  .zenith-type{margin-top:10px;padding:14px;border:3px solid #2878b5;border-radius:12px;background:#f3f9fd;line-height:1.65}.zenith-type>p{margin:8px 0}.zenith-memory{padding:11px;border-left:6px solid #248a55;border-radius:9px;background:#e9f8ef}.zenith-memory span{display:inline-block;margin:0 7px;font-size:21px;font-weight:900;color:#176b43}.zenith-small{font-size:13px;color:#536b79}.zenith-solution{margin-top:10px;background:#f3fbf5!important;border:3px solid #58a66c!important}.zenith-body{line-height:1.65}.zenith-step{position:relative;margin-top:13px;padding:16px 14px 14px;border:2px solid #b5cad6;border-radius:12px;background:#fff}.zenith-step:nth-of-type(1){border-color:#397eb8;background:#f4f9fd}.zenith-step:nth-of-type(2){border-color:#d49a19;background:#fffaf0}.zenith-step:nth-of-type(3){border-color:#7657a5;background:#faf7ff}.zenith-step h3{margin:4px 0 11px;color:#173f5b}.zenith-step-number{display:inline-block;padding:4px 9px;border-radius:99px;background:#173f5b;color:#fff;font-size:11px;font-weight:900;letter-spacing:.08em}.zenith-data-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}.zenith-data-grid>div{padding:12px;border-radius:9px;background:white;text-align:center;border:2px solid #a8c8da}.zenith-data-grid span,.zenith-screen span{display:block;font-size:10px;font-weight:900;letter-spacing:.06em;color:#5a7180}.zenith-data-grid b{display:block;margin-top:5px;font-size:20px;color:#173f5b}.zenith-note,.zenith-context{margin-top:11px;padding:11px;border-left:5px solid #2878b5;border-radius:8px;background:white}.zenith-formula{display:grid;grid-template-columns:92px 20px minmax(0,1fr);gap:6px;align-items:stretch;margin:10px 0}.zenith-formula-left{display:flex;align-items:center;justify-content:center;padding:9px 5px;border:3px solid #397eb8;border-radius:9px;background:#eaf4fc;color:#195785;font-size:22px}.zenith-equals{align-self:center;text-align:center;font-size:24px;font-weight:900}.zenith-formula-right{display:flex;align-items:center;justify-content:center;min-width:0;padding:10px 7px;border:3px solid;border-radius:9px;text-align:center;font-size:clamp(15px,2.15vw,22px);white-space:nowrap;overflow:hidden}.zenith-substep{margin-top:11px;padding:12px;border-radius:10px;background:#fff}.zenith-substep>p{margin:5px 0}.zenith-almanac{margin:11px 0;padding:13px;border:2px solid #d49a19;border-radius:10px;background:#fff8df}.zenith-almanac h4{margin:0 0 6px}.zenith-almanac details{margin-top:9px}.zenith-almanac summary{cursor:pointer;font-weight:900;color:#754600}.zenith-almanac-scroll{margin-top:9px;max-height:72vh;overflow:auto;border-radius:8px;background:#fff}.zenith-almanac img{display:block;max-width:100%;height:auto;margin:auto}.zenith-calculator{margin-top:14px;padding:13px;border:3px solid #7657a5;border-radius:12px;background:#f4effb}.zenith-calculator>div:first-child p{margin:4px 0 0}.zenith-screen{margin-top:11px;padding:11px;border:3px solid #2878b5;border-radius:10px;background:#eaf4fc;text-align:center}.zenith-screen b{display:block;font-size:23px;color:#195785}.zenith-screen small{display:block;margin-top:3px}.zenith-result{margin-top:12px;padding:14px;border-radius:10px;background:#dff3e7;text-align:center;font-size:21px;color:#176b43}.zenith-check{margin-top:10px;padding:11px;border:1px solid #87bd98;border-radius:9px;background:#fff}.zenith-graphic{margin-top:14px;padding:14px;border:3px solid #537ca3;border-radius:12px;background:#f8fbff}.zenith-graphic-head{display:flex;flex-wrap:wrap;align-items:start;justify-content:space-between;gap:9px}.zenith-graphic h3{margin:0 0 4px;color:#173f5b}.zenith-graphic p{margin:0;color:#536b79}.zenith-legend{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:10px}.zenith-legend>div{padding:10px;border-left:6px solid var(--c);border-radius:8px;background:#fff}.zenith-legend b,.zenith-legend span{display:block}.zenith-legend span{margin-top:3px;font-size:12px;color:#5b7180}.zenith-graphic-note{margin-top:10px;padding:11px;border-left:5px solid #2878b5;border-radius:8px;background:#fff}
  .zenith-data-grid{grid-template-columns:repeat(auto-fit,minmax(170px,1fr))}.zenith-quick-context{margin-top:9px;padding:9px;border-left:4px solid #2878b5;border-radius:7px;background:#fff;line-height:1.55}.zenith-quick-almanac{margin-top:9px;padding:9px;border:2px solid #d49a19;border-radius:8px;background:#fff8df}.zenith-quick-almanac summary{cursor:pointer;font-weight:900;color:#754600}.zenith-quick-almanac img{display:block;max-width:100%;height:auto;margin:auto}
  @media(max-width:700px){.zenith-data-grid,.zenith-legend{grid-template-columns:1fr}.zenith-formula{grid-template-columns:68px 16px minmax(0,1fr)}.zenith-formula-left{font-size:18px}.zenith-formula-right{font-size:clamp(10px,3.2vw,15px);padding-left:3px;padding-right:3px}.zenith-graphic-head .action{width:100%}canvas[data-zenith-sphere]{aspect-ratio:1.13!important}}
  `;document.head.appendChild(style);
}
})();
