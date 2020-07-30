
$(document).ready(function () {
    $("#demo01").animatedModal({
        color : "#FFFFFF",
        animatedIn: "lightSpeedIn",
        animatedOut: "bounceOutDown"
    });
    
});
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
const row = document.querySelector('.row__down a');
const header = document.querySelector('header');
row.addEventListener('click' , ()=>{
  let top = header.getBoundingClientRect().height;

   window.scroll(
    { top : top + 200}
   );
})



const sumbmit = document.getElementById('register');
const alerta = document.getElementById('alerta');
const noneText =  document.querySelector('#alerta small');

noneText.classList.add('alert');
sumbmit.addEventListener('click', (e)=>{
    e.preventDefault();

let info =  document.getElementById('info');
let celular  = document.getElementById('celular');
let correo =  document.getElementById('correo');
let pass = document.getElementById('pass');
let arr = [pass , correo , celular , info];
let val  = arr.find(item => item.value.trim().length ==0);

if(val){
    // noneText.style = 'background: rgb(131, 33, 33)';
    noneText.textContent = "se han encontrado campos vacios";
}else{
    noneText.textContent = "registrado correctamente";
     localStorage.setItem('name' , info);
    arr.forEach(item =>  item.value = "");
}

alerta.classList.toggle('open');
setTimeout(()=>{
    alerta.classList.toggle('open');

}, 1000)
});