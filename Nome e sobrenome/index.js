let primeiroNome = prompt("Digite seu primeiro nome:");  //coleta o 1° nome


while (primeiroNome === "") {  // se o primeiro nome for uma string vazia continuará pedindo
  primeiroNome = prompt("Primeiro nome não pode ficar em branco. Digite seu primeiro nome:");
}


let sobrenome = prompt("Digite seu sobrenome:");  // pede o sobrenome


while (sobrenome === "") {   // se o sobrenome for uma string vazia continuará pedindo
  sobrenome = prompt("Sobrenome não pode ficar em branco. Digite seu sobrenome:");
}


alert("Nome completo: " + primeiroNome + " " + sobrenome);   // mostra o nome completo
