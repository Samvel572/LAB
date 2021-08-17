$(function(){

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.idea__slider').slick({
    prevArrow:'<button type="button" class="slick-prev arrow"><img src="app/images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:'<button type="button" class="slick-next arrow"><img src="app/images/arrow-right.svg" alt="arrow-right"></button>',
  });
  
});


