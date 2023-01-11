

new Swiper('.excursion__slider-wrapper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  //centeredSlides: true,

  // Отступ между слайдами
  spaceBetween: 24,

  //slideClass: 'excursion-card',

  // Стартовый слайд
  initialSlide: 0,

  //loop: true,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    400: {
      slidesPerView: 1.3,
    },

    500: {
      slidesPerView: 1.8,
    },

    700: {
      slidesPerView: 2.3,
    },

    1000: {
      slidesPerView: 3.2,
    },
    // 1200: {
    //   slidesPerView: 4.2,
    // }
  }

});


const footer = document.querySelector('.footer');
const copyrightYear = footer.querySelector('.footer__copyright span');
copyrightYear.textContent = new Date().getFullYear();

const header = document.querySelector('header.header');

if (header) {

  const headerBurger = header.querySelector('.header__burger');

  headerBurger.addEventListener('click', () => {
    header.classList.toggle('js-menu-open');
    toggleScrollBody();
  })

  const navItems = header.querySelectorAll('.header__nav-item');

  navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {
      navItem.classList.toggle('js-subnav-open');
    });

    const subnav = navItem.querySelector('.header__subnav');
    (!subnav) ? navItem.classList.add('empty') : navItem.classList.remove('empty');
  })

}

// Params
let mainSliderSelector = '.main-slider';

// Main Slider
let mainSliderOptions = {
  loop: true,
  speed: 1000,

  parallax: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loopAdditionalSlides: 10,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    // init: function(){
    //   this.autoplay.stop();
    // },
    imagesReady: function(){
      this.el.classList.remove('loading');
      this.autoplay.start();
    },
  }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);



const main = document.querySelector('main');
if (main) {
  const heroIndex = main.querySelector('.hero-index');
  if (heroIndex) {
    const header = document.querySelector('.header');
    main.style.paddingTop = header.offsetHeight + 'px';

    window.addEventListener('resize', () => {
      main.style.paddingTop = header.offsetHeight + 'px';
    })
  }
}


const envlopeWrapper = document.querySelector('.envlope-wrapper');

if (envlopeWrapper) {

  const envelope = envlopeWrapper.querySelector('#envelope');
  const btnOpen = document.querySelector('#open');
  const btnReset = document.querySelector('#reset');



  envelope.addEventListener('click', open)
// btnOpen.addEventListener('click', open)
// btnReset.addEventListener('click', close)

  function open () {
    envelope.classList.remove('close');
    envelope.classList.add('open')
  }

  function close () {
    envelope.classList.remove('open')
    envelope.classList.add('close');
  }



}

{

  let mySwiper;

  const swiperList = document.querySelectorAll('.transport-service__content');

  //if (swiperList) createSwiper(swiperList);



  function createSwiper (swiperList) {
    swiperList.forEach(swiper => {

      mySwiper = new Swiper(swiper, {
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: '.slider-nav__next',
        //   prevEl: '.slider-nav__prev',
        // },

        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   draggable: true,
        // },

        uniqueNavElements: true,

        slideClass: 'transport-service__item',

        //slidesPerView: 4,

        // Бесконечная прокрутка
        //loop: true,

        // Откл функционала, если слайдов меньше, чем нужно
        watchOverflow: true,

        //centeredSlides: true,

        // Отступ между слайдами
        spaceBetween: 24,

        // Стартовый слайд
        initialSlide: 0,

        // Брейк поинты (адаптив)
        // Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1.1,
            spaceBetween: 16,
          },

          480: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 3.2
          },

          1100: {
            slidesPerView: 4
          },

        }
      });

    })
  };










}


const html = document.querySelector('html');

const classBlockScroll = 'js-blockScroll';


function blockScrollBody () {
  if ( !html.classList.contains(classBlockScroll) ) {
    html.classList.add(classBlockScroll);
  }
};

function unblockScrollBody () {
  if ( html.classList.contains(classBlockScroll) ) {
    html.classList.remove(classBlockScroll);
  }
};

function toggleScrollBody () {
  html.classList.toggle(classBlockScroll);
};
