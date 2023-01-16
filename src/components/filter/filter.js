// Показать больше
const filter = document.querySelector('.filter');

const widthMobile = window.matchMedia('(max-width: 768px)').matches;

if (filter) {
  const showMore = filter.querySelector('.filter__tabs-item--more');

  let startItems;

  widthMobile ? startItems = 6 : startItems = 3;

  const filterItems = filter.querySelectorAll('.filter__tabs-item');
  const filterItemsLength = filterItems.length;

  showMore.addEventListener('click', () => {
    filterItems.forEach(el => el.classList.add('js-visible'));
    showMore.classList.add('hidden');
  })

  if (filterItemsLength < startItems + 1) showMore.classList.add('hidden');


  filterItems.forEach(filterItem => {
    filterItem.addEventListener('click', () => {

      filterItems.forEach(item => item.classList.remove('js-filter-tabs-active'))

      filterItem.classList.add('js-filter-tabs-active');
    })
  })

}


