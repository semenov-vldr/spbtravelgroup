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


  // scroll
  let previousPosition = document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    let currentPosition = document.documentElement.scrollTop;

    if (previousPosition > currentPosition || window.scrollY < 100) {
      header.classList.remove('js-scroll');
    } else {
      header.classList.add('js-scroll');
    }
    previousPosition = currentPosition;
  })

}
