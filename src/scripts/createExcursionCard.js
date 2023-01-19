const cardTemplate = document.querySelector('#card').content.querySelector('.excursion-card');
const excursionGrid = document.querySelector('.excursion__grid'); // блок для вставки карточек
const photoListElement = document.querySelector('.excursion-card__image');
const photoListElementFragment = document.createDocumentFragment();



function createExcursionCard (item) {

  const cardItem = cardTemplate.cloneNode(true);

  // function isImage(src) {
  //   let resultCheck = true;
  //   let image = cardItem.querySelector('.excursion-card__image img');
  //   image.src = src;
  //   image.onerror = function () {
  //     resultCheck = false;
  //   };
  //   return resultCheck;
  // };


  if (!item.srcImg) {
    cardItem.querySelector('.excursion-card__image img').style.zIndex = '-1';
    cardItem.querySelector('.excursion-card__image').style.backgroundColor = 'antiquewhite';
  }


  cardItem.querySelector('.excursion-card__image img').src = item.srcImg;                   // Картинка
  cardItem.querySelector('.excursion-card__badge').textContent = item.duration;             // Продолжительность экскурсии
  cardItem.querySelector('.excursion-card__title').textContent = item.title;                // Заголовок
  cardItem.querySelector('.excursion-card__timetable-days').textContent = `${item.days}:`;  // Дни недели проведения экскурсии
  cardItem.querySelector('.excursion-card__timetable-time').textContent = item.time;        // Время проведения экскурсии
  cardItem.querySelector('.excursion-card__price span').textContent = `${item.price}₽`;     // Стоимость экскурсии
  cardItem.querySelector('.excursion-card__price a.button').href = item.link;               // Ссылка на экскурсию

  // Добавление пунктов описания (с галочкой)
  const descriptionList = cardItem.querySelector('.excursion-card__description-list');
  item.descriptionList.forEach(descriptionItem => {
    const li = document.createElement('li');
    li.classList.add('excursion-card__description-item');
    li.textContent = descriptionItem;
    descriptionList.appendChild(li);
  });

  if (excursionGrid) excursionGrid.appendChild(cardItem);



  return cardItem;

};
