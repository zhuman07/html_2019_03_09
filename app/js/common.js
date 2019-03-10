$(function() {

    $.fn.extend({

        // Define the threeBarToggle function by extending the jQuery object
        threeBarToggle: function(options){

            // Set the default options
            var defaults = {
                color: '#383838',
                width: 30,
                height: 25,
                speed: 400,
                animate: true
            };
            var options = $.extend(defaults, options);

            return this.each(function(){

                $(this).empty().css({'width': options.width, 'height': options.height, 'background': 'transparent'});
                $(this).addClass('tb-menu-toggle');
                $(this).prepend('<i></i><i></i><i></i>').on('click', function(event) {
                    event.preventDefault();
                    $(this).toggleClass('tb-active-toggle');
                    if (options.animate) { $(this).toggleClass('tb-animate-toggle'); }
                    $('.tb-mobile-menu').fadeToggle(options.speed);
                });
                $(this).children().css('background', options.color);
            });
        },

        // Define the accordionMenu() function that adds the sliding functionality
        accordionMenu: function(options){

            // Set the default options
            var defaults = {
                speed: 400
            }
            var options =  $.extend(defaults, options);

            return this.each(function(){

                $(this).addClass('tb-mobile-menu');
                var menuItems = $(this).children('li');
                menuItems.find('.sub-menu').parent().addClass('tb-parent');
                $('.tb-parent ul').hide();
                $('.tb-parent > a').on('click', function(event) {
                    event.stopPropagation();
                    event.preventDefault();
                    $(this).siblings().slideToggle(options.speed);
                });

            });
        }
    });

// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
    $('#menu-toggle').threeBarToggle({color: '#313131', width: 17, height: 25});

// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
    $('#mob-menu').accordionMenu();

    $('.mob-menu-icon').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.mobile').removeClass('active');
            $('.mobile').fadeOut();
            $('body').removeClass('scroll-off')
        } else {
            $(this).addClass('active');
            $('.mobile').addClass('active');
            $('.mobile').fadeIn();
            $('body').addClass('scroll-off')
        }
    });

    /*$('.menu').superfish({

    })*/

    $('.mobile-menu > li > ul').parent().addClass('parent-item');
    $('.mobile-menu .parent-item').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });

    $('.content').css('min-height', $(window).height());

    $('.main').height($(window).height()).css('overflow', 'hidden');

    $('.vacancy-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.vacancy-slider-arrows .left-arrow'),
        nextArrow: $('.vacancy-slider-arrows .right-arrow'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.vacancy-slider-item').click(function () {
        var id = $(this).data('id');
        $('.vacancy-data-item[data-id="'+id+'"]').addClass('active');
    });

    $('.vacancy-data-item .vacancy-data-item-close').click(function () {
        $('.vacancy-data-item').removeClass('active');
    })



});
