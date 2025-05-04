
import { criarElementoLista } from "./scripts/criarElementoLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const btnSend = document.getElementById('adicionar-item');
const listaCompras = document.getElementById('lista-de-compras');


btnSend.addEventListener("click", (evento) =>{
    evento.preventDefault();
    const itemDaLista = criarElementoLista();
    if(itemDaLista){
        listaCompras.appendChild(itemDaLista);
    }
    verificarListaVazia(listaCompras);
})


verificarListaVazia(listaCompras);
