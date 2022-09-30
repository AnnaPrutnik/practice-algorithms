function fib(n) {
  console.log(n);
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// console.log(fib(3)); // 2
console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

// 7=> fb(6) => ? + fb(5) => ? => ?
//6=> fb(5) => ? + fb(4) => ? => ?
//5 =>

function findLongestWord(string) {
  const array = string.split(' ');

  return array.reduce((acc, word) => {
    return word.length > acc.length ? word : acc;
  }, '');
}

const example =
  'The article explains what rapport is and why it is important. You will also learn 27 tips on how to build customer rapport, along with some pieces of advice based on real-life situations';

const result = findLongestWord(example);
console.log(result);

function isUnique(string) {
  //resolve 1
  // for (let i = 0; i < string.length; i++) {
  //   const char = string[i];
  //   if (string.lastIndexOf(char) !== i) {
  //     return false;
  //   }
  // }
  // return true;

  //resole 2
  // const set = new Set();
  // for (let i = 0; i < string.length; i++) {
  //   const char = string[i];
  //   if (set.has(char)) {
  //     return false;
  //   }
  //   set.add(char);
  // }
  // return true;

  //resole 3
  // return string
  //   .split('')
  //   .sort()
  //   .every((el, index, arr) => {
  //     return el !== arr[index + 1];
  //   });

  //resole 4
  const set = new Set(string);
  return set.size === string.length;
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abcadef')); // -> false

function flatten(array) {
  // todo
  // const newArray = array.flat(1);
  // const isArrayIncludes = newArray.find((el) => Array.isArray(el));
  // if (isArrayIncludes) {
  //   return flatten(newArray);
  // }
  // return newArray;

  let res = [];
  array.forEach((el) => {
    if (Array.isArray(el)) {
      const subRes = flatten(el);
      res = [...res, ...subRes];
    } else {
      res.push(el);
    }
  });
  return res;
}

console.log(flatten([[1], [[2, 3]], [[[[[4]]]]]])); // -> [1, 2, 3, 4]

function removeDupes(str) {
  // return str
  //   .split('')
  //   .reduce((acc, el, index, array) => {
  //     return array.indexOf(el) === index ? [...acc, el] : acc;
  //   }, [])
  //   .join('');
  const set = new Set(str);

  // const newStr = [];
  // set.forEach((el) => newStr.push(el));
  // return newStr.join('')
  return Array.from(set).join('');
}

console.log(removeDupes('abcd')); // -> 'abcd'
console.log(removeDupes('aabbccdd')); // -> 'abcd'
console.log(removeDupes('abcddbca')); // -> 'abcd'
console.log(removeDupes('abababcdcdcd')); // -> 'abcd'

function highestFrequency(array) {
  const res = {};
  array.forEach((el, index, array) =>
    array.indexOf(el) === index ? (res[el] = 1) : res[el]++
  );
  const res1 = Object.entries(res).reduce(
    (acc, el) => {
      return acc[1] < el[1] ? el : acc;
    },
    ['', 0]
  );

  return res1[0];
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
console.log(highestFrequency(['abc', 'def'])); // -> abc
console.log(
  highestFrequency([
    'abc',
    'abc',
    'def',
    'def',
    'def',
    'ghi',
    'ghi',
    'ghi',
    'ghi',
  ])
); // -> ghi

function isStringRotated(source, test) {
  // if (source.length !== test.length) {
  //   return false;
  // }
  // for (let i = 0; i < source.length; i++) {
  //   const rotateStr = source.slice(i, source.length) + source.slice(0, i);
  //   console.log(rotateStr);
  //   if (rotateStr === test) {
  //     return true;
  //   }
  // }

  // return false;

  return (source + source).includes(test) && source.length === test.length;
}

console.log(isStringRotated('javascript', 'scriptjava')); // -> true
console.log(isStringRotated('javascript', 'iptjavascr')); // -> true
console.log(isStringRotated('javascript', 'java')); // -> false

function arraySubset(source, subset) {
  if (source.length < subset.length) {
    return false;
  }

  for (let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i]);
    if (index === -1) {
      return false;
    }
    source.splice(index, 1);
  }

  return true;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false

function allAnagrams(array) {
  const newArray = array.map((el) =>
    el.toLowerCase().split('').sort().join('')
  );
  for (let i = 0; i < newArray.length - 1; i++) {
    if (newArray[i] !== newArray[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])); // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])); // false

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function rotate(source) {
  const newMatrix = new Array(source.length);
  newMatrix.fill([]);
  source.forEach((el) => {
    el.forEach((subEl, indexCol) => {
      newMatrix[indexCol] = [subEl, ...newMatrix[indexCol]];
    });
  });
  return newMatrix;
}

function rotate180(array) {
  return rotate(rotate(array));
}

function rotate270(array) {
  return rotate(rotate180(array));
}

function rotate360(array) {
  return rotate(rotate270(array));
}

console.log(rotate(matrix));
console.log(rotate180(matrix));
console.log(rotate270(matrix));
console.log(rotate360(matrix));

function search(array, target) {
  // todo
  const start = 0;
  const end = array.length;

  if (target < array[start] || target > array[end]) {
    return -1;
  }

  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return i;
    }
    if (target < array[i]) {
      return -1;
    }
  }
  return -1;
}

console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
console.log(search([1, 3, 6, 13, 17], 12)); // -> -1

function isBalanced(string) {
  const start = '{[(';
  const end = '}])';
  const queue = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (start.includes(char)) {
      queue.push(char);
    }
    if (end.includes(char)) {
      if (queue.length === 0) {
        return false;
      }
      const last = queue.pop();
      if (start.indexOf(last) !== end.indexOf(char)) {
        return false;
      }
    }
  }

  if (queue.length > 0) {
    return false;
  }

  return true;
}

