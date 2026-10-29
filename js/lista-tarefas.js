const botaoAdicionar = document.querySelector("#adicionar");
const botaoExcluir = document.querySelector("#excluir");
const listaTarefas = document.querySelector("#lista-tarefas");

const tarefas = [];
let itemSelecionado = null;

botaoAdicionar.addEventListener("click", () => {
    const tarefa = document.querySelector("#tarefa");
    const campoTarefa = tarefa.value.trim();

    if (campoTarefa !== "") {
        const novaTarefa = {
            nome: campoTarefa
        };

        tarefas.push(novaTarefa);

        const itemTarefa = document.createElement("li");
        itemTarefa.textContent = novaTarefa.nome;

        itemTarefa.addEventListener("click", () => {
            if (itemSelecionado !== null) {
                itemSelecionado.classList.remove("selecionada");
            }

            itemSelecionado = itemTarefa;
            itemSelecionado.classList.add("selecionada");
        });

        listaTarefas.append(itemTarefa);

        tarefa.value = "";
    } else {
        alert("Digite uma tarefa antes de adicionar.");
    }
});

botaoExcluir.addEventListener("click", () => {
    if (itemSelecionado === null) {
        alert("Clique em uma tarefa para selecioná-la antes de excluir.");
        return;
    }

    const itensTarefa = Array.from(listaTarefas.querySelectorAll("li"));
    const indiceArray = itensTarefa.indexOf(itemSelecionado);

    for (let posicao = indiceArray; posicao < tarefas.length - 1; posicao++) {
        tarefas[posicao] = tarefas[posicao + 1];
    }

    tarefas.length--;

    itemSelecionado.remove();
    itemSelecionado = null;
});