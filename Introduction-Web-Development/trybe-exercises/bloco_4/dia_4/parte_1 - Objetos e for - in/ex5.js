let info = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

let info2 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

for (let key in info) {
  if(info[key] === info2[key]){
    console.log('Ambos', key + 's');
  }else{
    console.log(info2[key], 'e', info[key]);
  }
}