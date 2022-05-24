const separateString = (str) => {
  const [, prefix, number] = str.match(/(.+?)(\d+$)/);
  console.log(prefix, number);
};

console.log(separateString('foobar000'));
console.log(separateString('foo'));
console.log(separateString('foobar001'));
console.log(separateString('foobar99'));
console.log(separateString('foobar099'));
console.log(separateString('099'));
console.log(separateString(''));
