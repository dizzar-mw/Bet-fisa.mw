

const counter = document.getElementById('counter');
let counNum = 0.01;
const counterUpdate = setInterval(function(){
  counNum++;
  counter.textContent = "x"+counNum;
},100); 
