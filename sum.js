const sumLargestNumbers = function(data) {
  let largest = data[0];
  let large = data [1];

  if(largest > large) {
    largest = data[0];
    large = data[1];
  } else {
    large = data[0];
    largest = data[1];
  }

  for(let i = 2; i < data.length; i++){
    if(data[i] > largest) {
      large = largest;
      largest = data[i];
    }
  }
  return largest + large;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));