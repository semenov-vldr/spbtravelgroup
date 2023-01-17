{

  const form = document.querySelector('.form');

  if (form) {
    form.addEventListener('submit', sendMsgTelegram );
  }


  const TOKEN = "5732348131:AAEbsunpaRPrWO8jc7tO_UCcSNOEDLWTqyw";
  const CHAT_ID = "-623808828";
  const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;




  function sendMsgTelegram (evt) {
    evt.preventDefault();

    let message = `<b>Заявка с сайта SPB</b>\n`;

    message += `<b>Имя отправителя</b> ${ this.name.value }\n`;
    message += `<b>Дата</b> ${ this.date.value }\n`;
    message += `<b>Время</b> ${ this.time.value }\n`;
    message += `<b>Формат</b> ${ this.querySelector('.form__input-format').value }\n`;
    message += `<b>Кол-во чел</b> ${ this.querySelector('.form__input-count-people').value }\n`;
    message += `<b>Телефон</b> ${ this.phone.value }\n`;
    message += `<b>Почта</b> ${ this.email.value }\n`;
    message += `<b>Сообщение</b> ${ this.message.value }\n`;


    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
      .then((res) => {
        this.name.value = "";
        this.email.value = "";
        console.log('Заявка успешно отправлена');
      })
      .catch((err) => {
        console.warn(err)
      })
      .finally(() => {
        console.log('Конец');
      })
  };



}
