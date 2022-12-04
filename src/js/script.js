                                    // by slick-slider
// $(document).ready(function(){
//     $('.slider__inner').slick({
//         speed: 500,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/list-four/chevron-left-solid.svg"></img></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/list-four/chevron-right-solid.svg"></img></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]
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
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
  });
