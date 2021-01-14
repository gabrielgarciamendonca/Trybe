let extract = (numero) => {
  return numero > 1 ? numero -= 1 : 1;
}

let factorial = (numero) => {
  let total = numero;
  while (numero > 1) {
    numero = extract(numero);
    total *= numero;
  };
  console.log(total);
}

factorial(7);