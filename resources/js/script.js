$(document).ready(function() {
  
  $('.js--section').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '25%'
  });
  
  
  /* --- Mobile nav ---*/
  $('.js--nav-icon').click(function() {
    const nav = $('.js--main-nav');
    const icon = $('.js--nav-icon i');
    
    nav.slideToggle(200);
    
    if (icon.hasClass('fas fa-bars')) {
      icon.addClass('fas fa-times');
      icon.removeClass('fas fa-bars');
    } else {
      icon.addClass('fas fa-bars');
      icon.removeClass('fas fa-times');
    }
  });
});