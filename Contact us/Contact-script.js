// navigation  start
let lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function(){
  let scrollTop = window.pageYOffset || document
  .documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top='-80px';    
  } else{
    navbar.style.top = "0";
  }
})

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
