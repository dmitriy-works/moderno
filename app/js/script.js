$(function(){

  $(".rate-star").rateYo({
    rating: 5,
    readOnly: true,
    // numStars: 10,
    starWidth: "12px"
  });

  $('.products-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  var mixer = mixitup('.products__inner-box');

});