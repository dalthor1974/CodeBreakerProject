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
    if (getResult(input.value)) {
      setMessage('You Win! :)');
    } else if (attempt.value >= 10) {
      setMessage('You Lose! :(');
    } else {
      setMessage('Incorrect, try again.');
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

function getResult(number) {
  let code = '', test = number.split(''), correct = answer.value.split(''), count = 0;
  for (let i = 0; i < 4; i++) {
    if (test[i] == correct[i]) {
      code += '<span class="glyphicon glyphicon-ok"></span>';
      count++;
    } else {
      let found = false;
      for (let j = 0; j < 4; j++) {
        if (correct[j] == test[i]) {
          found = true;
        }
      }
      code += found ? '<span class="glyphicon glyphicon-transfer"></span>' : '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  let results = document.getElementById('results');
  results.innerHTML += '<div class="row"><span class="col-md-6">' + number + '</span><div class="col-md-6">' + code + '</div></div>';
  return count == 4;
}
