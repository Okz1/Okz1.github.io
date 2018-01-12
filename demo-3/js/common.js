new WOW().init();
$(document).ready(function(){
      $('.carusel-feedback').slick({
      	dots: true,
      	 arrows: false
      });
    });

$(document).ready(function(){
      $('.products-carusels').slick({
        responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
      	dots: false,
      	 slidesToShow: 4,
         slidesToScroll: 1,
      	 arrows: true,
      	 prevArrow: '<div class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
					nextArrow: '<div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
      });
    });

$(".input-email").after('<img src="img/email.png" />');

$('article').readmore({
    speed: 75,
    maxHeight: 250,
    moreLink: '<a href="#" class="about-btn">READ MORE</a>',
    lessLink: '<a href="#" class="about-btn"> LESS</a>'
});

jQuery('.progress-bar').addClass("hideme").viewportChecker({
classToAdd: 'visible animated slideInLeft',
offset: 100
});

// $(document).ready(function() {

//   //E-mail Ajax Send
//   $("#form-1").submit(function() { //Change
//     var th = $(this);
//     $.ajax({
//       type: "POST",
//       url: "../mail.php", //Change
//       data: th.serialize()
//     }).done(function() {
//       alert("Thank you!");
//       setTimeout(function() {
//         // Done Functions
//         th.trigger("reset");
//       }, 1000);
//     });
//     return false;
//   });

// });

// $(document).ready(function() {

//   //E-mail Ajax Send
//   $("#form-2").submit(function() { //Change
//     var th = $(this);
//     $.ajax({
//       type: "POST",
//       url: "../mail.php", //Change
//       data: th.serialize()
//     }).done(function() {
//       alert("Thank you!");
//       setTimeout(function() {
//         // Done Functions
//         th.trigger("reset");
//       }, 1000);
//     });
//     return false;
//   });

// });

 jQuery('a[href^="#"]').click(function(e) {
 
    jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1000);
 
    return false;
 
    e.preventDefault();
 
});

 (function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };

    // auto-initialize plugin
    $('[data-equal]').each(function(){
        var $this = $(this),
            target = $this.data('equal');
        $this.find(target).equalHeights();
    });

})(jQuery);

$('.blog-item-info').equalHeights();


$( document ).ready(function() {

$( ".close" ).hide();
$( ".nav-bar-mobile" ).hide();
$( ".nav-bar-link" ).click(function() {
$( ".nav-bar-mobile" ).slideToggle( function() {
$( ".nav-bar-link" ).hide();
$( ".close" ).show();
});
});

$( ".close" ).click(function() {
$( ".nav-bar-mobile" ).slideToggle( function() {
$( ".close" ).hide();
$( ".nav-bar-link" ).show();
});
});

});


$(document).ready(function() {

var $container = $(".masonry-container");
  $container.imagesLoaded(function () {
    $container.masonry({
      columnWidth: ".item",
      itemSelector: ".item"
    });
    $(".item").imagefill();
  });

});

document.body.onload = function() {

  setTimeout(function(){
    var preloader = document.getElementById('page-preloader');
    if(!preloader.classList.contains('done') ){
      preloader.classList.add('done')
    }
  }, 1000)

}
