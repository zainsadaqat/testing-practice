const reverseString = (str) => {
  if (str) {
    return str.split('').reverse().join('');
  }
};

module.exports = reverseString;