console.log(isBalanced('(x + y) - (4)')); // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')); // -> true
console.log(isBalanced('[{()}]')); // -> true
console.log(isBalanced('(50)(')); // -> false
console.log(isBalanced('[{]}')); // -> false


// // lecture Vladlen Minin

// //Linked List

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(data) {
//     const node = new Node(data);
//     if (this.tail) {
//       this.tail.next = node;
//     }

//     if (!this.head) {
//       this.head = node;
//     }
//     this.tail = node;
//   }

//   prepend(data) {
//     const node = new Node(data, this.head);
//     this.head = node;
//     if (!this.tail) {
//       this.tail = node;
//     }
//   }

//   insertAfter(after, data) {
//     const found = this.find(after);
//     if (!found) {
//       return null;
//     }

//     const node = new Node(data, found.next);
//     found.next = node;
//   }

//   toArray() {
//     const output = [];
//     let current = this.head;
//     while (current) {
//       output.push(current.data);
//       current = current.next;
//     }
//     return output;
//   }

//   find(data) {
//     if (!this.head) {
//       return null;
//     }
//     let current = this.head;
//     while (current) {
//       if (current.data === data) {
//         return current;
//       }
//       current = current.next;
//     }
//     return null;
//   }

//   remove(data) {
//     if (!this.head) {
//       return null;
//     }
//     let current = this.head;
//     if (this.head.data === data) {
//       this.head = this.head.next;
//     }

//     while (current) {
//       if (current.next?.data === data) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }
//   }
// }

// const list = new LinkedList();

// list.append('Boo');
// list.append('My');
// list.append('Name');
// list.prepend('Hi');
// list.append('Slim');
// list.append('Shady');
// // console.log(list);
// // const array = list.toArray();
// // console.log(array);
// // const find = list.find('By');
// // console.log(find);
// list.insertAfter('Boo', 'Bla');
// list.remove('Bla');
// console.log(list);

const title = document.getElementById('working_time');

const btn =
  document.getElementById('gform_submit_button_4') ||
  document.getElementById('gform_submit_button_2');

btn.addEventListener('click', () => {
  title.classList.add('bbb');
});
