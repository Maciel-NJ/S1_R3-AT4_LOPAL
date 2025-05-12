let primeiroNome = prompt("Digite seu primeiro nome:");


while (primeiroNome === "") {  // Enquanto o primeiro nome for uma string vazia, continua pedindo
  primeiroNome = prompt("Primeiro nome não pode ficar em branco. Digite seu primeiro nome:");
}


let sobrenome = prompt("Digite seu sobrenome:");  // Pede o sobrenome


while (sobrenome === "") {   // Enquanto o sobrenome for uma string vazia, continua pedindo
  sobrenome = prompt("Sobrenome não pode ficar em branco. Digite seu sobrenome:");
}


alert("Nome completo: " + primeiroNome + " " + sobrenome);   // Exibe o nome completo