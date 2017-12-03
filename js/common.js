
$(document).ready(function(){
  $('.carusel').slick({
  	prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
});

$(document).ready(function(){
  $('.feedback-carusel').slick({
  	dots: true,
    infinite: true,
  	arrows: false
  });
});

$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.btn-scroll').fadeIn();
		} else {
			$('.btn-scroll').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.btn-scroll').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});

$(document).ready(function() {
  
  $(window).scroll(function () { 
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > $('header').height()) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < $('header').height()) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});


$(document).ready(function() {
    $(".close").hide();
    $(".nav-bar-mobile").hide();
    $(".nav-bar-link").click(function(e) {
        e.preventDefault();$(".nav-bar-mobile").slideToggle(function() {
            $(".nav-bar-link").hide();
            $(".close").show();
        });
    });

    $(".close").click(function() {
        $(".nav-bar-mobile").slideToggle(function() {
            $(".close").hide();
            $(".nav-bar-link").show();
        });
    });
});