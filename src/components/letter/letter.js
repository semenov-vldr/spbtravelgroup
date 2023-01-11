const envlopeWrapper = document.querySelector('.envlope-wrapper');

if (envlopeWrapper) {

  const envelope = envlopeWrapper.querySelector('#envelope');
  const btnOpen = document.querySelector('#open');
  const btnReset = document.querySelector('#reset');



  envelope.addEventListener('click', open)
// btnOpen.addEventListener('click', open)
// btnReset.addEventListener('click', close)

  function open () {
    envelope.classList.remove('close');
    envelope.classList.add('open')
  }

  function close () {
    envelope.classList.remove('open')
    envelope.classList.add('close');
  }



}
