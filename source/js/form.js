const form = document.querySelector("#ajax_form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const formButton = form.querySelector('#form-button');
  const object = {name: e.target.elements.name.value, email: e.target.elements.email.value};
  var formData = new FormData();
  formData.forEach(function(value, key){
    object[key] = value;
  });
  $.ajax({
    type: 'POST',
    url: 'send.php',
    data: object,
    success: function(data) {
      console.log(data);
      formButton.classList.add('form__button--success');
      formButton.textContent = 'Done!';
    },
    error: function(error) {
      console.error('Error:', error);
      let inner = form.createElement('div');
      inner.classList.add('form__error');
      inner.textContent = 'Error!';
    }
  })
});
