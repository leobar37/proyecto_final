const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.menu');
const itemsNav = document.querySelectorAll('.menu ul a');
const icons =  document.querySelector('.icons');
const rowDown  = document.querySelector('.row__down');

const row = document.querySelector('.row__down a');
const header = document.querySelector('header');
row.addEventListener('click' , ()=>{
  let top = header.getBoundingClientRect().height;
  console.log(top);
   window.scroll(
    { top : top + 200}
   );
})




menuBtn.addEventListener('click' ,()=>{
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
    icons.classList.toggle('open');
    rowDown.classList.toggle('open');
   itemsNav.forEach(item => item.classList.toggle('open'));


});


  AOS.init();