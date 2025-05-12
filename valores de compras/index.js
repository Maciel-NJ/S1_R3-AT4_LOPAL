
let valor = parseFloat(prompt("Digite o valor da compra (ou 0 para finalizar):"));  // pede o 1° valor de compra
let total = 0;


while (valor !== 0) {  // enquanto o valor for diferente de 0 ele continuará somando
  if (valor > 0) {  
    total += valor; // se for um valor positivo somará ao total
  } else {
    alert("Valor inválido! Digite um número positivo ou 0 para finalizar.");
  }

  
  valor = parseFloat(prompt("Digite o valor da compra (ou 0 para finalizar):"));  // pede o próximo valor
}


alert("Total da compra: R$ " + total.toFixed(2));  // mostra o total da compra
