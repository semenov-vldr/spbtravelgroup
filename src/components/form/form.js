function openForm () {

    const form = document.querySelector('.form');

    const formExcursionName = form.querySelector('.form__excursion-name');

    const openFormBtns = document.querySelectorAll('.open-form'); // элементы с этим классом открывают форму'

    const close = form.querySelector('.form__close');
    close.addEventListener('click', hiddenForm);

    openFormBtns.forEach(openFormBtn => {
      openFormBtn.addEventListener('click', () => visibleForm(openFormBtn));
    });

    function hiddenForm () {
      form.classList.remove('js-form-active');
      form.reset();
      formExcursionName.textContent = '';
    };

    function visibleForm (openFormBtn) {
      form.classList.add('js-form-active');
      const titleSelectedCard = openFormBtn.closest('.excursion-card').querySelector('.excursion-card__title').textContent;
      formExcursionName.textContent = titleSelectedCard;
    };

    document.addEventListener('click', (evt) => {
      if(evt.target === form) hiddenForm();
    });
  };





