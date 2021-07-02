const split = (str, delim) => {
  // write code for strings.split
  str = 'a-new-string'
  const newStr = str.split("-");
 return newStr
}

const pairs = (str) => {
  // write code for strings.pairs
 return str.match(/(..?)/g)
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split("").reverse().join("");
}

module.exports = {
  split,
  pairs,
  reverse
}