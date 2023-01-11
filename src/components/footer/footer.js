const footer = document.querySelector('.footer');
const copyrightYear = footer.querySelector('.footer__copyright span');
copyrightYear.textContent = new Date().getFullYear();
