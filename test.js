//  Execicio 9
// let aluno = [];

// function adicionarItem() {
//     let Aluno = prompt("Digite o nome do aluno e sua idade:");
//     aluno.push(Aluno);
//     alert("Aluno adicionado: " + Aluno);
// }

// function exibirCarrinho() {
//     if (aluno.length === 0) {
//         alert("Não a alunos cadatrados");
//         return;
//     }

//     let listaItens = "Alunos e suas idades:\n";
//     aluno.forEach(function(item, index) {
//         listaItens += index + ": " + item + "\n";
//     });

//     alert(listaItens);
// }

// while (true) { 
//     let item = prompt("'Cadastrar Aluno?' ou 'Ver alunos cadastrados?'");

//     switch (item) {
//         case "Cadastrar Aluno":
//             adicionarItem();
//             break;

//         case "Ver alunos cadastrados":
//             exibirCarrinho();
//             break;

//         default:
//             alert("Opção inválida.");
//     }
// }



// //EXERCICIO 7 - AJUDA CHAGPT
// Função para ordenar um array em ordem decrescente
// function ordenarDecrescente(array) {
//     return array.sort((a, b) => b - a);
// }

// // Função principal
// function ABCD() {
//     const pontuacoes = []; 
//     // Array para armazenar as pontuações

//     const numJogadores = parseInt(prompt("Quantos jogadores têm pontuações para adicionar?"));

//     for (let i = 0; i < numJogadores; i++) {
//         const pontuacao = parseInt(prompt(`Digite a pontuação do jogador ${i + 1}:`));
//         pontuacoes.push(pontuacao);
//     }

//     // Ordena as pontuações em ordem decrescente
//     ordenarDecrescente(pontuacoes);

//     // Exibe o ranking de pontuações
//     alert("\nRanking de Pontuações:");
//     for (let i = 0; i < pontuacoes.length; i++) {
//         alert(`Posição ${i + 1}: Pontuação ${pontuacoes[i]}`);
//     }
// }

// // Chama a função principal
// ABCD();






// EXERCICO 8 ajuda chatgpt

// Dias da semana
let diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

// Array de temperaturas
let temperaturas = [];

// Preencher as temperaturas para cada dia da semana
for (let i = 0; i < diasSemana.length; i++) {
    let temperatura = parseFloat(prompt(`Digite a temperatura para ${diasSemana[i]}: `));
    temperaturas.push(temperatura);
}

// Exibir a previsão semanal de temperatura
alert("\nPrevisão Semanal de Temperatura:");
for (let i = 0; i < diasSemana.length; i++) {
    alert(`${diasSemana[i]}: ${temperaturas[i]}°C`);
}