const form = document.querySelector('.form');

const openFormBtns = document.querySelectorAll('.open-form'); // элементы с этим классом открывают форму

if (form && openFormBtns) {

  const close = form.querySelector('.form__close');
  close.addEventListener('click', closeForm);

  openFormBtns.forEach(openFormBtn => {
    openFormBtn.addEventListener('click', openForm)
  })

  function closeForm () {
    form.classList.remove('js-form-active');
  }

  function openForm () {
    form.classList.add('js-form-active');
  }

  document.addEventListener('click', (evt) => {
    if(evt.target === form) closeForm();
  })



}
