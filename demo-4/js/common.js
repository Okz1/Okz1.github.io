$(document).ready(function() {

    $('.slick-corusel').slick({
        dots: false,
        arrows: true
    });

    $('.project-gallery-item').hover(addHover, removeHover);


    function addHover() {
        $(this).addClass('hoverEffect');
        $('.project-gallery-item-inner p', this).css('opacity', '1');
        // $('.project-gallery-item-inner a', this).css('background-color', 'transparent');
        $('.project-gallery-item-inner h3', this).css('text-decoration-color', '#7dbe1f');
        $('.project-gallery-item-inner a', this).css('transform', 'translateY(0%)');
    };

    function removeHover() {
        $(this).removeClass('hoverEffect');
        $('.project-gallery-item-inner p', this).css('opacity', '0');
        // $('.project-gallery-item-inner a', this).css('background-color', 'rgb(67, 156, 146)');
        $('.project-gallery-item-inner h3', this).css('text-decoration-color', 'transparent');
        $('.project-gallery-item-inner a', this).css('transform', 'translateY(-220%)');
    };

    $("#mouse-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#project").offset().top - 96
        }, 2000);
    });

    var $status = $('.slick-corusel-mumber .slick-corusel-mumber-activ');
    var $slickElement = $('.slick-corusel');
    var $slickElementAll = $('.slick-corusel-mumber-all')
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i);
        $slickElementAll.text(slick.slideCount);
    });

    new WOW().init();



    var formItem = $('.js-form-control');
    var textArea = $('#fortextarea');

    formItem.focus(function() {
        if ($(window).width() > 768) {
            $(this).prev().css({
                'top': '-15px',
                'font-size': '10px'
            });
        } else {
            if ($(this).prev().hasClass('contact-form__label-name-mod')) {
                $(this).prev().css({
                    'top': '-15px',
                    'font-size': '10px'
                });
            } else {
                $(this).prev().css({
                    'top': '4px',
                    'font-size': '10px'
                });
            }
        }
    });

    formItem.blur(function() {
        if ($(window).width() > 768) {
            if ($(this).val().length == 0) {
                $(this).prev().css({
                    'top': '7px',
                    'font-size': '14px'
                });
            } else {
                $(this).prev().css('top', '-15px');
            }
        } else {
            if ($(this).prev().hasClass('contact-form__label-name-mod')) {
                if ($(this).val().length == 0) {
                    $(this).prev().css({
                        'top': '10px',
                        'font-size': '14px'
                    });
                } else {
                    $(this).prev().css({
                        'top': '-15px',
                        'font-size': '10px'
                    });
                }
            } else {
                if ($(this).val().length == 0) {
                    $(this).prev().css({
                        'top': '25px',
                        'font-size': '14px'
                    });
                } else {
                    $(this).prev().css('top', '4px');
                }
            }
        }
    });



    textArea.focus(function() {
        if ($(window).width() > 768) {
            $(this).prev().css({
                'top': '50px',
                'font-size': '10px'
            });
        } else {
            $(this).prev().css({
                'top': '10px',
                'font-size': '10px'
            });
        }
    });

    textArea.blur(function() {
        if ($(window).width() > 768) {
            if ($(this).val().length == 0) {
                $(this).prev().css('top', '78px');
            } else {
                $(this).prev().css('top', '50px');
            }
        } else {
            if ($(this).val().length == 0) {
                $(this).prev().css({
                    'top': '40px',
                    'font-size': '14px'
                });
            } else {
                $(this).prev().css('top', '10px');
            }
        }
    });




    $('#search-field .close_menu').on('click', function() {
        $("#search-field").toggleClass('search-field-mod')
    });

    $('.search').on('click', function() {
        $("#search-field").toggleClass('search-field-mod')
    });


    $('.burger').on('click', function() {
        $('.nav-mobile-wrap').addClass('nav-mobile-wrap-close');
        $('.burger').hide();
        $('.header-top-nav .close_menu').show();
    });

    $('.header-top-nav .close_menu').on('click', function() {
        $('.nav-mobile-wrap').removeClass('nav-mobile-wrap-close');
        $('.burger').show();
        $('.header-top-nav .close_menu').hide();
    });

var rectangl = $('#rec').offset();
var paragf = $('.header .slick-corusel p').offset();

if(paragf.top <= 330 && paragf.left <= -448){
	$("#rec").css('display', "none");
}


});