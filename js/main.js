$(document).ready(function () {
$('#menu-btn').click(function() {
  $(this).toggleClass('fa-times');
  $('.navbar').toggleClass('active'); 
});
});

var swiper = new Swiper(".services-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickabe: true,
  },
      breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
});
