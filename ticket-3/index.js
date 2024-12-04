function countNumberOfNinesInNumber(number) {
  let count = 0;
  let numberString = number.toString();

  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString[i];
    console.log(digit);
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}
