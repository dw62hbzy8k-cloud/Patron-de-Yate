(function(){
"use strict";
const ID=817;
window.TRUE_COURSE_LESSON_IDS=new Set([ID]);

function formula(left,right,rightLabel="PARTE DERECHA · CALCULA"){
 return `<div class="true-course-formula"><div class="left"><small>RESULTADO</small><strong>${left}</strong></div><div class="equals">=</div><div class="right"><small>${rightLabel}</small><strong>${right}</strong></div></div>`;
}

window.trueCourseTypeHTML=function(q){
 if(q.id!==ID)return "";
 return `<section class="true-course-type"><h3>TIPO DE PROBLEMA · RUMBO VERDADERO (Rv)</h3><p>Lo reconoces porque pide el <b>rumbo verdadero</b> y disponemos del <b>rumbo de aguja (Ra)</b> y de la <b>corrección total (Ct)</b>. Aquí no se utiliza el Almanaque: solo se convierten y se suman correctamente esos dos datos.</p><div class="true-course-symbols"><div><b>Ra</b>rumbo de aguja</div><div><b>Ct</b>corrección total</div><div><b>Rv</b>rumbo verdadero</div></div></section>`;
};

window.trueCourseCalculatorHTML=function(q){
 if(q.id!==ID)return "";
 return `<div class="calc-trainer" data-calculator-trainer data-trainer-instance="pregunta-${ID}" data-height-guide="true-course-${ID}"></div>`;
};

window.trueCourseSolutionHTML=function(q){
 if(q.id!==ID)return "";
 return `<details class="true-course-solution" open><summary>🟢 Resolución completa · comprobada varias veces</summary><div class="true-course-body">
 <div style="padding:12px;border:2px solid #d6a31c;border-radius:10px;background:#fff8df"><b>Esta pregunta depende del ejercicio anterior del examen original.</b><br>Como aquí la practicas suelta, no tienes que buscar la P17: dejamos a la vista sus dos datos necesarios.</div>
 <section class="true-course-step blue"><span class="true-course-step-label">PASO 1</span><h3>ORDENA LOS DATOS Y ESCRIBE LA FÓRMULA</h3><div class="true-course-data"><div><small>RUMBO DE AGUJA</small><b>Ra = S84°E</b><span>Lo daba el enunciado de la P17.</span></div><div><small>CORRECCIÓN TOTAL</small><b>Ct = 4° NE</b><span>Era el resultado de la P17.</span></div></div><p><b>La fórmula que utilizamos es:</b></p>${formula("Rv","Ra + Ct","FÓRMULA")}
 <div style="margin-top:9px;padding:10px;border-radius:8px;background:#fff"><b>Importante:</b> todavía no sumes 84 + 4. <b>S84°E</b> es un rumbo cuadrantal; primero debemos convertirlo a rumbo circular.</div></section>
 <div data-calculation-zone>
 <section class="true-course-step yellow"><span class="true-course-step-label">PASO 2</span><h3>CONVIERTE S84°E EN RUMBO CIRCULAR</h3><p>El rumbo circular se cuenta desde el Norte, en el sentido de las agujas del reloj: Norte 000°, Este 090°, Sur 180° y Oeste 270°.</p><p><b>S84°E</b> significa: empieza en el <b>Sur (180°)</b> y avanza <b>84° hacia el Este</b>. Desde el Sur hacia el Este el número circular disminuye, por eso se resta:</p>${formula("Ra","180° − 84°","CONVERSIÓN A RUMBO CIRCULAR")}<div class="true-course-result">Ra = 096°</div></section>
 <section class="true-course-step orange"><span class="true-course-step-label">PASO 3</span><h3>PON EL SIGNO DE LA CORRECCIÓN TOTAL</h3><p>En estos ejercicios, una corrección <b>NE</b> es positiva y se <b>suma</b>; una corrección <b>NW</b> es negativa y se <b>resta</b>.</p><div style="padding:12px;border:2px solid #e07816;border-radius:9px;background:#fff;text-align:center;font-size:21px"><b>Ct = 4° NE → Ct = +4°</b></div><p style="margin-bottom:0"><b>NE no es el rumbo del barco.</b> Aquí únicamente indica el signo positivo de la corrección.</p></section>
 <section class="true-course-step purple"><span class="true-course-step-label">PASO 4</span><h3>CALCULA EL RUMBO VERDADERO</h3><p>Ya tenemos ambos valores en el formato correcto. Sustituye en la fórmula:</p>${formula("Rv","096° + 4°","CALCULA TODO LO VERDE")}${window.trueCourseCalculatorHTML(q)}<div class="true-course-result">Rv = 100°</div><div style="margin-top:10px;padding:10px;border-radius:8px;background:#fff"><b>Comprobación con el valor sin redondear:</b> el ejercicio anterior produce Ct ≈ +3,87°. Entonces 096° + 3,87° = 099,87°, que redondeado al grado también da <b>100°</b>.</div></section>
 </div>
 <section class="true-course-step green"><span class="true-course-step-label">PASO 5</span><h3>ELIGE LA RESPUESTA</h3><div class="true-course-result">Respuesta C · Rv = 100°</div><p style="margin-bottom:0"><b>Comprobación razonable:</b> una corrección positiva cercana a 4° debe dejar el rumbo verdadero unos 4° por encima de 096°. Por tanto, 100° encaja; 086°, 092° y 110° no.</p></section>
 ${window.trueCourseGraphicHTML(q)}
 </div></details>`;
};

window.trueCourseQuickHTML=function(q){
 if(q.id!==ID)return "";
 return `<details class="quick-reminder"><summary>⚡ Recordatorio rápido</summary><div class="quick-reminder-body"><b>Datos heredados visibles:</b> Ra = S84°E · Ct = 4° NE.<ol><li>Convierte el rumbo cuadrantal: <b>S84°E → Ra = 180° − 84° = 096°</b>.</li><li>NE es positivo: <b>Ct = +4°</b>.</li><li><b>Rv = Ra + Ct = 096° + 4° = 100°.</b></li><li><b>Respuesta C.</b></li></ol></div></details>`;
};

window.trueCourseGraphicHTML=function(q){
 if(q.id!==ID)return "";
 return `<section class="true-course-graphic"><h3>GRÁFICO INTERACTIVO · interpreta el rumbo</h3><p>El compás está dibujado a escala real. Usa los botones para separar las dos direcciones o ver cómo la corrección desplaza el rumbo desde 096° hasta 100°.</p><div class="true-course-graphic-controls"><button type="button" data-course-view="both" aria-pressed="true">Ver todo</button><button type="button" data-course-view="ra" aria-pressed="false">Solo Ra = 096°</button><button type="button" data-course-view="rv" aria-pressed="false">Solo Rv = 100°</button></div><canvas data-true-course-compass role="img" aria-label="Compás interactivo con rumbo de aguja 096 grados, corrección total positiva de 4 grados y rumbo verdadero 100 grados"></canvas><div class="true-course-legend"><div class="ra"><b>Ra = 096°</b><br>Flecha azul: rumbo indicado por la aguja.</div><div class="ct"><b>Ct = +4°</b><br>Sector naranja: desplazamiento aplicado.</div><div class="rv"><b>Rv = 100°</b><br>Flecha verde: rumbo verdadero final.</div></div></section>`;
};

window.TRUE_COURSE_CALCULATOR_GUIDES={
 [`true-course-${ID}`]:{
  kind:"true-course",expected:["1","8","0","−","8","4","=","+","4","="],
  directions:["Escribe 180, que corresponde al Sur en rumbo circular.","Continúa escribiendo 180.","Termina de escribir 180.","Pulsa menos: desde el Sur avanzamos 84° hacia el Este.","Escribe 84.","Termina de escribir 84.","Pulsa igual para obtener Ra = 096°.","La corrección NE es positiva: pulsa más.","Escribe 4.","Pulsa igual para obtener Rv = 100°."],
  formulaEnd:7,inverseEnd:10,milestones:[{at:7,value:"96"},{at:10,value:"100"}],storageKey:"aprobarNautica_trueCourseTrainer_817_v1",finalText:"Rv = 100°. Respuesta C.",subtitle:"Cálculo interactivo de Junio 2016 · P18 · rumbo verdadero.",objective:"Objetivo: Rv = 100° · respuesta C",initial:"Empieza convirtiendo S84°E a rumbo circular: escribe 180 − 84.",firstFeedback:"Rumbo de aguja convertido: Ra = 096°. Ahora aplica Ct = +4°.",secondFeedback:"Rumbo verdadero obtenido: Rv = 100°.",steps:"<li>Convertir S84°E en rumbo circular: 180° − 84°.</li><li>Aplicar la corrección NE con signo positivo.</li><li>Comprobar el resultado final: Rv = 100°.</li>"
 }
};

window.initTrueCourseGraphic=function(root){
 (root||document).querySelectorAll("canvas[data-true-course-compass]").forEach(canvas=>{
  if(canvas.dataset.ready)return;canvas.dataset.ready="1";
  const ctx=canvas.getContext("2d"),wrap=canvas.closest(".true-course-graphic");let mode="both";
  const point=(cx,cy,r,degrees)=>{const a=degrees*Math.PI/180;return{x:cx+Math.sin(a)*r,y:cy-Math.cos(a)*r}};
  function arrow(cx,cy,r,degrees,color,width){const p=point(cx,cy,r,degrees),a=degrees*Math.PI/180;ctx.strokeStyle=color;ctx.fillStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(p.x,p.y);ctx.stroke();const left={x:p.x-Math.sin(a-.42)*15,y:p.y+Math.cos(a-.42)*15},right={x:p.x-Math.sin(a+.42)*15,y:p.y+Math.cos(a+.42)*15};ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(left.x,left.y);ctx.lineTo(right.x,right.y);ctx.closePath();ctx.fill()}
  function label(text,x,y,color,align="left"){ctx.textAlign=align;ctx.font="800 14px Arial";ctx.fillStyle=color;ctx.fillText(text,x,y)}
  function draw(){const w=Math.max(320,canvas.clientWidth||800),mobile=w<560,h=Math.round(w*(mobile?.88:.58)),dpr=Math.min(2,window.devicePixelRatio||1);if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr)}ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);const cx=mobile?w/2:w*.34,cy=h*.5,r=Math.min(mobile?w*.39:w*.26,h*.4);
   const sea=ctx.createRadialGradient(cx-r*.25,cy-r*.3,5,cx,cy,r);sea.addColorStop(0,"#fafdff");sea.addColorStop(1,"#dbeaf3");ctx.fillStyle=sea;ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#173f5b";ctx.lineWidth=3;ctx.stroke();
   for(let deg=0;deg<360;deg+=10){const major=deg%30===0,p1=point(cx,cy,r-(major?13:7),deg),p2=point(cx,cy,r,deg);ctx.strokeStyle=major?"#355f87":"#91a8b6";ctx.lineWidth=major?2:1;ctx.beginPath();ctx.moveTo(p1.x,p1.y);ctx.lineTo(p2.x,p2.y);ctx.stroke();if(major){const t=point(cx,cy,r-25,deg);label(String(deg).padStart(3,"0")+"°",t.x,t.y+5,"#587080","center")}}
   [[0,"N"],[90,"E"],[180,"S"],[270,"W"]].forEach(([deg,t])=>{const p=point(cx,cy,r+19,deg);label(t,p.x,p.y+5,"#173f5b","center")});
   if(mode==="both"){ctx.strokeStyle="#e07816";ctx.fillStyle="rgba(224,120,22,.2)";ctx.lineWidth=8;ctx.beginPath();ctx.arc(cx,cy,r*.56,(96-90)*Math.PI/180,(100-90)*Math.PI/180);ctx.stroke()}
   if(mode!=="rv")arrow(cx,cy,r*.82,96,"#2878b5",5);if(mode!=="ra")arrow(cx,cy,r*.72,100,"#248a55",5);ctx.fillStyle="#173f5b";ctx.beginPath();ctx.arc(cx,cy,6,0,Math.PI*2);ctx.fill();
   const tx=mobile?18:w*.65,ty=mobile?h*.84:h*.24;ctx.textAlign="left";ctx.fillStyle="#173f5b";ctx.font="900 18px Arial";ctx.fillText(mode==="ra"?"Ra = 096°":mode==="rv"?"Rv = 100°":"096° + 4° = 100°",tx,ty);ctx.font="14px Arial";ctx.fillStyle="#587080";const lines=mode==="ra"?["La flecha azul está 6° al Sur del Este."]:mode==="rv"?["La flecha verde está 10° al Sur del Este."]:["Azul: rumbo de aguja.","Naranja: corrección de +4°.","Verde: rumbo verdadero."];lines.forEach((t,i)=>ctx.fillText(t,tx,ty+28+i*22));
   if(!mobile&&mode==="both"){const zx=w*.79,zy=h*.68,zr=Math.min(82,h*.2);ctx.strokeStyle="#9cb2bf";ctx.lineWidth=2;ctx.beginPath();ctx.arc(zx,zy,zr,0,Math.PI*2);ctx.stroke();[90,96,100,105].forEach(deg=>{const p=point(zx,zy,zr,deg);ctx.strokeStyle=deg===96?"#2878b5":deg===100?"#248a55":"#9cb2bf";ctx.lineWidth=deg===96||deg===100?3:1;ctx.beginPath();ctx.moveTo(zx,zy);ctx.lineTo(p.x,p.y);ctx.stroke()});label("AMPLIACIÓN DEL SECTOR ESTE",zx-zr,zy-zr-11,"#173f5b");label("4°",zx+zr*.72,zy+13,"#8a4100","center")}
  }
  wrap.querySelectorAll("[data-course-view]").forEach(button=>button.addEventListener("click",()=>{mode=button.dataset.courseView;wrap.querySelectorAll("[data-course-view]").forEach(b=>b.setAttribute("aria-pressed",String(b===button)));draw()}));new ResizeObserver(draw).observe(canvas);draw();
 });
};
})();
