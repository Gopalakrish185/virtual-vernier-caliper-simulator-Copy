"use strict";
// Illustrative, not a geometrically calibrated instrument drawing.
// Readings are computed at 0.02 mm resolution. The SVG is a teaching diagram.
const $ = id => document.getElementById(id);
const range = $('position');
const mainTicks = $('mainTicks');
const vernierTicks = $('vernierTicks');
const ns = 'http://www.w3.org/2000/svg';
let answerVisible = true, attempts = 0, correct = 0;
const scale = 7.3; // visual pixels per mm (only first ~100 mm in 790px)
function line(parent,x1,y1,x2,y2,color='#41556d',width=1){const e=document.createElementNS(ns,'line'); for(const [k,v] of Object.entries({x1,y1,x2,y2,stroke:color,'stroke-width':width}))e.setAttribute(k,v);parent.appendChild(e)}
function textNode(parent,x,y,text){const e=document.createElementNS(ns,'text');e.setAttribute('x',x);e.setAttribute('y',y);e.setAttribute('font-size','11');e.setAttribute('fill','#34445a');e.textContent=text;parent.appendChild(e)}
for(let i=0;i<=100;i++){const x=95+i*scale;line(mainTicks,x,111,x,111+(i%10===0?24:i%5===0?17:10));if(i%10===0)textNode(mainTicks,x-6,150,String(i))}
for(let i=0;i<=50;i++){const x=13+i*2.85;line(vernierTicks,x,162,x,162+(i%5===0?16:9),'#154a7a',i%5===0?1.8:1);}
function measurement(){return Math.round(Number(range.value)/.02)*.02}
function update(){const value=measurement();const main=Math.floor((value+1e-8)*1)/1;const index=Math.round((value-main)/.02);$('positionOut').textContent=value.toFixed(2)+' mm';$('mainReading').textContent=main.toFixed(2)+' mm';$('coincidence').textContent=`${index} × 0.02 mm`;$('reading').textContent=value.toFixed(2)+' mm';const tx=Math.min(value*scale,620);$('sliderGroup').setAttribute('transform',`translate(${95+tx} 0)`);$('movingLabel').setAttribute('x',Math.min(200+tx,765));document.querySelector('.readout').style.visibility=answerVisible?'visible':'hidden';}
range.addEventListener('input',()=>{update();$('feedback').textContent=''});
$('random').addEventListener('click',()=>{range.value=(Math.floor(Math.random()*5001)*.02).toFixed(2);$('feedback').textContent='';update()});
$('reset').addEventListener('click',()=>{range.value='12.30';$('feedback').textContent='';update()});
$('toggleAnswer').addEventListener('click',()=>{answerVisible=!answerVisible;$('toggleAnswer').textContent=answerVisible?'Hide answers':'Show answers';update()});
$('check').addEventListener('click',()=>{const value=$('guess').value.trim(),num=Number(value);if(value===''||!Number.isFinite(num)||num<0||num>100){$('feedback').textContent='Enter a valid measurement from 0 to 100 mm.';return}attempts++;if(Math.abs(num-measurement())<0.001){correct++;$('feedback').textContent='Correct! Excellent measurement.'}else{$('feedback').textContent=`Not quite. Correct answer: ${measurement().toFixed(2)} mm.`}$('score').textContent=`Score: ${correct} correct out of ${attempts} attempts`});
update();
