'use strict';

const longitude = '54.73178987669555';
const latitude = '25.287737011501807';

const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=690f02627269451c89fc1e1c6a139e32`;

fetch(API_URL)
  .then((res) => res.json())
  .then((json) => console.log(json));
