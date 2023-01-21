const gotTopButton = document.querySelector('.go-top');

if (gotTopButton) {

  gotTopButton.addEventListener('click', goTop);

  function goTop () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  };



  window.addEventListener('scroll', trackScroll);

  function trackScroll () {
    const offset = window.scrollY;
    const coords = document.documentElement.clientHeight;

    if (offset > coords) {
      gotTopButton.classList.add('js-scroll-show');
    } else {
      gotTopButton.classList.remove('js-scroll-show');
    }
  };

}
