const add = (input) => {
  //return 0 if input is empty string
  if (input === "") return 0;

  if (input.startsWith("//")) {
    const indexofDelimeterSectionEnd = input.indexOf("\n");
    const delimeter = input.slice(2, indexofDelimeterSectionEnd);
    const inputStr = input.slice(indexofDelimeterSectionEnd + 1);

    return sum(inputStr, delimeter);
  }

  return sum(input, /[\n,]/);
};

function sum(input, delimeter) {
  //filtered non numeric numbers
  const notNumbers = input
    .split(delimeter)
    .filter((num) => isNaN(parseInt(num)));
  if (notNumbers.length > 0) {
    //throw erro if non numeric number encontered
    throw new Error(`non numeric value not allowed: ${notNumbers.join(",")}`);
  }

  //filtered negative numbers
  const negativeNumbers = input.split(delimeter).filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    //throw error if negative number encontered
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  //return the sum of numbers
  return input
    .split(delimeter)
    .map((num) => parseInt(num))
    .reduce((total, num) => total + num);
}

module.exports = {
  add,
};
