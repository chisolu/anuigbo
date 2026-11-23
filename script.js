const input =document.getElementById('input');
const btnEL1 =document.getElementById('btn1');
const btnEL2 =document.getElementById('btn2');
const btnEL3 =document.getElementById('btn3');
const btnEL4 =document.getElementById('btn4');
const btnEL5 =document.getElementById('btn5');
const img =document.getElementById('img');
const imageTitle =document.getElementById('imageTitle');
// const topo =document.getElementById('topo');


function showColor(imageSrc, title, text){
    img.src = imageSrc;
    imageTitle.innerText = title;
    // topo.innerText = text;
}


//  function  play1(){
//    const audio = new Audio('audio/ojii-au.m4a');
//       audio.play();

//       btnEL1.addEventListener('click', play1);
//  }
//  function  play2(){
//    const audio = new Audio('audio/ocha-au.m4a');
//       audio.play();

//       btnEL2.addEventListener('click', play2);
//  }
//  function  play3(){
//    const audio = new Audio('audio/uhie-au.m4a');
//       audio.play();

//       btnEL3.addEventListener('click', play3);
//  }
//  function  play4(){
//    const audio = new Audio('audio/ndu-au.m4a');
//       audio.play();

//       btnEL4.addEventListener('click', play4);
//  }
//  function  play5(){
//    const audio = new Audio('audio/anunu-au.m4a');
//       audio.play();

//       btnEL5.addEventListener('click', play5);
//  }
 