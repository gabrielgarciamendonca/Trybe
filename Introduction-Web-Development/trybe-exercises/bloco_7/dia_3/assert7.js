const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (wordsVar) => {
  let newArr = [];
  for (let index = 0; index < wordsVar.length; index += 1) {
    newArr.push(0);
    for (let jindex = 0; jindex < wordsVar[index].length; jindex += 1) {
      newArr[index] += 1;
    }
  }
  return newArr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);