let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer.value == '' || attempt.value == '') setHiddenFields();
    if (!validateInput(input.value)) {
      return false;
    } else {
      attempt.value++;
    }
}

function setHiddenFields() {
  let number = Math.floor(Math.random() * 10000).toString();
  while (number.length < 4) {
    number = '0' + number;
  }
  answer.value = number;
  attempt.value = 0;
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(number) {
  if (number.length == 4) {
    return true;
  } else {
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
}
