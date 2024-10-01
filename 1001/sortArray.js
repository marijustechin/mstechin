/**
 *
 * @param {*} arrayOfNumbers skaičių
 * @returns arrayOfNumbers sorted
 */
const sortNumbersAsc = (arrayOfNumbers) => {
  for (let i = arrayOfNumbers.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // jei pirmasis sk didesnis už kaimyną
      if (arrayOfNumbers[j] > arrayOfNumbers[j + 1]) {
        // laikinai išsaugome pirmąjį sk
        let temp = arrayOfNumbers[j];
        // į pirmojo vietą įrašome kaimyną
        arrayOfNumbers[j] = arrayOfNumbers[j + 1];
        // į kaimyno vietą įrašome pirmąjį sk
        arrayOfNumbers[j + 1] = temp;
      }
    }
  }

  return arrayOfNumbers;
};

/**
 * 
 */
const sortNumbersDesc = (arrayOfNumbers) => {
  for (let i = arrayOfNumbers.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // jei pirmasis sk mažesnis už kaimyną
      if (arrayOfNumbers[j] < arrayOfNumbers[j + 1]) {
        // laikinai išsaugome pirmąjį sk
        let temp = arrayOfNumbers[j + 1];
        // į pirmojo vietą įrašome kaimyną
        arrayOfNumbers[j + 1] = arrayOfNumbers[j];
        // į kaimyno vietą įrašome pirmąjį sk
        arrayOfNumbers[j] = temp;
      }
    }
  }

  return arrayOfNumbers;
};

const arr = [2, 8, 9, 4, 6, 58, 98, 74, 12, 36];

console.log(sortNumbersAsc(arr));
console.log(sortNumbersDesc(arr));
