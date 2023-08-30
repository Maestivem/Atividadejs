// Exercicio 4
// // Definindo os naipes e valores das cartas
// const naipes = ['Espadas', 'Copas', 'Ouros', 'Paus'];
// const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei'];

// Criando um baralho com todas as combinações de naipes e valores
// const baralho = [];
// for (const valor of valores) {
//     for (const naipe of naipes) {
//         baralho.push({ valor, naipe });
//     }
// }

// // Função para embaralhar um array usando o algoritmo Fisher-Yates
// function embaralhar(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// // Função para distribuir cartas para os jogadores
// function distribuirCartas(baralho, numCartas) {
//     return baralho.splice(0, numCartas);
// }

// // Número de jogadores
// const numJogadores = 4;

// // Embaralhando o baralho
// embaralhar(baralho);

// // Distribuindo 5 cartas para cada jogador
// const maos = [];
// for (let i = 0; i < numJogadores; i++) {
//     maos.push(distribuirCartas(baralho, 5));
// }

// // Construindo as mensagens das mãos dos jogadores
// let mensagem = '';
// for (let i = 0; i < maos.length; i++) {
//     mensagem += `Mão do Jogador ${i + 1}:\n`;
//     for (const carta of maos[i]) {
//         mensagem += `${carta.valor} de ${carta.naipe}\n`;
//     }
//     mensagem += '\n';
// }

// // Exibindo as mãos dos jogadores usando alert
// alert(mensagem);

// // Ajuda do java SCRIPT//


// Exercicio 5

let listadafazeres = [];
let outputDiv = document.getElementById("output");

function adicionarItem() {
    let novoItem = document.getElementById("item").value;
    listadafazeres.push(novoItem);
    outputDiv.innerHTML = "Item adicionado à Lista: " + novoItem;
}

function removerItem() {
    let itemRemover = document.getElementById("itemRemover").value;
    let index = listadafazeres.indexOf(itemRemover);

    if (index !== -1) {
        listadafazeres.splice(index, 1);
        outputDiv.innerHTML = "Item removido da Lista: " + itemRemover;
    } else {
        outputDiv.innerHTML = "Item não encontrado na lista.";
    }
}

function mostrarListadafazeres() {
    if (listadafazeres.length === 0) {
        outputDiv.innerHTML = "A lista está vazia.";
    } else {
        let listaItens = "Itens da Lista:<br>";
        for (let i = 0; i < listadafazeres.length; i++) {
            listaItens += (i + 1) + ". " + listadafazeres[i] + "<br>";
        }
        outputDiv.innerHTML = listaItens;
    }
}
