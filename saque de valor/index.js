
let saldo = 100; // define o saldo inicial da conta, vc pode trocar esse valor por qualquer outro


while (saldo > 0) {   // enquanto houver saldo positivo, os saques irão ser permitidos
  
  let saque = parseFloat(prompt("Seu saldo é R$ " + saldo + ". Digite o valor do saque:"));  // Mostra o saldo atual e pede o valor do saque

  
  if (saque <= saldo && saque > 0) {     // verifica se é possível sacar o dinheiro
    saldo = saldo - saque; // atualiza o saldo atual
    alert("Saque realizado com sucesso! Novo saldo: R$ " + saldo);
  } else {
    alert("Valor inválido ou maior que o saldo. Tente novamente.");
  }
}


alert("Saldo esgotado. Não é possível continuar.");   // quando o saldo chega a 0 ou menos, esta mensagem irá aparecer
