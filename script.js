document.getElementById('check').addEventListener('click', checker)

function checker () {
  let integer = document.getElementById('integer').value;
  integer = parseInt(integer)
  if (integer > 0) {
    document.getElementById('result').innerHTML = "Your Number is Positive!"
  } else if (integer < 0) {
    document.getElementById('result').innerHTML = "Your Number is Negative!"
  } else {
    document.getElementById('result').innerHTML = "Your number is neither positive or negative"
  }
}
