const DOMAIN = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', mainApp);

function mainApp() {
  fetch(`${DOMAIN}/api/appversion`)
    .then(res => res.json())
    .then((result) => {
      let version = result.version;
      let elem = document.getElementById('appversion');
      elem.innerHTML = version;
    });

  let form = document.getElementById('comment-form');
  form.addEventListener('submit', onSubmitForm);
}

function onSubmitForm(event) {
  event.preventDefault();

  let input = document.getElementById('comment-input');
  let val = input.value.trim();
  input.value = '';

  if (val) {
    let payload = {
      comment: val,
    };

    fetch(`${DOMAIN}/api/storecomment`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
}
