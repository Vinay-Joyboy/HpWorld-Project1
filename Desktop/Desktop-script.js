// navigation  start
$(document).ready(function(){
  $('.btn').click(function(){
      $('.items').toggleClass('show');
      $('ul li').toggleClass('hide');
  });
  });
// navigation  End

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

