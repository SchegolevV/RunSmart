                                    // by owl-carousel
// $(document).ready(function(){
//    $(".owl-carousel").owlCarousel({
//         loop:true,
//         dots:false,
//         nav:true,
//         navText : ["<img src='icons/list-four/chevron-left-solid.svg'>","<img src='icons/list-four/chevron-right-solid.svg'>"],
//         autoWidth:true,
//         responsive:{
//             0:{
//                 items:1
//             },
//             767:{
//                 items:1,
//                 nav:true,
//                 dots:true
//             },
//             1023:{
//                 items:1

//             }
//         }
//     });
// });
                               // by tiny slider
// const slider = tns({
//     container: '.slider__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
//   });

// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   });

// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });

$(document).ready(function(){
    
    $('.slider__inner').slick({
        speed: 500,
        adaptiveHeight: false,
        dotsClass: ['slider__dots'],
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/list-four/chevron-left-solid.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/list-four/chevron-right-solid.svg"></img></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false,
                  speed: 200
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  });
