module.exports = function (str) {
  return str
    .trim()
    .toLowerCase()
    .split(/[\n\r]+/);
};
