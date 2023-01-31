document.querySelector("#ajax_form").addEventListener("submit", function(e) {
  e.preventDefault();
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
    },
    error: function(error) {
      console.error('Error:', error);
    }
  })
});
