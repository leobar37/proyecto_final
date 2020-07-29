let  images  = [
"../asssets/img/projects/future.png",
"../asssets/img/projects/alien.png",
"../asssets/img/projects/coffe.png"
]

let bgs = document.querySelectorAll('.portafolio .job .bg_image');
for (let i = 0; i <  bgs.length; i++) {
    const bg =  bgs[i];
    bg.style = `
    background-image:linear-gradient( 360deg,rgba(6, 66, 66, 1), rgba(0, 32, 36, 0.7) ) ,   
    url('${images[i]}');
    ;
    `;    
}

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.menu');
const itemsNav = document.querySelectorAll('.menu ul a');
const icons =  document.querySelector('.icons');
const rowDown  = document.querySelector('.row__down');

menuBtn.addEventListener('click' ,()=>{
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
    icons.classList.toggle('open');
    rowDown.classList.toggle('open');
   itemsNav.forEach(item => item.classList.toggle('open'));


});