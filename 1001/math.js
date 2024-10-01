const numberArray = [2, 5, 9, 7, 5, 3, 7, 21, 56];

const maxNumber = (numbers) => {
  let temp;
  for (const number of numbers) {
    if (temp) {
      if (temp < number) temp = number;
    } else {
      temp = number;
    }
  }

  return temp;
};

const countDigits = (number) => {
  return number.toString().length;
};

const genRandom = (min, max) => {
  if (max === 1) return Math.random().toFixed(2);

  return (Math.random() * (max - min) + min).toFixed(0);
};

const isPowerOfTwo = (number) => {
  let tempNumber = 0;
  let i = 0;
  let answer = false;
  while (tempNumber <= number) {
    tempNumber = 2 ** i;
    if (tempNumber === number) answer = true;
    ++i;
  }
  return answer;
};

console.log(maxNumber(numberArray));

console.log(countDigits(12456));

console.log(genRandom(0, 1));
console.log(genRandom(0, 100));
console.log(genRandom(5, 20));

console.log(isPowerOfTwo(4));
