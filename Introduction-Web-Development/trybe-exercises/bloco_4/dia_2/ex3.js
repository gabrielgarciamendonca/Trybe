let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let qtde = numbers.length;
let sum = 0;

for(let index = 0; index < qtde; index+=1){
    sum += numbers[index];
}

let average = sum / qtde;

console.log('A média é: ', average);