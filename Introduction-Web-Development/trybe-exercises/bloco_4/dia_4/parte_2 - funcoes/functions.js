function verificaPalindrome(text){
  let qtityOfOcurrences = 0;

  if(text.length % 2 !== 0){
    for (let char in text){
      if (text[char] === text[text.length - 1 - char]) {
        qtityOfOcurrences += 1;
      }
    }
    return qtityOfOcurrences === text.length;
  }else{

  }
}

function lowestIndex(arr){
  let menor = 0;
  let indexLower = 0;
  for (let index in arr) {
    if (index === 0) {
      menor = arr[index];
      indexLower = index;
    } else if (arr[index] < menor) {
      menor = arr[index];
      indexLower = index;
    }
  }
  return indexLower;
}

function higherIndex(arr){
  let maior = 0;
  let indexGreat = 0;
  for (let index in arr) {
    if(index === 0){
      maior = arr[index];
      indexGreat = index;
    }else if(arr[index] > maior){
      maior = arr[index];
      indexGreat = index;
    }
  }
  return indexGreat;
}

function biggestCharacter(names){
  let biggest = 0;
  let name;
  for (let index in names){
    if(index === 0){
      biggest = names[index].length;
      name = names[index];
    }else if(biggest < names[index].length){
      biggest = names[index].length;
      name = names[index];
    }
  }
  return name;
}

function moreRepeated(numbers){
  let repeat={
    number: 0,
    repeated: 0,
  };
  let count = 0;
  for(let index in numbers){
    for(let pos in numbers){
      if(numbers[index] === numbers[pos]){
        count += 1;
      }
    }
    if(index == 0){
      repeat.repeated = count;
      repeat.number = numbers[index];
    }else if(count > repeat.repeated){
      repeat.repeated = count;
      repeat.number = numbers[index];
    }
    count =0;
  }

  return repeat;
}

//hub
console.log(verificaPalindrome('luzazul'));
console.log(higherIndex([2, 3, 6, 7, 10, 1]));
console.log(lowestIndex([2, 4, 6, 7, 10, 0, -3]));
console.log(biggestCharacter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log(moreRepeated([2, 3, 2, 5, 8, 2, 3]));

