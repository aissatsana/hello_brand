document.querySelector("#ajax_form").addEventListener("submit", function(e) {
  e.preventDefault();
  var formData = new FormData(this);
  fetch('send.php', {
    method: 'POST',
    body:  formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Результат', data);
    });
});
