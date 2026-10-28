
const botaoAdicionar = document.querySelector("#adicionar");
const botaoExcluir = document.querySelector("#excluir");

const tarefas = [];

botaoAdicionar.addEventListener("click", () => {
    const tarefa = document.querySelector("#tarefa");
    const campoTarefa = tarefa.value.trim();

    if (campoTarefa !== "") {
        const novaTarefa = {
            nome: campoTarefa
        };

        tarefas.push(novaTarefa);

        const listaTarefas = document.querySelector("#lista-tarefas");
        const itemTarefa = document.createElement("li");

        itemTarefa.textContent = novaTarefa.nome;
        listaTarefas.append(itemTarefa);

        tarefa.value = "";
    } else {
        alert("Digite uma tarefa antes de adicionar.");
    }
});

botaoExcluir.addEventListener("click", () => {
    const campoIndice = document.querySelector("#indice-excluir");
    const indiceDigitado = Number(campoIndice.value);

    if (campoIndice.value.trim() !== "" && indiceDigitado >= 1 && indiceDigitado <= tarefas.length && indiceDigitado % 1 === 0) {
        const indiceArray = indiceDigitado - 1;

        for (let posicao = indiceArray; posicao < tarefas.length - 1; posicao++) {
            tarefas[posicao] = tarefas[posicao + 1];
        }

        tarefas.length--;

        const listaTarefas = document.querySelector("#lista-tarefas");
        const itensTarefa = listaTarefas.querySelectorAll("li");

        itensTarefa[indiceArray].remove();

        campoIndice.value = "";
    } else {
        alert("Digite um número válido de tarefa.");
    }
});