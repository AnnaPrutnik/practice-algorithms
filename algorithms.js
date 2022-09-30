//Search algorithms

const array = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
let countLinear = 0;
let countBinary = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    countLinear += 1;
    if (array[i] === item) {
      return countLinear;
    }
  }
  return countLinear;
}

function binarySearch(array, item) {
  countBinary += 1;
  const middle = Math.floor(array.length / 2);
  const middleOfArray = array[middle];

  if (middleOfArray < item) {
    binarySearch(array.slice(middle), item);
  } else if (middleOfArray > item) {
    binarySearch(array.slice(0, middle), item);
  } else {
    return countBinary;
  }
}

linearSearch(array, 11);
binarySearch(array, 11);
console.log('linear Search did ', countLinear, ' operation');
console.log('binary Search did ', countBinary, ' operation');

//Sort algorithms

const array = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let countSelection = 0;
let countBubble = 0;

function selectionSort(array) {
  let minValue = null;
  for (let i = 0; i < array.length; i++) {
    minValue = array[i];
    for (let j = i + 1; j < array.length; j++) {
      countSelection += 1;
      if (array[j] < minValue) {
        minValue = array[j];
        array[j] = array[i];
        array[i] = minValue;
      }
      if (array[j] === minValue) {
        array[j] = array[i + 1];
        array[i + 1] = minValue;
      }
    }
  }

  return array;
}

// console.log(selectionSort(array));
// console.log(countSelection);
function BubbleSort(array) {
  console.log('in the beginning array: ', array);
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      countBubble += 1;
      if (array[j] > array[j + 1]) {
        let value = array[j];
        array[j] = array[j + 1];
        array[j + 1] = value;
      }
    }
  }
  return array;
}

console.log(BubbleSort(array));
console.log(countBubble);

//recursion
const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));

const fibonachi = (n) => {
  if (n <= 1) {
    return n;
  }

  return fibonachi(n - 1) + fibonachi(n - 2);
};

console.log(fibonachi(8));

const array = [78, 21, 14, 97, 87, 62, 74, 85, 76, 45, 84, 22];
const array1 = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];

let count = 0;

function fastSort(array) {
  count += 1;
  let less = [];
  let greater = [];
  let middle = [];

  const middleIndex = Math.floor(array.length / 2);
  const middleValue = array[middleIndex];
  if (array.length <= 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < middleValue) {
      less.push(array[i]);
    } else if (array[i] > middleValue) {
      greater.push(array[i]);
    } else {
      middle.push(array[i]);
    }
  }
  const lessSort = fastSort(less);
  const greaterSort = fastSort(greater);
  return [...lessSort, ...middle, ...greaterSort];
}

console.log(fastSort(array1));
console.log(count);
