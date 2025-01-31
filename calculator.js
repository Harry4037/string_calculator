const add = (input) => {
  //return 0 if input is empty string
  if (input === "") return 0;

  //return the sum of numbers
  return input
    .split(",")
    .map((num) => parseInt(num))
    .reduce((total, num) => total + num);
};

module.exports = {
  add,
};
