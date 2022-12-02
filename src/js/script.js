$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 500,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/list-four/chevron-left-solid.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/list-four/chevron-right-solid.svg"></img></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
    });
});