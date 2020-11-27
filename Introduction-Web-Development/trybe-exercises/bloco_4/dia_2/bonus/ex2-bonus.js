let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){
    for (let position = 0; position < index; position += 1){
        if(numbers[position] < numbers[index]){
            let oldPosition = numbers[position];
            numbers[position] = numbers[index];
            numbers[index] = oldPosition;
        }
    }
}

console.log(numbers.join(', '))