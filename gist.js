const sumLargestNumbers = array => {
  let largestNumbers = [];
  let modifiedArray1 = [];
  let modifiedArray2 = [];

  if (array.length === 2) {
    largestNumbers.push(array[0]);
    largestNumbers.push(array[1]);
    return largestNumbers[0] + largestNumbers[1];
  }

  function largeNumberSearcher(elements, garbageArray, goodArray) {
    let largestNumberSoFar = elements[0];
    for (index = 1; index < elements.length; index ++) {
      if (elements[index] > largestNumberSoFar) {
        garbageArray.push(largestNumberSoFar);
        largestNumberSoFar = elements[index];
      } else {
        garbageArray.push(elements[index]);
      }
    }
    goodArray.push(largestNumberSoFar);
  }
  largeNumberSearcher(array, modifiedArray1, largestNumbers)
  largeNumberSearcher(modifiedArray1, modifiedArray2, largestNumbers);
  return (largestNumbers[0] + largestNumbers[1]);
}