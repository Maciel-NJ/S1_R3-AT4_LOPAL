// Pede a primeira nota ao usuário
let nota = parseFloat(prompt("Digite uma nota de 0 a 10 (ou um número negativo para sair):"));

// Variáveis para somar as notas e contar quantas foram digitadas
let soma = 0;
let quantidade = 0;

// Enquanto a nota for maior ou igual a 0, o loop continua
while (nota >= 0) {
  
  // Verifica se a nota está no intervalo permitido (de 0 a 10)
  if (nota <= 10) {
    soma += nota;       // Soma a nota à variável total
    quantidade++;        // Conta mais uma nota válida
  } else {
    // Se a nota for maior que 10, avisa o usuário
    alert("Nota inválida! Digite um valor entre 0 e 10.");
  }

  // Pede a próxima nota dentro do loop
  nota = parseFloat(prompt("Digite uma nota de 0 a 10 (ou um número negativo para sair):"));
}

// Depois do loop, verifica se ao menos uma nota válida foi digitada
if (quantidade > 0) {
  let media = soma / quantidade;                     // Calcula a média
  alert("Média das notas: " + media.toFixed(2));     // Exibe a média com 2 casas decimais
} else {
  alert("Nenhuma nota válida foi digitada.");        // Caso não tenha nenhuma nota válida
}
