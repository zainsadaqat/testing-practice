const capitalize = (str) => {
  str = str && str.split(' ');
  str =
    str &&
    str.map((s) => {
      let str1 = s.split('');
      str1[0] = str1[0].toUpperCase();
      str1.join('');
      return str1;
    });
  str = str && str.join(',');
  str = str.split(',').join('');
  return str;
};

module.exports = capitalize;
