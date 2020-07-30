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

const  contact  = document.getElementById('contact');

contact.addEventListener('click' , ()=>{
 window.location = '/contacto.html';
});
 