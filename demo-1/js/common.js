$(document).ready(function(){
  $('.main-slider-wrap').slick({
    arrows: true,
    dots: true,
    autoplay: true,
  	autoplaySpeed: 3000
  });
});

$(document).ready(function(){
  $('.product-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
  	autoplaySpeed: 2000
  });
});


 function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 49.829519,  lng: 24.032473},
          disableDefaultUI: true
        });
      }


jQuery('a[href^="#"]').click(function(e) {
 
    jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1000);
 
    return false;
 
    e.preventDefault();
 
});


jQuery('.progress-bar').addClass("hideme").viewportChecker({
classToAdd: 'visible animated slideInLeft',
offset: 100
});


$(document).ready(function() {

    $(".close").hide();
    $(".mobile-menu").hide();
    $(".hamburger").click(function(e) {
          event.preventDefault();
          $(".mobile-menu").slideToggle(function() {
            $(".hamburger").hide();
            $(".close").show();
        });
    });

    $(".close").click(function(e) {
      event.preventDefault(); 
        $(".mobile-menu").slideToggle(function() {
            $(".close").hide();
            $(".hamburger").show();
        });
    });

});