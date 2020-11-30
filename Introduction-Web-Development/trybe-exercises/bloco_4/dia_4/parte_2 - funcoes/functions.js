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


//hub
console.log(verificaPalindrome('luzazul'));

