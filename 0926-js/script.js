'use strict';

const button = document.getElementById('submitButton');
const name = document.getElementById('userName');
const email = document.getElementById('userEmail');
const terms = document.getElementById('terms');
const resultName = document.getElementById('name');
const resultEmail = document.getElementById('email');
const resultAgreement = document.getElementById('agreement');

function showData(e) {
  e.preventDefault();
  resultName.innerHTML = name.value;
  resultEmail.innerHTML = email.value;
  resultAgreement.innerHTML = terms.value;
}

function setValue(e) {
  e.preventDefault();

  if (e.currentTarget.checked) {
    terms.value = 'Taip';
  } else {
    terms.value = 'Ne';
  }
}

button.addEventListener('click', showData);
terms.addEventListener('change', setValue);
