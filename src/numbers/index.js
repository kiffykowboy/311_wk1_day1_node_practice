const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0){
    return true
  }
else {return false}
}

const sum = (arr) => {
  // write code for numbers.sum
  let sum = arr.reduce((a,b) => a + b, 0)
  return sum
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let inner = arr.concat(arr[0]);
  for (let i = 0, {length} = inner; i < length; i++) {
    for (let j = i + 1, {length} = inner; j < length; j++) {
      if (inner[i] + inner[j] === sum) return true;
    }
  }
  return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}