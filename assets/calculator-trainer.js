(function(){
"use strict";
const STORAGE_KEY="aprobarNautica_calculatorTrainer_v1";
const expected=["−","4","4","=","×","6","0","="];
const directions=[
 "Pulsa la tecla de restar: −",
 "Escribe 44. Pulsa primero 4.",
 "Completa 44. Pulsa otra vez 4.",
 "Pulsa =. Debe aparecer 0,895188.",
 "Pulsa × para multiplicar la parte decimal de grado.",
 "Escribe 60. Pulsa primero 6.",
 "Completa 60. Pulsa 0.",
 "Pulsa =. Aparecerán 53,71128 minutos. Redondea a 53,7′ y termina."
];
const modeText={
 1:"<b>Nivel 1 · Aprender:</b> solo funciona la tecla correcta y aparece iluminada en verde suave.",
 2:"<b>Nivel 2 · Practicar:</b> ninguna tecla se ilumina antes. Una tecla incorrecta no escribe nada: se pone roja y suena. La correcta funciona y se pone verde un instante.",
 3:"<b>Nivel 3 · Solo:</b> puedes hacer la operación libremente. Al terminar, la revisión comprueba el resultado y localiza el primer desvío."
};
function loadProgress(){try{return Object.assign({guided:0,practice:0,solo:0,wrong:0},JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}"))}catch(e){return {guided:0,practice:0,solo:0,wrong:0}}}
function saveProgress(progress){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(progress))}catch(e){}}
function recommendedMode(progress){if(progress.guided<2)return 1;if(progress.practice<2)return 2;return 3}
function trainerMarkup(){return `<div class="calc-trainer-head"><div><h3>Calculadora guiada · Casio fx-85SP X II</h3><p class="sub">Primera lección interactiva: convertir grados decimales en grados y minutos.</p></div><div class="calc-trainer-progress" data-ct-progress></div></div>
<div class="calc-trainer-controls" role="group" aria-label="Nivel de ayuda de la calculadora">
 <button class="calc-mode" type="button" data-ct-mode="1" aria-pressed="true">1 · Aprender</button>
 <button class="calc-mode" type="button" data-ct-mode="2" aria-pressed="false">2 · Practicar</button>
 <button class="calc-mode" type="button" data-ct-mode="3" aria-pressed="false">3 · Solo</button>
 <button class="calc-reset" type="button" data-ct-reset>Reiniciar</button>
 <label class="calc-sound"><input type="checkbox" data-ct-sound checked> Aviso sonoro</label>
</div>
<div class="calc-trainer-grid">
 <div class="calc-coach">
  <div class="calc-task">Objetivo: 44,895188° = 44° 53,7′</div>
  <div class="calc-mode-description" data-ct-mode-description></div>
  <div class="calc-instruction" data-ct-instruction aria-live="polite"></div>
  <ol class="calc-lesson-steps" data-ct-steps><li>Quitar los 44 grados enteros.</li><li>Multiplicar la parte decimal por 60 para convertirla en minutos.</li><li>Redondear 53,71128′ a 53,7′ y detenerse.</li></ol>
  <div class="calc-feedback" data-ct-feedback aria-live="polite">La pantalla ya contiene 44,895188. Empieza por la operación indicada.</div>
 </div>
 <div class="calc-body-wrap"><div>
  <div class="calc-body" aria-label="Simulación educativa de la calculadora Casio fx-85SP X II">
   <div class="calc-brand-row"><span class="calc-brand">CASIO</span><span class="calc-model">fx-85SP X II<br>CLASSWIZ</span></div>
   <div class="calc-solar" aria-hidden="true"></div>
   <div class="calc-screen" role="status" aria-live="polite"><div class="calc-screen-top"><span>DEG</span><span data-ct-level>GUIADO 1</span></div><div class="calc-expression" data-ct-expression>44.895188</div><div class="calc-result" data-ct-result>44.895188</div></div>
   <div class="calc-pad">
    <button class="calc-key shift" data-key="SHIFT" type="button">SHIFT</button><button class="calc-key alpha" data-key="ALPHA" type="button">ALPHA</button><button class="calc-key" data-key="MENU" type="button">MENU</button><button class="calc-key" data-key="◀" type="button">◀</button><button class="calc-key" data-key="▲" type="button">▲</button><button class="calc-key accent" data-key="ON" type="button">ON</button>
    <button class="calc-key" data-key="□/□" type="button">□/□</button><button class="calc-key" data-key="√" type="button">√</button><button class="calc-key" data-key="x²" type="button">x²</button><button class="calc-key" data-key="xⁿ" type="button">xⁿ</button><button class="calc-key" data-key="log" type="button">log</button><button class="calc-key" data-key="ln" type="button">ln</button>
    <button class="calc-key" data-key="(-)" type="button">(−)</button><button class="calc-key" data-key="°′″" type="button">°′″</button><button class="calc-key" data-key="hyp" type="button">hyp</button><button class="calc-key" data-key="sin" type="button" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-top:2px"><span style="color:#ffd35a;font-size:8px;line-height:1">sin⁻¹</span><span>sin</span></button><button class="calc-key" data-key="cos" type="button">cos</button><button class="calc-key" data-key="tan" type="button">tan</button>
    <button class="calc-key" data-key="RCL" type="button">RCL</button><button class="calc-key" data-key="ENG" type="button">ENG</button><button class="calc-key" data-key="(" type="button">(</button><button class="calc-key" data-key=")" type="button">)</button><button class="calc-key" data-key="S⇔D" type="button">S⇔D</button><button class="calc-key" data-key="M+" type="button">M+</button>
    <button class="calc-key light" data-key="7" type="button">7</button><button class="calc-key light" data-key="8" type="button">8</button><button class="calc-key light" data-key="9" type="button">9</button><button class="calc-key danger" data-key="DEL" type="button">DEL</button><button class="calc-key danger" data-key="AC" type="button">AC</button><button class="calc-key" data-key="÷" type="button">÷</button>
    <button class="calc-key light" data-key="4" type="button">4</button><button class="calc-key light" data-key="5" type="button">5</button><button class="calc-key light" data-key="6" type="button">6</button><button class="calc-key" data-key="×" type="button">×</button><button class="calc-key" data-key="Ans" type="button">Ans</button><button class="calc-key" data-key="−" type="button">−</button>
    <button class="calc-key light" data-key="1" type="button">1</button><button class="calc-key light" data-key="2" type="button">2</button><button class="calc-key light" data-key="3" type="button">3</button><button class="calc-key" data-key="+" type="button">+</button><button class="calc-key" data-key="×10ˣ" type="button">×10ˣ</button><button class="calc-key accent" data-key="=" type="button">=</button>
    <button class="calc-key light" data-key="0" type="button">0</button><button class="calc-key light" data-key="." type="button">.</button><button class="calc-key" data-key="EXP" type="button">EXP</button><button class="calc-key" data-key="π" type="button">π</button><button class="calc-key" data-key="%" type="button">%</button><button class="calc-key" data-key="▶" type="button">▶</button>
   </div>
  </div>
  <div class="calc-review-row"><button class="calc-review" type="button" data-ct-review>Revisar resultado</button></div>
  <div class="calc-key-legend"><span><i class="calc-key-dot good"></i>tecla correcta</span><span><i class="calc-key-dot bad"></i>tecla incorrecta</span></div>
  <div class="calc-legal">Simulación educativa propia; no es un emulador oficial. Disposición basada en la Casio fx-85SP X II y contrastada con su <a href="https://support.casio.com/storage/es/manual/pdf/ES/004/fx-82_85_350SP_X_II_ES.pdf" target="_blank" rel="noopener">manual oficial</a>.</div>
 </div></div>
</div>`}
function pretty(value){return String(value).replace(".",",")}
function calculate(a,operator,b){if(operator==="+")return a+b;if(operator==="−")return a-b;if(operator==="×")return a*b;if(operator==="÷")return b===0?NaN:a/b;return b}
function mount(root){
 if(root.dataset.ctMounted==="1")return;
 root.dataset.ctMounted="1";root.innerHTML=trainerMarkup();
 const expressionEl=root.querySelector("[data-ct-expression]"),resultEl=root.querySelector("[data-ct-result]"),instructionEl=root.querySelector("[data-ct-instruction]"),feedbackEl=root.querySelector("[data-ct-feedback]"),levelEl=root.querySelector("[data-ct-level]"),modeDescriptionEl=root.querySelector("[data-ct-mode-description]"),progressEl=root.querySelector("[data-ct-progress]"),soundEl=root.querySelector("[data-ct-sound]"),keys=Array.from(root.querySelectorAll(".calc-key")),modeButtons=Array.from(root.querySelectorAll("[data-ct-mode]")),stepItems=Array.from(root.querySelectorAll("[data-ct-steps] li"));
 let progress=loadProgress(),mode=recommendedMode(progress),cursor=0,history=[],expression="44.895188",display="44.895188",stored=44.895188,pending=null,typing=false,completed=false;
 function beep(){if(!soundEl.checked)return;try{const AudioContext=window.AudioContext||window.webkitAudioContext,audio=new AudioContext(),osc=audio.createOscillator(),gain=audio.createGain();osc.type="sine";osc.frequency.value=170;gain.gain.setValueAtTime(.055,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.11);osc.connect(gain);gain.connect(audio.destination);osc.start();osc.stop(audio.currentTime+.11)}catch(e){}}
 function flash(key,className){key.classList.remove("flash-good","flash-bad");void key.offsetWidth;key.classList.add(className);setTimeout(function(){key.classList.remove(className)},420)}
 function stepIndex(){if(cursor<=3)return 0;if(cursor<=7)return 1;return 2}
 function updateProgress(){const recommended=recommendedMode(progress);progressEl.innerHTML=`<span class="calc-progress-pill">Guiado: ${progress.guided}</span><span class="calc-progress-pill">Práctica: ${progress.practice}</span><span class="calc-progress-pill">Solo: ${progress.solo}</span><span class="calc-progress-pill"><b>Recomendado: nivel ${recommended}</b></span>`}
 function updateSteps(){const active=stepIndex();stepItems.forEach(function(item,index){item.classList.toggle("active",index===active&&cursor<expected.length);item.classList.toggle("done",index<active||cursor>=expected.length)})}
 function updateKeyState(){keys.forEach(function(key){key.classList.remove("next-key","locked")});if(mode===1&&cursor<expected.length){keys.forEach(function(key){if(key.dataset.key===expected[cursor])key.classList.add("next-key");else key.classList.add("locked")})}}
 function render(){expressionEl.textContent=expression;resultEl.textContent=pretty(display);instructionEl.textContent=cursor<expected.length?directions[cursor]:"Ejercicio terminado: 44,895188° = 44° 53,7′.";updateSteps();updateKeyState();updateProgress()}
 function complete(){if(completed)return;completed=true;if(mode===1)progress.guided++;else if(mode===2)progress.practice++;else progress.solo++;saveProgress(progress);updateProgress()}
 function reset(){cursor=0;history=[];expression="44.895188";display="44.895188";stored=44.895188;pending=null;typing=false;completed=false;feedbackEl.className="calc-feedback";feedbackEl.textContent=mode===3?"Calculadora libre. Haz la conversión y después pulsa «Revisar resultado».":"La pantalla ya contiene 44,895188. Empieza por la operación indicada.";render()}
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
 function guidedPress(key,value){if(cursor>=expected.length)return;if(value!==expected[cursor]){if(mode===2){flash(key,"flash-bad");beep();progress.wrong++;saveProgress(progress)}return}if(mode===2)flash(key,"flash-good");useBasicKey(value);history.push(value);cursor++;if(cursor===4)feedbackEl.textContent="Pantalla: 0,895188. Es la parte decimal de grado que falta convertir en minutos.";if(cursor===expected.length){feedbackEl.className="calc-feedback ok";feedbackEl.textContent="Correcto: 53,71128′. Redondea a 53,7′ y detente; no pulses °′″ otra vez.";complete()}render()}
 function freePress(key,value){const accepted=useBasicKey(value);if(accepted&&value!=="AC"&&value!=="DEL")history.push(value);else if(!accepted){flash(key,"flash-bad");beep();progress.wrong++;saveProgress(progress)}render()}
 function review(){const numeric=Number(display);if(Math.abs(numeric-53.71128)<.00001){feedbackEl.className="calc-feedback ok";feedbackEl.textContent="Resultado correcto: 53,71128′, que se redondea a 53,7′. Tu camino también es válido.";complete();return}const limit=Math.max(history.length,expected.length);let mismatch=0;while(mismatch<limit&&history[mismatch]===expected[mismatch])mismatch++;const pressed=history[mismatch]||"ninguna tecla",wanted=expected[mismatch]||"terminar";feedbackEl.className="calc-feedback bad";feedbackEl.textContent=`El primer desvío está en la pulsación ${mismatch+1}: pulsaste ${pressed}; en esta ruta correspondía ${wanted}. Reinicia y prueba otra vez.`}
 function setMode(next){mode=Number(next);root.dataset.mode=String(mode);modeButtons.forEach(function(button){button.setAttribute("aria-pressed",String(Number(button.dataset.ctMode)===mode))});modeDescriptionEl.innerHTML=modeText[mode];levelEl.textContent=mode===1?"GUIADO 1":mode===2?"PRÁCTICA 2":"LIBRE 3";reset()}
 keys.forEach(function(key){key.addEventListener("click",function(){const value=key.dataset.key;if(mode===3)freePress(key,value);else guidedPress(key,value)})});modeButtons.forEach(function(button){button.addEventListener("click",function(){setMode(button.dataset.ctMode)})});root.querySelector("[data-ct-reset]").addEventListener("click",reset);root.querySelector("[data-ct-review]").addEventListener("click",review);setMode(mode)
}
function mountAll(scope){(scope||document).querySelectorAll("[data-calculator-trainer]").forEach(mount)}
window.CalculatorTrainer={mountAll:mountAll};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",function(){mountAll(document)});else mountAll(document)
})();
