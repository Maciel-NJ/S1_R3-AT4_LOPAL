// pede a 1° nota 
let nota = parseFloat(prompt("Digite uma nota de 0 a 10 (ou um número negativo para sair):"));

// variáveis que servem para somar as notas e contar quantas foram digitadas
let soma = 0;
let quantidade = 0;

// enquanto a nota for maior ou igual a 0 o loop continua
while (nota >= 0) {
  
  // verifica se a nota está no intervalo permitido (de 0 a 10)
  if (nota <= 10) {
    soma += nota;       // soma a nota à variável total
    quantidade++;        // conta mais uma nota válida
  } else {
    // se a nota for maior que 10 avisará o usuário
    alert("Nota inválida! Digite um valor entre 0 e 10.");
  }

  // pede a próxima nota dentro do loop
  nota = parseFloat(prompt("Digite uma nota de 0 a 10 (ou um número negativo para sair):"));
}

// depois do loop verifica se uma nota válida foi digitada
if (quantidade > 0) {
  let media = soma / quantidade;                     // calcula a média
  alert("Média das notas: " + media.toFixed(2));     // exibe a média com 2 casas decimais
} else {
  alert("Nenhuma nota válida foi digitada.");        // caso não tenha nenhuma nota válida
}
