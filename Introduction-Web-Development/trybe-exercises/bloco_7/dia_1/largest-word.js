let largestWord = (phrase) => {
  let words = phrase.split(' ');
  let max = 0;
  let word = "";
  for (let index = 0; index < words.length; index += 1) {
    let number = verifyLargest(words[index]);
    if (number > max) {
      max = number;
      word = words[index];
    }
  }
  return word;
};

let verifyLargest = (word) => {
  return word.length;
}

console.log(largestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));