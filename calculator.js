const add = (input) => {
  //return 0 if input is empty string
  if (input === "") return 0;

  //throw if non numeric number encontered
  const notNumbers = input.split(",").filter((num) => isNaN(parseInt(num)));
  if (notNumbers.length > 0) {
    throw new Error(`non numeric value not allowed: ${notNumbers.join(",")}`);
  }

  //return the sum of numbers
  return input
    .split(",")
    .map((num) => parseInt(num))
    .reduce((total, num) => total + num);
};

module.exports = {
  add,
};
