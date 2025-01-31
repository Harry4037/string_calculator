const add = (input) => {
  //return 0 if input is empty string
  if (input === "") return 0;

  if (input.startsWith("//")) {
    const indexofDelimeterSectionEnd = input.indexOf("\n");
    const delimeter = input.slice(2, indexofDelimeterSectionEnd);
    const inputStr = input.slice(indexofDelimeterSectionEnd + 1);

    return sum(inputStr, delimeter);
  }

  //throw if non numeric number encontered
  const notNumbers = input.split(/[\n,]/).filter((num) => isNaN(parseInt(num)));
  if (notNumbers.length > 0) {
    throw new Error(`non numeric value not allowed: ${notNumbers.join(",")}`);
  }

  return sum(input, /[\n,]/);
};

function sum(input, delimeter) {
  //return the sum of numbers
  return input
    .split(delimeter)
    .map((num) => parseInt(num))
    .reduce((total, num) => total + num);
}

module.exports = {
  add,
};
