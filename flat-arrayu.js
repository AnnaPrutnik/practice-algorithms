const changeArray = (array) => {
  return array.reduce((acc, el) => {
    if (el === '') {
      acc.push(0);
    } else {
      el.split(',').forEach((number) => {
        if (Number(number)) {
          acc.push(Number(number));
        } else {
          const range = number.split('-').map((el) => Number(el));
          for (let i = range[0]; i <= range[1]; i++) {
            acc.push(i);
          }
        }
      });
    }
    return acc;
  }, []);
};

const array = ['1,2,3', '5,6,7-10', '12-16', ''];
const res = changeArray(array);
console.log(res);
