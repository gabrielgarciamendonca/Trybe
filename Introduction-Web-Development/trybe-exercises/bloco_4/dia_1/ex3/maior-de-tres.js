let num1 = 5;
let num2 = 5;
let num3 = 1;

if (num1 > num2 && num1 > num3) {
    console.log('O maior é: ' + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log('O maior é: ' + num2);
} else if(num3 > num1 && num3 > num2){
    console.log('O maior é: ' + num3);
}else{
    console.log('Não á um maior dos três.');
}