let numero = parseFloat(prompt("Digite um número positivo:"));

while (numero < 0 || isNaN(numero)) {
  numero = parseFloat(prompt("Valor inválido! Digite um número **positivo**:"));
}

alert("Número válido digitado: " + numero);
