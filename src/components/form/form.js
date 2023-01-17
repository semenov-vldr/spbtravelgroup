{

  const form = document.querySelector('.form');

  const openFormBtns = document.querySelectorAll('.open-form'); // элементы с этим классом открывают форму

  if (form && openFormBtns) openForm(form, openFormBtns);

  function openForm (form, openFormBtns) {
    const close = form.querySelector('.form__close');
    close.addEventListener('click', hiddenForm);

    openFormBtns.forEach(openFormBtn => {
      openFormBtn.addEventListener('click', visibleForm)
    })

    function hiddenForm () {
      form.classList.remove('js-form-active');
      form.reset();
    }

    function visibleForm () {
      form.classList.add('js-form-active');
    }

    document.addEventListener('click', (evt) => {
      if(evt.target === form) hiddenForm();
    })
  };


}



