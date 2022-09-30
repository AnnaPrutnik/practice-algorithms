// Task 1
//  increments string with number

function incrementString(str) {
  if (str === '') {
    return String(1);
  }
  const lastSymbolIndex = str.length - 1;
  const lastSymbol = str[lastSymbolIndex];
  const isLastSymbolNumber = isNaN(Number(lastSymbol));
  if (isLastSymbolNumber) {
    return str + 1;
  } else if (Number(lastSymbol) !== 9) {
    return str.slice(0, lastSymbolIndex) + (Number(lastSymbol) + 1);
  } else {
    let lastNumberInString = '';
    let i = lastSymbolIndex;

    while (!isNaN(Number(str[i]))) {
      lastNumberInString = str[i] + lastNumberInString;
      i--;
    }
    const newLastNumber = Number(lastNumberInString) + 1;
    return str.slice(0, str.length - lastNumberInString.length) + newLastNumber;
  }
}

console.log(incrementString('foobar000'));
console.log(incrementString('foo'));
console.log(incrementString('foobar001'));
console.log(incrementString('foobar99'));
console.log(incrementString('foobar099'));
console.log(incrementString('099'));
console.log(incrementString(''));

export default () => 'Hello world';
export const name = 'Hello world';

// Task 2
const squareDigits = (num) => {
  const str = num.toString();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = result + Math.pow(Number(str[i]), 2);
  }
  return result;
};

console.log(squareDigits(91));
console.log(squareDigits(0));
console.log(squareDigits(867));

// Task 3

function duplicateEncode(str) {
  return str
    .toLowerCase()
    .split('')
    .map((el, i, ar) => (ar.indexOf(el) === ar.lastIndexOf(el) ? '(' : ')'))
    .join('');
}

console.log(duplicateEncode('win')); // (((
console.log(duplicateEncode('receipt')); // ()()(((
console.log(duplicateEncode('Success')); // )())())
console.log(duplicateEncode('(( #')); // ))((

// Task 4

function checkBrackets(brackets) {
  const checkArray = [];
  const compareBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const startBrackets = Object.keys(compareBrackets);
  const endBrackets = Object.values(compareBrackets);
  for (let i = 0; i < brackets.length; i++) {
    const char = brackets[i];
    if (startBrackets.includes(char)) {
      checkArray.push(char);
    }
    if (endBrackets.includes(char)) {
      if (checkArray.length === 0) {
        return false;
      }
      const lastBracket = checkArray.pop();
      if (compareBrackets[lastBracket] !== char) {
        return false;
      }
    }
  }

  return true;
}

console.log(checkBrackets('[()]')); // true
console.log(checkBrackets('{[)]}')); // false
console.log(checkBrackets('(()')); // false
console.log(checkBrackets('[({()}[])]')); // true

// Task 5

function order(words) {
  if (words === '') {
    return words;
  }
  const result = [];
  words.split(' ').forEach((str) => {
    for (let char of str) {
      const position = Number(char);

      if (!isNaN(position)) {
        const index = str.indexOf(char);
        result[position - 1] =
          str.slice(0, index) + str.slice(index + 1, str.length);
      }
    }
  });

  return result.join(' ');
}

console.log(order('is2 Thi1s t4est 3a')); // This is a test
console.log(order('javaSc3ript 1I li2ke')); // I like javaScript
console.log(order('4like Lot1s panca5kes pe3ople o2f')); // Lots of people like pancakes
console.log(order('')); // ""
