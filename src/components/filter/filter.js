
const filter = document.querySelector('.filter');

const widthMobile = window.matchMedia('(max-width: 768px)').matches;

if (filter) {

  // Показать больше
  const showMore = filter.querySelector('.filter__tabs-item--more');

  let startItems;

  widthMobile ? startItems = 6 : startItems = 3;

  const filterItems = filter.querySelectorAll('.filter__tabs-item');
  const filterItemsLength = filterItems.length;

  showMore.addEventListener('click', () => {
    filterItems.forEach(el => el.classList.add('js-visible'));
    showMore.classList.add('hidden');
  });

  if (filterItemsLength < startItems + 1) showMore.classList.add('hidden');




  filterItems.forEach(filterItem => {
    filterItem.addEventListener('click', () => {
      filterItems.forEach(item => item.classList.remove('js-filter-tabs-active'))
      filterItem.classList.add('js-filter-tabs-active');
    })
  });



  // Все теги
  const filterBottomItemAllTags = filter.querySelector('.filter__bottom-item--all-tags');

  filterBottomItemAllTags.addEventListener('click', () => {
    filterBottomItemAllTags.classList.toggle('js-all-tags-active');
  });

  const closeAllTags = filter.querySelector('.filter__all-tags-close');
  closeAllTags.addEventListener('click', () => {
    filterBottomItemAllTags.classList.remove('js-all-tags-active');
  });


}


