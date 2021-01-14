const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let teste = () => {
  oddsAndEvens.sort((a, b) => a - b);
  return `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
}

console.log(teste());