(function(){
"use strict";
const STORAGE_KEY="aprobarNautica_calculatorTrainer_v1";
const HEIGHT_STORAGE_KEY="aprobarNautica_heightEstimateTrainer_v1";
const HEIGHT_296_STORAGE_KEY="aprobarNautica_heightEstimateTrainer_296_v1";
const HEIGHT_1010_STORAGE_KEY="aprobarNautica_heightEstimateTrainer_1010_v1";
const HEIGHT_1258_STORAGE_KEY="aprobarNautica_heightEstimateTrainer_1258_v1";
const DOCK_POSITION_KEY="aprobarNautica_calculatorDockPosition_v1";
const conversionExpected=["−","4","4","=","×","6","0","="];
const conversionDirections=[
 "Pulsa la tecla de restar: −",
 "Escribe 44. Pulsa primero 4.",
 "Completa 44. Pulsa otra vez 4.",
 "Pulsa =. Debe aparecer 0,895188.",
 "Pulsa × para multiplicar la parte decimal de grado.",
 "Escribe 60. Pulsa primero 6.",
 "Completa 60. Pulsa 0.",
 "Pulsa =. Aparecerán 53,71128 minutos. Redondea a 53,7′ y termina."
];
const heightExpected=[
 "sin","3","5","°′″","5","4","°′″","0","°′″",")","×",
 "sin","(-)","2","°′″","2","6",".","1","°′″","0","°′″",")","+",
 "cos","3","5","°′″","5","4","°′″","0","°′″",")","×",
 "cos","(-)","2","°′″","2","6",".","1","°′″","0","°′″",")","×",
 "cos","2","5","°′″","2","7",".","5","°′″","0","°′″",")","=",
 "SHIFT","sin","Ans",")","=",
 "−","4","4","=",
 "×","6","0","="
];
const heightDirections=heightExpected.map(function(key,index){
 if(index===0)return "Pulsa SIN para comenzar la fórmula real con la latitud.";
 if(index===61)return "La fórmula ya dio sen(ae). Pulsa SHIFT para comenzar el arco seno.";
 if(index===66)return "Ya tienes ae en grados decimales. Pulsa − y continúa hasta obtener los minutos.";
 return `Pulsa ${key}.`;
});
const height296Expected=[
 "sin","2","9","°′″","2","6","°′″","3","0","°′″",")","×",
 "sin","1","1","°′″","2","2","°′″","4","8","°′″",")","+",
 "cos","2","9","°′″","2","6","°′″","3","0","°′″",")","×",
 "cos","1","1","°′″","2","2","°′″","4","8","°′″",")","×",
 "cos","3","6","°′″","5","3","°′″","5","4","°′″",")","=",
 "SHIFT","sin","Ans",")","=","°′″"
];
const height296Directions=height296Expected.map(function(key,index){
 if(index===0)return "Pulsa SIN para comenzar la fórmula con la latitud.";
 if(index===61)return "Ya has calculado sen(ae). Pulsa SHIFT para recuperar la altura estimada.";
 if(index===66)return "Ya tienes ae en grados decimales. Pulsa °′″ para verla en grados, minutos y segundos.";
 return `Pulsa ${key}.`;
});
const height1010Expected=[
 "sin","4","0","°′″","3","4","°′″",")","×",
 "sin","2","3","°′″","1","3",".","8","°′″",")","+",
 "cos","4","0","°′″","3","4","°′″",")","×",
 "cos","2","3","°′″","1","3",".","8","°′″",")","×",
 "cos","2","3","°′″","9",".","6","°′″",")","=",
 "SHIFT","sin","Ans",")","=","°′″"
];
const height1010Directions=height1010Expected.map(function(key,index){
 if(index===0)return "Pulsa SIN para comenzar la fórmula con la latitud 40°34′ N.";
 if(index===50)return "La fórmula ya dio sen(ae). Pulsa SHIFT para recuperar la altura estimada.";
 if(index===55)return "Ya tienes ae en grados decimales. Pulsa °′″ para verla en grados, minutos y segundos.";
 return `Pulsa ${key}.`;
});
const height1258Expected=[
 "sin","3","1","°′″","3","2",".","2","°′″",")","×",
 "sin","3","8","°′″","4","8",".","2","°′″",")","+",
 "cos","3","1","°′″","3","2",".","2","°′″",")","×",
 "cos","3","8","°′″","4","8",".","2","°′″",")","×",
 "cos","1","3","°′″","5","°′″","4","6","°′″",")","=",
 "SHIFT","sin","Ans",")","=","°′″"
];
const height1258Directions=height1258Expected.map(function(key,index){
 if(index===0)return "Pulsa SIN para comenzar la fórmula con l = 31°32,2′ N.";
 if(index===58)return "La fórmula ya dio sen(ae*). Pulsa SHIFT para recuperar la altura estimada de Vega.";
 if(index===63)return "Ya tienes ae* en grados decimales. Pulsa °′″ para verla en grados, minutos y segundos.";
 return `Pulsa ${key}.`;
});
const modeText={
 1:"<b>Nivel 1 · Aprender:</b> solo funciona la tecla correcta y aparece iluminada en verde suave.",
 2:"<b>Nivel 2 · Practicar:</b> ninguna tecla se ilumina antes. Una tecla incorrecta no escribe nada: se pone roja y suena. La correcta funciona y se pone verde un instante.",
 3:"<b>Nivel 3 · Solo:</b> puedes hacer la operación libremente. Al terminar, la revisión comprueba el resultado y localiza el primer desvío."
};
function photoKey(value,label,left,top,width,height){return `<button class="calc-key calc-photo-key" data-key="${value}" type="button" aria-label="${label}" title="${label}" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%"><span class="calc-photo-key-label">${label}</span></button>`}
function calculatorPhotoMarkup(){
 const photoKeys=[
  ["SHIFT","SHIFT",8.6,38.1,10.3,4.6],["ALPHA","ALPHA",21.1,38.1,10.3,4.6],["MENU","MENU CONFIG",68.1,38.1,10.3,4.6],["ON","Encender",80.6,38.1,10.3,4.6],
  ["◀","Cursor izquierda",37.5,40,8.6,4.2],["▲","Cursor arriba",45.7,37.8,8.6,4.2],["▼","Cursor abajo",45.7,42.4,8.6,4.2],["▶","Cursor derecha",54.3,40,8.6,4.2],
  ["OPTN","OPTN",8,45.8,11.6,4.2],["CALC","CALC",22.2,45.8,11.6,4.2],["Simp","Simp",65.7,45.8,11.6,4.2],["x","Variable x",80,45.8,11.6,4.2],
  ["□/□","Fracción",8,51.3,11.6,4.2],["√","Raíz cuadrada",22.2,51.3,11.6,4.2],["x²","Cuadrado",36.9,51.3,11.6,4.2],["xⁿ","Potencia",51.5,51.3,11.6,4.2],["log","Logaritmo",65.7,51.3,11.6,4.2],["ln","Logaritmo natural",80,51.3,11.6,4.2],
  ["(-)","Signo negativo",8,56.7,11.6,4.2],["°′″","Grados minutos segundos",22.2,56.7,11.6,4.2],["x⁻¹","Inversa",36.9,56.7,11.6,4.2],["sin","Seno",51.5,56.7,11.6,4.2],["cos","Coseno",65.7,56.7,11.6,4.2],["tan","Tangente",80,56.7,11.6,4.2],
  ["STO","STO",8,62.3,11.6,4.2],["ENG","ENG",22.2,62.3,11.6,4.2],["(","Paréntesis izquierdo",36.9,62.3,11.6,4.2],[")","Paréntesis derecho",51.5,62.3,11.6,4.2],["S⇔D","S a D",65.7,62.3,11.6,4.2],["M+","Memoria más",80,62.3,11.6,4.2],
  ["7","7",8.6,68.5,13.8,5],["8","8",26.3,68.5,13.8,5],["9","9",44,68.5,13.8,5],["DEL","Borrar",60.8,68.5,13.8,5],["AC","Limpiar",78.4,68.5,13.8,5],
  ["4","4",8.6,75.1,13.8,5],["5","5",26.3,75.1,13.8,5],["6","6",44,75.1,13.8,5],["×","Multiplicar",60.8,75.1,13.8,5],["÷","Dividir",78.4,75.1,13.8,5],
  ["1","1",8.6,81.7,13.8,5],["2","2",26.3,81.7,13.8,5],["3","3",44,81.7,13.8,5],["+","Sumar",60.8,81.7,13.8,5],["−","Restar",78.4,81.7,13.8,5],
  ["0","0",8.6,88.3,13.8,5],[".","Coma decimal",26.3,88.3,13.8,5],["×10ˣ","Por diez elevado a x",44,88.3,13.8,5],["Ans","Respuesta anterior",60.8,88.3,13.8,5],["=","Igual",78.4,88.3,13.8,5]
 ];
 return `<div class="calc-photo-note"><b>Tu modelo exacto:</b> Casio fx-85SP X II Iberia · tamaño nominal 77 × 165,5 mm · pulsa directamente sobre sus teclas reales.</div><div class="calc-photo-stage" aria-label="Calculadora interactiva Casio fx-85SP X II con la distribución física real de sus teclas"><img class="calc-photo-image" src="assets/casio-fx85spxii-frontal.png" alt="Casio fx-85SP X II Iberia vista de frente"><div class="calc-screen calc-photo-screen" role="status" aria-live="polite"><div class="calc-screen-top"><span>DEG</span><span data-ct-level>GUIADO 1</span></div><div class="calc-expression" data-ct-expression>44.895188</div><div class="calc-result" data-ct-result>44.895188</div></div>${photoKeys.map(function(key){return photoKey.apply(null,key)}).join("")}</div>`
}
function loadProgress(storageKey){try{return Object.assign({guided:0,practice:0,solo:0,wrong:0},JSON.parse(localStorage.getItem(storageKey||STORAGE_KEY)||"{}"))}catch(e){return {guided:0,practice:0,solo:0,wrong:0}}}
function saveProgress(progress,storageKey){try{localStorage.setItem(storageKey||STORAGE_KEY,JSON.stringify(progress))}catch(e){}}
function loadDockPosition(){try{const p=JSON.parse(localStorage.getItem(DOCK_POSITION_KEY)||"null");return p&&Number.isFinite(p.x)&&Number.isFinite(p.y)?p:null}catch(e){return null}}
function saveDockPosition(position){try{localStorage.setItem(DOCK_POSITION_KEY,JSON.stringify(position))}catch(e){}}
function recommendedMode(progress){if(progress.guided<2)return 1;if(progress.practice<2)return 2;return 3}
function trainerMarkup(guideId){
 const is296=guideId==="296";
 const is1010=guideId==="1010",is1258=guideId==="1258",isHeight=is296||is1010||is1258||guideId==="1";
 const subtitle=is1258?"Cálculo interactivo de Junio 2024 · pregunta 19 · Vega.":is1010?"Cálculo interactivo de Junio 2026 · Modelo 1 · P11.":is296?"Cálculo interactivo de esta pregunta: altura estimada del Sol.":guideId?"Cálculo interactivo completo de la altura estimada del Sol.":"Convertir grados decimales en grados y minutos.";
 const objective=is1258?"Objetivo de esta pregunta: ae* = 77°04′57″":is1010?"Objetivo de esta pregunta: ae = 63°56,2′":is296?"Objetivo de esta pregunta: ae = 51°14,1′":guideId?"Objetivo: ae = 44°53,7′":"Objetivo: 44,895188° = 44°53,7′";
 const steps=isHeight?"<li>Introducir l, d y P en la fórmula.</li><li>Calcular sen(ae) y recuperar ae con SHIFT → SIN.</li><li>Pasar ae a grados, minutos y segundos con °′″.</li>":"<li>Quitar los 44 grados enteros.</li><li>Multiplicar la parte decimal por 60 para convertirla en minutos.</li><li>Redondear 53,71128′ a 53,7′ y detenerse.</li>";
 const initial=is1258?"Empieza por SIN: vas a introducir l = 31°32,2′, d* = 38°48,2′ y P = 13°05′46″.":is1010?"Empieza por SIN: vas a introducir l = 40°34′, d = 23°13,8′ y P = 23°09,6′, exactamente como están escritos.":is296?"Empieza por SIN: vas a introducir la fórmula real con los datos de esta pregunta.":guideId?"Empieza por SIN: vas a introducir la fórmula real con l, d y P.":"La pantalla ya contiene 44,895188. Empieza por la operación indicada.";
 return `<div class="calc-trainer-head"><div><h3>Calculadora guiada · Casio fx-85SP X II</h3><p class="sub">${subtitle}</p></div><div class="calc-trainer-progress" data-ct-progress></div></div>
<div class="calc-trainer-controls" role="group" aria-label="Nivel de ayuda de la calculadora">
 <button class="calc-mode" type="button" data-ct-mode="1" aria-pressed="true">1 · Aprender</button>
 <button class="calc-mode" type="button" data-ct-mode="2" aria-pressed="false">2 · Practicar</button>
 <button class="calc-mode" type="button" data-ct-mode="3" aria-pressed="false">3 · Solo</button>
 <button class="calc-reset" type="button" data-ct-reset>Reiniciar</button>
 <label class="calc-sound"><input type="checkbox" data-ct-sound checked> Aviso sonoro</label>
</div>
<div class="calc-trainer-grid">
 <div class="calc-coach">
  <div class="calc-task">${objective}</div>
  <div class="calc-mode-description" data-ct-mode-description></div>
  <div class="calc-instruction" data-ct-instruction aria-live="polite"></div>
  <ol class="calc-lesson-steps" data-ct-steps>${steps}</ol>
  <div class="calc-feedback" data-ct-feedback aria-live="polite">${initial}</div>
 </div>
 <div class="calc-body-wrap"><div class="calc-drag-shell">
  <div class="calc-drag-handle" data-ct-drag-handle role="button" tabindex="0" aria-label="Mover la calculadora"><span aria-hidden="true">⠿</span> Arrastra para mover · botón izquierdo o derecho</div>
  ${calculatorPhotoMarkup()}
  <div class="calc-review-row"><button class="calc-review" type="button" data-ct-review>Revisar resultado</button></div>
  <div class="calc-key-legend"><span><i class="calc-key-dot good"></i>tecla correcta</span><span><i class="calc-key-dot bad"></i>tecla incorrecta</span></div>
  <div class="calc-legal">Simulación educativa propia; no es un emulador oficial. Fotografía de referencia facilitada por el alumno y funciones contrastadas con la <a href="https://www.edu-casio.es/calculadora/fx-85sp-x-ii-iberia/" target="_blank" rel="noopener">ficha oficial de Casio Educación España</a>.</div>
 </div></div>
</div>`}
function setupDocking(root,calculationZone){
 const dock=root.querySelector(".calc-body-wrap"),handle=root.querySelector("[data-ct-drag-handle]");
 if(!dock||!handle)return;
 const forceDocked=root.dataset.forceDocked==="1";
 const originalBodyPaddingBottom=document.body.style.paddingBottom;
 const anchor=root.parentElement,originalAnchorPaddingBottom=anchor?anchor.style.paddingBottom:"";
 let saved=loadDockPosition(),dragging=null,docked=false,ticking=false,enterScroll=0,exitScroll=Infinity,blockRedockAtBottom=false;
 function place(x,y,remember){
  const rect=dock.getBoundingClientRect(),maxX=Math.max(8,window.innerWidth-rect.width-8),maxY=Math.max(8,window.innerHeight-rect.height-8),left=Math.max(8,Math.min(maxX,x)),top=Math.max(8,Math.min(maxY,y));
  dock.style.left=left+"px";dock.style.top=top+"px";dock.style.right="auto";dock.style.bottom="auto";
  if(remember){saved={x:left,y:top};saveDockPosition(saved)}
 }
 function restore(){if(docked&&saved)requestAnimationFrame(function(){place(saved.x,saved.y,false)})}
 function setDocked(next){
  if(next===docked)return;
  if(next){
   const dockHeight=Math.max(1,dock.getBoundingClientRect().height),trainerRect=root.getBoundingClientRect(),zoneRect=calculationZone.getBoundingClientRect(),pageY=window.scrollY;
   enterScroll=Math.max(0,pageY+trainerRect.top-window.innerHeight*.72);
   exitScroll=Math.max(enterScroll+120,pageY+zoneRect.bottom-(dockHeight-1)-80);
   root.style.minHeight="0";root.style.height="0";
   if(anchor)anchor.style.paddingBottom="2px";
   document.body.style.paddingBottom=Math.min(dockHeight,window.innerHeight*.45)+"px";
   docked=true;root.classList.add("calc-docked");restore();
  }else{
   docked=false;root.classList.remove("calc-docked");root.style.minHeight="";root.style.height="";if(anchor)anchor.style.paddingBottom=originalAnchorPaddingBottom;document.body.style.paddingBottom=originalBodyPaddingBottom;
  }
 }
 function updateDock(){
  if(!root.isConnected){window.removeEventListener("scroll",updateDock);window.removeEventListener("resize",updateDock);return}
  if(ticking)return;ticking=true;
  requestAnimationFrame(function(){
   ticking=false;
   if(forceDocked){setDocked(true);return}
   const pageY=window.scrollY;
   if(docked){
    if(pageY<enterScroll-24){setDocked(false);return}
    if(calculationZone.getBoundingClientRect().bottom<120){blockRedockAtBottom=true;setDocked(false);return}
    if(pageY>exitScroll+24){blockRedockAtBottom=true;setDocked(false);return}
    return
   }
   if(blockRedockAtBottom){if(pageY>=exitScroll-140)return;blockRedockAtBottom=false}
   const trainerRect=root.getBoundingClientRect(),zoneRect=calculationZone.getBoundingClientRect();
   if(trainerRect.top<=window.innerHeight*.72&&zoneRect.bottom>80)setDocked(true)
  })
 }
 function startDrag(event){if(!root.classList.contains("calc-docked")||![0,2].includes(event.button))return;event.preventDefault();event.stopPropagation();const rect=dock.getBoundingClientRect();dragging={pointerId:event.pointerId,startX:event.clientX,startY:event.clientY,left:rect.left,top:rect.top};place(rect.left,rect.top,false);handle.classList.add("dragging");dock.setPointerCapture(event.pointerId)}
 handle.addEventListener("pointerdown",startDrag);
 dock.addEventListener("pointerdown",function(event){if(event.button===2)startDrag(event)});
 dock.addEventListener("contextmenu",function(event){if(root.classList.contains("calc-docked"))event.preventDefault()});
 dock.addEventListener("pointermove",function(event){if(!dragging||event.pointerId!==dragging.pointerId)return;event.preventDefault();place(dragging.left+event.clientX-dragging.startX,dragging.top+event.clientY-dragging.startY,false)});
 function finishDrag(event){if(!dragging||event.pointerId!==dragging.pointerId)return;const rect=dock.getBoundingClientRect();dragging=null;handle.classList.remove("dragging");place(rect.left,rect.top,true)}
 dock.addEventListener("pointerup",finishDrag);dock.addEventListener("pointercancel",finishDrag);
 handle.addEventListener("keydown",function(event){if(!root.classList.contains("calc-docked")||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(event.key))return;event.preventDefault();const rect=dock.getBoundingClientRect(),step=event.shiftKey?30:10,dx=event.key==="ArrowLeft"?-step:event.key==="ArrowRight"?step:0,dy=event.key==="ArrowUp"?-step:event.key==="ArrowDown"?step:0;place(rect.left+dx,rect.top+dy,true)});
 window.addEventListener("scroll",updateDock,{passive:true});window.addEventListener("resize",updateDock);updateDock();requestAnimationFrame(updateDock);setTimeout(updateDock,120)
}
function pretty(value){return String(value).replace(".",",")}
function calculate(a,operator,b){if(operator==="+")return a+b;if(operator==="−")return a-b;if(operator==="×")return a*b;if(operator==="÷")return b===0?NaN:a/b;return b}
function formatHeightExpression(keys){let sexagesimalPart=0;return keys.map(function(key,index){
 const previous=keys[index-1];
 if(key==="SHIFT")return "";
 if(key==="sin"){sexagesimalPart=0;return previous==="SHIFT"?"sen⁻¹(":"sen("}
 if(key==="cos"){sexagesimalPart=0;return "cos("}
 if(key==="(-)")return "−";
 if(key==="°′″"){const symbol=["°","′","″"][Math.min(sexagesimalPart,2)];sexagesimalPart++;return symbol}
 if(key===".")return ",";
 if(["+","−","×","÷","="].includes(key)){sexagesimalPart=0;return ` ${key} `}
 return key;
}).join("").trim()}
function mount(root){
 if(root.dataset.ctMounted==="1")return;
 const guideId=root.dataset.heightGuide||"";
 root.dataset.ctMounted="1";root.innerHTML=trainerMarkup(guideId);
 const inlineTrainer=root.dataset.trainerInstance!=="principal";
 const height296=guideId==="296",height1010=guideId==="1010",height1258=guideId==="1258",heightGuide=guideId==="1"||height296||height1010||height1258;
 const expected=height1258?height1258Expected:height1010?height1010Expected:height296?height296Expected:heightGuide?heightExpected:conversionExpected,directions=height1258?height1258Directions:height1010?height1010Directions:height296?height296Directions:heightGuide?heightDirections:conversionDirections,storageKey=height1258?HEIGHT_1258_STORAGE_KEY:height1010?HEIGHT_1010_STORAGE_KEY:height296?HEIGHT_296_STORAGE_KEY:heightGuide?HEIGHT_STORAGE_KEY:STORAGE_KEY;
 const finalHeightText=height1258?"ae* = 77°04′57,2″, que en las respuestas es 77°04′57″.":height1010?"ae = 63°56′14,1″, que en las respuestas es 63°56,2′.":height296?"ae = 51°14′06,4″, que en las respuestas es 51°14,1′.":"ae = 44°53,7′.";
 const milestones=height1258?[{at:58,value:"0.974693172380"},{at:63,value:"77.082554214"},{at:64,value:"77°04′57,2″"}]:height1010?[{at:50,value:"0.8983134026"},{at:55,value:"63.9372496"},{at:56,value:"63°56′14,1″"}]:height296?[{at:61,value:"0.779722"},{at:66,value:"51.235123"},{at:67,value:"51°14′06,4″"}]:[{at:61,value:"0.7058120802"},{at:66,value:"44.8951881663"},{at:70,value:"0.8951881663"},{at:74,value:"53.7112899782"}];
 const formulaEnd=height1258?58:height1010?50:61,inverseEnd=height1258?63:height1010?55:66;
 if(inlineTrainer){root.classList.add("calc-inline-trainer");const calculationZone=root.closest("[data-calculation-zone]")||root.closest('div[style*="border:3px solid #1c6ea4"]')||root.closest('div[style*="border:3px solid #d6a31c"]')||root;setupDocking(root,calculationZone)}
 const expressionEl=root.querySelector("[data-ct-expression]"),resultEl=root.querySelector("[data-ct-result]"),instructionEl=root.querySelector("[data-ct-instruction]"),feedbackEl=root.querySelector("[data-ct-feedback]"),levelEl=root.querySelector("[data-ct-level]"),modeDescriptionEl=root.querySelector("[data-ct-mode-description]"),progressEl=root.querySelector("[data-ct-progress]"),soundEl=root.querySelector("[data-ct-sound]"),keys=Array.from(root.querySelectorAll(".calc-key")),modeButtons=Array.from(root.querySelectorAll("[data-ct-mode]")),stepItems=Array.from(root.querySelectorAll("[data-ct-steps] li"));
 const startValue=heightGuide?"0":"44.895188",startExpression=heightGuide?"":"44.895188";
 let progress=loadProgress(storageKey),mode=recommendedMode(progress),cursor=0,history=[],expression=startExpression,display=startValue,stored=Number(startValue),pending=null,typing=false,completed=false;
 function beep(){if(!soundEl.checked)return;try{const AudioContext=window.AudioContext||window.webkitAudioContext,audio=new AudioContext(),osc=audio.createOscillator(),gain=audio.createGain();osc.type="sine";osc.frequency.value=170;gain.gain.setValueAtTime(.055,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.11);osc.connect(gain);gain.connect(audio.destination);osc.start();osc.stop(audio.currentTime+.11)}catch(e){}}
 function flash(key,className){key.classList.remove("flash-good","flash-bad");void key.offsetWidth;key.classList.add(className);setTimeout(function(){key.classList.remove(className)},420)}
 function stepIndex(){if(heightGuide){if(cursor<formulaEnd)return 0;if(cursor<inverseEnd)return 1;return 2}if(cursor<=3)return 0;if(cursor<=7)return 1;return 2}
 function updateProgress(){const recommended=recommendedMode(progress);progressEl.innerHTML=`<span class="calc-progress-pill">Guiado: ${progress.guided}</span><span class="calc-progress-pill">Práctica: ${progress.practice}</span><span class="calc-progress-pill">Solo: ${progress.solo}</span><span class="calc-progress-pill"><b>Recomendado: nivel ${recommended}</b></span>`}
 function updateSteps(){const active=stepIndex();stepItems.forEach(function(item,index){item.classList.toggle("active",index===active&&cursor<expected.length);item.classList.toggle("done",index<active||cursor>=expected.length)})}
 function updateKeyState(){keys.forEach(function(key){key.classList.remove("next-key","locked")});if(mode===1&&cursor<expected.length){keys.forEach(function(key){if(key.dataset.key===expected[cursor])key.classList.add("next-key");else key.classList.add("locked")})}}
 function render(){expressionEl.textContent=expression;resultEl.textContent=pretty(display);expressionEl.scrollLeft=expressionEl.scrollWidth;resultEl.scrollLeft=resultEl.scrollWidth;instructionEl.textContent=cursor<expected.length?directions[cursor]:heightGuide?`Cálculo completo: ${finalHeightText}`:"Ejercicio terminado: 44,895188° = 44°53,7′.";updateSteps();updateKeyState();updateProgress()}
 function complete(){if(completed)return;completed=true;if(mode===1)progress.guided++;else if(mode===2)progress.practice++;else progress.solo++;saveProgress(progress,storageKey);updateProgress()}
 function reset(){cursor=0;history=[];expression=startExpression;display=startValue;stored=Number(startValue);pending=null;typing=false;completed=false;feedbackEl.className="calc-feedback";feedbackEl.textContent=height1258?"Empieza por SIN: vas a introducir l = 31°32,2′, d* = 38°48,2′ y P = 13°05′46″.":height1010?"Empieza por SIN: vas a introducir l = 40°34′, d = 23°13,8′ y P = 23°09,6′, exactamente como están escritos.":height296?"Empieza por SIN: vas a introducir la fórmula real con los datos de esta pregunta.":heightGuide?"Empieza por SIN: vas a introducir la fórmula real con l, d y P.":mode===3?"Calculadora libre. Haz la conversión y después pulsa «Revisar resultado».":"La pantalla ya contiene 44,895188. Empieza por la operación indicada.";render()}
 function useBasicKey(value){
  if(/^[0-9]$/.test(value)||value==="."){if(!typing){display=value==="."?"0.":value;typing=true}else if(!(value==="."&&String(display).includes(".")))display=String(display)+value;expression+=value;return true}
  if(["+","−","×","÷"].includes(value)){const number=Number(display);if(!Number.isFinite(number))return false;if(pending&&typing)stored=calculate(stored,pending,number);else stored=number;pending=value;typing=false;expression+=" "+value+" ";display=String(stored);return true}
  if(value==="="){if(!pending)return false;const number=Number(display),answer=calculate(stored,pending,number);display=Number.isFinite(answer)?String(Number(answer.toFixed(12))):"ERROR";expression+=" =";stored=Number(display);pending=null;typing=false;return true}
  if(value==="AC"){reset();return true}
  if(value==="DEL"&&typing){display=String(display).slice(0,-1)||"0";expression=expression.slice(0,-1);return true}
  if(value==="Ans"){display=String(stored);expression+="Ans";typing=true;return true}
  if(value==="(-)"){display=String(-Number(display));expression=expression.endsWith("−")?expression:expression+"(−)";return true}
  if(value==="π"){display=String(Math.PI);expression+="π";typing=true;return true}
  if(value==="√"){const number=Number(display);if(number<0)return false;display=String(Math.sqrt(number));expression="√("+expression+")";stored=Number(display);typing=false;return true}
  if(value==="x²"){display=String(Math.pow(Number(display),2));expression="("+expression+")²";stored=Number(display);typing=false;return true}
  if(["sin","cos","tan"].includes(value)){const radians=Number(display)*Math.PI/180;display=String(value==="sin"?Math.sin(radians):value==="cos"?Math.cos(radians):Math.tan(radians));expression=value+"("+expression+")";stored=Number(display);typing=false;return true}
  if(value==="S⇔D"){return true}
  return false
 }
 function updateHeightState(){
 cursor=history.length;expression=formatHeightExpression(history);
 const reached=milestones.filter(function(item){return cursor>=item.at}).pop();
 display=reached?reached.value:"";
}
 function firstMismatch(){const limit=Math.max(history.length,expected.length);let mismatch=0;while(mismatch<limit&&history[mismatch]===expected[mismatch])mismatch++;return mismatch}
 function guidedHeightPress(key,value){
  if(value==="AC"){setMode(recommendedMode(progress));return}
  if(cursor>=expected.length)return;
  if(value!==expected[cursor]){if(mode===2){flash(key,"flash-bad");beep();progress.wrong++;saveProgress(progress,storageKey)}return}
  if(mode===2)flash(key,"flash-good");history.push(value);updateHeightState();
  if(cursor===formulaEnd)feedbackEl.textContent=height1258?"La fórmula completa ha dado sen(ae*) = 0,974693172380. Ahora recupera la altura estimada de Vega con SHIFT y SIN.":height1010?"La fórmula completa ha dado sen(ae) = 0,8983134026. Ahora recupera la altura estimada con SHIFT y SIN.":height296?"La fórmula completa ha dado sen(ae) = 0,779722. Ahora recupera la altura estimada con SHIFT y SIN.":"La fórmula completa ha dado sen(ae) = 0,7058120802. Ahora recupera el ángulo con SHIFT y SIN.";
  if(cursor===inverseEnd)feedbackEl.textContent=height1258?"Ya tienes ae* = 77,082554214°. Pulsa °′″ para verla en grados, minutos y segundos.":height1010?"Ya tienes ae = 63,9372496°. Pulsa °′″ para verla en grados, minutos y segundos.":height296?"Ya tienes ae = 51,235123°. Pulsa °′″ para verla en grados, minutos y segundos.":"Ya tienes ae = 44,895188°. Ahora conviértelo al formato de las respuestas.";
  if(cursor===expected.length){display=milestones[milestones.length-1].value;feedbackEl.className="calc-feedback ok";feedbackEl.textContent=`Cálculo completo: ${finalHeightText} Pulsa AC para repetir; el siguiente nivel se elegirá según tu progreso.`;expression="CORRECTO · pulsa AC";complete()}
  render()
 }
 function soloHeightPress(key,value){
  if(value==="AC"){setMode(recommendedMode(progress));return}
  if(completed)return;
  history.push(value);updateHeightState();
  if(history.length>=expected.length){const mismatch=firstMismatch();if(mismatch===expected.length&&history.length===expected.length){expression="CORRECTO · pulsa AC";display=milestones[milestones.length-1].value;feedbackEl.className="calc-feedback ok";feedbackEl.textContent=`Ruta completa correcta: ${finalHeightText} Pulsa AC para comenzar otra vez.`;complete()}else{const pressed=history[mismatch]||"ninguna",wanted=expected[mismatch]||"terminar";expression=`ERROR · tecla ${mismatch+1}`;display=`${pressed} ≠ ${wanted}`;feedbackEl.className="calc-feedback bad";feedbackEl.textContent=`El primer error empezó en la pulsación ${mismatch+1}: pulsaste ${pressed} y correspondía ${wanted}.`}}
  render()
 }
 function guidedPress(key,value){if(value==="AC"){setMode(recommendedMode(progress));return}if(cursor>=expected.length)return;if(value!==expected[cursor]){if(mode===2){flash(key,"flash-bad");beep();progress.wrong++;saveProgress(progress,storageKey)}return}if(mode===2)flash(key,"flash-good");useBasicKey(value);history.push(value);cursor++;if(cursor===4)feedbackEl.textContent="Pantalla: 0,895188. Es la parte decimal de grado que falta convertir en minutos.";if(cursor===expected.length){feedbackEl.className="calc-feedback ok";feedbackEl.textContent="Correcto: 53,71128′. Redondea a 53,7′ y detente; no pulses °′″ otra vez.";complete()}render()}
 function freePress(key,value){const accepted=useBasicKey(value);if(accepted&&value!=="AC"&&value!=="DEL")history.push(value);else if(!accepted){flash(key,"flash-bad");beep();progress.wrong++;saveProgress(progress,storageKey)}render()}
 function review(){if(heightGuide){const mismatch=firstMismatch();if(mismatch===expected.length&&history.length===expected.length){display=milestones[milestones.length-1].value;complete();render();return}expression=`ERROR · tecla ${mismatch+1}`;display=`${history[mismatch]||"ninguna"} ≠ ${expected[mismatch]||"terminar"}`;render();return}const numeric=Number(display);if(Math.abs(numeric-53.71128)<.00001){feedbackEl.className="calc-feedback ok";feedbackEl.textContent="Resultado correcto: 53,71128′, que se redondea a 53,7′. Tu camino también es válido.";complete();return}const limit=Math.max(history.length,expected.length);let mismatch=0;while(mismatch<limit&&history[mismatch]===expected[mismatch])mismatch++;const pressed=history[mismatch]||"ninguna tecla",wanted=expected[mismatch]||"terminar";feedbackEl.className="calc-feedback bad";feedbackEl.textContent=`El primer desvío está en la pulsación ${mismatch+1}: pulsaste ${pressed}; en esta ruta correspondía ${wanted}. Reinicia y prueba otra vez.`}
 function setMode(next){mode=Number(next);root.dataset.mode=String(mode);modeButtons.forEach(function(button){button.setAttribute("aria-pressed",String(Number(button.dataset.ctMode)===mode))});modeDescriptionEl.innerHTML=modeText[mode];levelEl.textContent=mode===1?"GUIADO 1":mode===2?"PRÁCTICA 2":"LIBRE 3";reset()}
 keys.forEach(function(key){key.addEventListener("click",function(){const value=key.dataset.key;if(heightGuide){if(mode===3)soloHeightPress(key,value);else guidedHeightPress(key,value)}else if(mode===3)freePress(key,value);else guidedPress(key,value)})});modeButtons.forEach(function(button){button.addEventListener("click",function(){setMode(button.dataset.ctMode)})});root.querySelector("[data-ct-reset]").addEventListener("click",function(){setMode(recommendedMode(progress))});root.querySelector("[data-ct-review]").addEventListener("click",review);setMode(mode)
}
function mountAll(scope){(scope||document).querySelectorAll("[data-calculator-trainer]").forEach(mount)}
window.CalculatorTrainer={mountAll:mountAll};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",function(){mountAll(document)});else mountAll(document)
})();
