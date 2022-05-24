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

// Task 2
