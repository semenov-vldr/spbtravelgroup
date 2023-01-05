
new Swiper('.excursion__slider-wrapper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  //centeredSlides: true,

  // Отступ между слайдами
  spaceBetween: 24,

  //slideClass: 'excursion-card',

  // Стартовый слайд
  initialSlide: 0,

  loop: true,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    400: {
      slidesPerView: 1.5,
    },
    480: {
      slidesPerView: 2.2,
    },

    600: {
      slidesPerView: 2.7
    },

    850: {
      slidesPerView: 3.2,
    },
    1200: {
      slidesPerView: 4.2,
    }
  }

});


// {
//
//   let mySwiper;
//
//   const swiperList = document.querySelectorAll('.excursion__slider-wrapper');
//
//   if (swiperList) createSwiper(swiperList);
//
//
//
//   function createSwiper (swiperList) {
//     swiperList.forEach(swiper => {
//
//       mySwiper = new Swiper(swiper, {
//         // pagination: {
//         //   el: '.swiper-pagination',
//         //   clickable: true,
//         // },
//         // navigation: {
//         //   nextEl: '.slider-nav__next',
//         //   prevEl: '.slider-nav__prev',
//         // },
//
//         // scrollbar: {
//         //   el: '.swiper-scrollbar',
//         //   draggable: true,
//         // },
//
//         uniqueNavElements: true,
//
//         slideClass: 'excursion-card',
//
//         //slidesPerView: 4,
//
//         // Бесконечная прокрутка
//         //loop: true,
//
//         // Откл функционала, если слайдов меньше, чем нужно
//         watchOverflow: true,
//
//         //centeredSlides: true,
//
//         // Отступ между слайдами
//         spaceBetween: 24,
//
//         // Стартовый слайд
//         //initialSlide: 0,
//
//         // Брейк поинты (адаптив)
//         // Ширина экрана
//         breakpoints: {
//           320: {
//             slidesPerView: 1.1,
//             spaceBetween: 16,
//           },
//
//           480: {
//             slidesPerView: 2.2,
//             spaceBetween: 20,
//           },
//
//           768: {
//             slidesPerView: 3.2
//           },
//
//           1100: {
//             slidesPerView: 4
//           },
//
//         }
//       });
//
//     })
//   };
//
//
//
//
//
//
//
//
//
//
// }
