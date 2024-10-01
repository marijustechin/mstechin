function celsiusToFahrenheit(temp) {
  return temp * 1.8 + 32;
}

function compareBMI(person1, person2) {
  if (
    (person1.weight / person1.height) * 2 >
    (person2.weight / person2.height) * 2
  )
    return `${person1.name}'s BMI is higher than ${person2.name}'s BMI`;
  return `${person2.name}'s BMI is higher than ${person1.name}'s BMI`;
}

const john = {
  name: 'John',
  height: 185,
  wight: 70,
};

const mark = {
  name: 'Mark',
  height: 187,
  wight: 68,
};

const calcArea = (a, b, c) => {
  let p = (a + b + c) / 2; // Pusperimetris

  return Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
};

const showType = (whoami) => {
  console.log(typeof whoami);
};

const cbPrintLog = (number) => {
  console.log(`Call time: ${number}`);
};

const callNTimes = (number, cb) => {
  for (let i = 0; i < number; i++) {
    cb(i);
  }
};

const printReminder = (number1, number2) => {
  console.log(number1 % number2);
};

console.log(celsiusToFahrenheit(22));

console.log(compareBMI(john, mark));

console.log(calcArea(5, 6, 7));

showType(mark);

callNTimes(4, cbPrintLog);

printReminder(129, 17);
