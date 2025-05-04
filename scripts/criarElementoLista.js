import verificarListaVazia from "./verificarListaVazia.js";
import addDiaHora from "./gerarDiaSemana.js"; // importa so 1
const inputItem = document.getElementById('input-item');
const listaCompras = document.getElementById('lista-de-compras');
let countCheckbox = 0;



export function criarElementoLista(){
    // cria um elemento Li com o conteúdo baseado no último texto enviado no formulário e o adiciona na lista de compras


    if(inputItem.value === ""){
        alert("Por favor, insira um item!");
        return;
    }


    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = `checkbox-${countCheckbox++}`;
    const nomeItem = document.createElement("p");
    nomeItem.textContent = inputItem.value;

    inputCheckbox.addEventListener("click", () => {  // criei aqui dentro pq esse checkbox foi gerado aqui dentro
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
    
            setTimeout(() => { // espera 1 segundo antes de remover, a sintaxe é (função que farei depois, tempo em ms)
                itemDaLista.remove();
                verificarListaVazia(listaCompras);
            }, 1000); 
        }
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = addDiaHora(itemDaLista);


    const paragrafoHorario = document.createElement("p");
    paragrafoHorario.classList.add("texto-data")
    paragrafoHorario.textContent = dataCompleta;
    itemDaLista.appendChild(paragrafoHorario);

    return itemDaLista;
}
   