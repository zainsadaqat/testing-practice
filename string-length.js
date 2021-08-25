const stringLength = (str) => {
  if (str.length > 1 && str.length < 10) {
    return str.length;
  } else {
    throw new Error('String length must be between 1 & 10');
  }
};

module.exports = stringLength;
