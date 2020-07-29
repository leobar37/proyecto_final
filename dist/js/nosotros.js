$(document).ready(function () {

    $('.center').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});

// const menuBtn = document.querySelector('.menu-btn');
// const hamburger = document.querySelector('.menu-btn__burger');
// const nav = document.querySelector('.menu');
// const itemsNav = document.querySelectorAll('.menu ul a');
// const icons =  document.querySelector('.icons');
// const rowDown  = document.querySelector('.row__down');





// menuBtn.addEventListener('click' ,()=>{
//     nav.classList.toggle('open');
//     hamburger.classList.toggle('open');
//     icons.classList.toggle('open');
//     rowDown.classList.toggle('open');
//    itemsNav.forEach(item => item.classList.toggle('open'));


// });

 