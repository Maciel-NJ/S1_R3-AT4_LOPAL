
let valor = parseFloat(prompt("Digite o valor da compra (ou 0 para finalizar):"));  // Pede o primeiro valor da compra
let total = 0;


while (valor !== 0) {  // Enquanto o valor for diferente de 0, continua somando
  if (valor > 0) {  
    total += valor; // Soma ao total se for um valor positivo
  } else {
    alert("Valor inválido! Digite um número positivo ou 0 para finalizar.");
  }

  
  valor = parseFloat(prompt("Digite o valor da compra (ou 0 para finalizar):"));  // Pede o próximo valor
}


alert("Total da compra: R$ " + total.toFixed(2));  // Exibe o total da compra