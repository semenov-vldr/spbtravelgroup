const API_URL = "./assets/json/allExcursionCards.json";

function getExcursionCards () {
  return fetch(API_URL)
    .then(responce => responce.json())
    .then(cards => cards)
    .catch(() => console.log('Ошибка при загрузке данных'));
};



getExcursionCards().then(cards => {
  cards.forEach(card => createExcursionCard(card));
}).then(() => openForm());
