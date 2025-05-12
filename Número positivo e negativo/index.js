let numero = parseFloat(prompt("Digite um número positivo:")); // serve para coletar o número

while (numero < 0 || isNaN(numero)) {
  numero = parseFloat(prompt("Valor inválido! Digite um número **positivo**:")); // identifica se o número é positivo ou negativo se caso for negativo o usuario será notificado
}

alert("Número válido digitado: " + numero);  // informa que o número digitado é correto
