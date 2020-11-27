let n = 11;
let spaces = n - 1;

for(let index = 0; index < n; index += 1){
    let chars = '';
    for(let index1 = 0; index1 < n; index1 += 1){
        if(index1 < spaces){
            chars += ' ';
        }else{
            chars += '*';
        }
    }
    console.log(chars);
    spaces -= 1;
}