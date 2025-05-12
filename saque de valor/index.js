
let saldo = 100; // Define o saldo inicial da conta, pode trocar esse valor por qualquer outro


while (saldo > 0) {   // Enquanto houver saldo positivo, permite saques
  
  let saque = parseFloat(prompt("Seu saldo é R$ " + saldo + ". Digite o valor do saque:"));  // Mostra o saldo atual e pede o valor do saque

  
  if (saque <= saldo && saque > 0) {     // Verifica se o saque é possível
    saldo = saldo - saque; // Atualiza o saldo
    alert("Saque realizado com sucesso! Novo saldo: R$ " + saldo);
  } else {
    alert("Valor inválido ou maior que o saldo. Tente novamente.");
  }
}


alert("Saldo esgotado. Não é possível continuar.");   // Quando o saldo chega a 0 ou menos, exibe mensagem final