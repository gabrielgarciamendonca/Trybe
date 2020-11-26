let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 1; index < numbers.length; index += 1){
    for(let position = 0; position < index; position += 1){
        if(numbers[index] > numbers[position]){
            let oldPositon = numbers[index];
            numbers[index] = numbers[position];
            numbers[position] = oldPositon;
        }
    }
}
console.log(numbers.join(','))
