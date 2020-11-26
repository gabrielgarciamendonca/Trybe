let salarioBruto = 7500.00;
let valorLiquido = salarioBruto;

//INSS
const aliquotaInss1 = 0.08 * salarioBruto;
const aliquotaInss2 = 0.09 * salarioBruto;
const aliquotaInss3 = 0.11 * salarioBruto;
const aliquotaInss4 = 570.88;

//Salario Mínimo
const salarioMinimo = 1045;


//Definir desconto.
if (salarioBruto >= salarioMinimo && salarioBruto <= 1556.94){
    valorLiquido -= aliquotaInss1;
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    valorLiquido -= aliquotaInss2;
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    valorLiquido -= aliquotaInss3;
}else if(salarioBruto > 5189.82){
    valorLiquido -= aliquotaInss4;
}else{
    console.log('Salário mínimo inválido.')
}

//IR
const aliquotaIR2 = 0.075 * valorLiquido - 142.80;
const aliquotaIR3 = 0.15 * valorLiquido - 254.80;
const aliquotaIR4 = 0.225 * valorLiquido - 636.13;
const aliquotaIR5 = 0.275 * valorLiquido - 869.36;


//Definir o salário liquido
if(valorLiquido<1903.98){
    
}else if(valorLiquido>=1903.99 && valorLiquido<=2826.65){
    valorLiquido -= aliquotaIR2;
}else if(valorLiquido>=2826.66 && valorLiquido<=3751.05){
    valorLiquido -= aliquotaIR3;
}else if(valorLiquido>=3751.06 && valorLiquido<=4664.68){
    valorLiquido -= aliquotaIR4
}else if(valorLiquido>4664.68){
    valorLiquido -= aliquotaIR5;
}else{

}

console.log('Salário Liquido: R$' + valorLiquido);