const $form  = document.querySelector('form');
const $input = document.querySelector('input');

const host = 'https://2aa1-177-152-99-138.ngrok-free.app'

$form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const number = $input.value

  if (!number) {
    alert('Tá tentando me enganar?');
    return
  }

  const response = await fetch(`${host}/alianca/${number}`)

  if (number) {
    alert('A UNIMar agradece kkkkkkkkkkkkkkkkkkkkkk');
  }
});