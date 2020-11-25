let custo = 10;
let venda = 20;
let qtde = 1000;

if(!(custo == 0||venda ==0 ||qtde == 0)){
    let valorLucro = venda * qtde - (1.2 * custo * qtde);
    console.log('O valor total é: R$'+valorLucro);
}

