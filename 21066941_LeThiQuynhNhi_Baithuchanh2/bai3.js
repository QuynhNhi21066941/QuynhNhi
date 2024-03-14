function checkInput(inputElement) {
  const inputValue = inputElement.value.trim();
  const inputLabel = inputElement.nextElementSibling;

  if (inputValue !== '') {
      inputLabel.classList.add('active');
  } else {
      inputLabel.classList.remove('active');
  }
}

function submitForm() {
  // Lấy giá trị từ các trường nhập liệu
  console.log('submitForm called');
  var nameInput = document.getElementById('name');
  console.log('nameInput:', nameInput);
  // Check if nameInput is null before accessing its value property
  if (nameInput !== null) {
      var name = nameInput.value.trim();
      // Rest of your code
  } else {
      console.log('Element with ID "name" not found');
  }

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var subject = document.getElementById('subject').value.trim();
  var message = document.getElementById('message').value.trim();

  // Kiểm tra xem các trường có rỗng không
  if (name === '' || email === '' || subject === '' || message === '') {
      alert('Vui lòng điền đầy đủ thông tin.');
  } else {
      // Hiển thị thông báo với thông tin nhập liệu
      alert('Họ và tên: ' + name + '\nE-mail: ' + email + '\nTiêu đề: ' + subject + '\nNội dung góp ý: ' + message);
  }
}
