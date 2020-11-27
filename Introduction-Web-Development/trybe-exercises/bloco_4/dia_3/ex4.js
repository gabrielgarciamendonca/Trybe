let n = 120;
let spaces = (n - 1);

for(let index = 0; index < n - n*0.5; index += 1){
    let chars = '';
    for(let index1 = 0; index1 < n; index1 +=1){
        if(spaces % 2 == 0){
            if(index1 < spaces / 2 || index1 > (n - spaces / 2)-1){
                chars += ' ';
            }else{
                chars += '*';
            }
        }else{
            if (index1 < Math.floor((spaces / 2)) || index1 > (n - Math.floor((spaces / 2)))-1){
                chars += ' ';
            }else{
                chars += '*';
            }
            
        }
    }
    console.log(chars);
    if (spaces % 2 == 0){
        spaces -= 2;
    }else{
        spaces -= 3;
    }
}