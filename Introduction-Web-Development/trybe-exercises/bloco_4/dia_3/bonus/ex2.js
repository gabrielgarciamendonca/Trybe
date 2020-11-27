let numero = 18;
let counter = 0;

for(let index = 1; index <= numero; index += 1){
    if(numero % index == 0){
        counter += 1;
    }
}

if(counter == 2){
    console.log('O número: ', numero, ' é primo!');
}else{
    console.log('O número: ', numero, ' não é primo!');
}