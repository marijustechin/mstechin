'use strict';

const DISTANCE_OF_TUNNEL = 0.264;

const speed = document.getElementById('autoSpeed');
const travel = document.getElementById('travelTime');
const btn = document.getElementById('submit');
const btnHideUnhide = document.getElementById('hideShow');
const divTarget = document.getElementById('hidden-unhidden');

const info = document.getElementById('info');

function showTime(e) {
  e.preventDefault();
  travel.innerHTML = ((DISTANCE / speed.value) * 3600).toFixed(2);
}

function hideUnhideDiv(e) {
  e.preventDefault();

  if (divTarget.classList.contains('hidden')) {
    divTarget.classList.remove('hidden');
    btnHideUnhide.innerHTML = 'Slėpti';
    info.innerHTML =
      'Norėdami paslėpti raudoną div, paspauskite "Slėpti" mygtiką';
  } else {
    divTarget.classList.add('hidden');
    btnHideUnhide.innerHTML = 'Rodyti';
    info.innerHTML =
      'Norėdami pamatyti raudoną div, paspauskite "Rodyti" mygtiką';
  }
}

btn.addEventListener('click', showTime);
btnHideUnhide.addEventListener('click', hideUnhideDiv);
