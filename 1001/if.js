const isPositive = (number) => {
  return number > 0 ? true : false;
};

const isLandscape = (width, height) => {
  return width > height ? true : false;
};

const specifySign = (a, b, c) => {
  let prod = Number(a) * Number(b) * Number(c);

  if (prod < 0) {
    console.log(`${a} * ${b} * ${c} = ${prod} \n NEGATIVE`);
  } else if (prod === 0) {
    console.log(`${a} * ${b} * ${c} = ${prod} \n NEUTRAL`);
  } else {
    console.log(`${a} * ${b} * ${c} = ${prod} \n POSITIVE`);
  }
};

const checkIsArmsrong = (number) => {
  const a = number.toString().charAt(0);
  const b = number.toString().charAt(1);
  const c = number.toString().charAt(2);

  const armstrong = a ** 3 + b ** 3 + c ** 3;

  return armstrong === number
    ? `${number} is Armstrong`
    : `${number} is not Armstrong`;
};

const isMultipleOf = (n, d) => {
  return d % n === 0
    ? `${n} is multiple of ${d}`
    : `${n} is not multiple of ${d}`;
};




console.log(isPositive(-2));
console.log(isLandscape(120, 119));

specifySign(7, 8, 24);

console.log(checkIsArmsrong(371));

console.log(isMultipleOf(3, 15));
