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

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
});

  var mixer = mixitup('.products__inner-box');

});