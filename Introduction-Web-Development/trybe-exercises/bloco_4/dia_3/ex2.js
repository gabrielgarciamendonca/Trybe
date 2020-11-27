let n = 8;
let spaces = 1;

for(let index = 0; index < n; index += 1){
    let chars = '';
    for(let index1 = 0; index1 < n; index1 += 1){
        if(index1 < spaces){
            chars = chars + '*';
        }else{
            chars = chars + ' ';
        }
    }
    console.log(chars);
    spaces += 1;
}