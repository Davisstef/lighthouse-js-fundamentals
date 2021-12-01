const isDivisible = function(numerator, denominator) {
  return numerator % denominator === 0;
};

const loopyLighthouse = function(range, multiples, words) {
  let[count, end] = range;
  let [multiple1, multiple2] = multiples;
  let [wordForMultiple1, wordForMultiple2] = words;
  while (count <= end) {
    if (isDivisible(count, multiple1) && isDivisible(count, multiple2)) {
      console.log(wordForMultiple1 + wordForMultiple2);
    } else if (isDivisible(count, multiple1)) {
      console.log(wordForMultiple1);
    } else if (isDivisible(count, multiple2)) {
      console.log(wordForMultiple2);
    } else {
      console.log(count);
    }
    count++;
  }
};

let number = 100;
while (number <= 200) {
  if (number % 3 === 0 && number % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (number % 4 === 0) {
    console.log('Lighthouse');
  } else if (number % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(number);
  }
  number ++
}