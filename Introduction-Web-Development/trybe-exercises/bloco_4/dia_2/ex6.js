let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let qtityOfOdd = 0;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 != 0){
        qtityOfOdd += 1;
    }
}

if(qtityOfOdd == 0){
    console.log('Nenhum valor impar encontrado');
}else{
    console.log('A quantidade de valores impares são: ', qtityOfOdd);
}