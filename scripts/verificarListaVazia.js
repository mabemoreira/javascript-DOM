const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaCompras){
    const itensDaLista = listaCompras.querySelectorAll("li");
    mensagemListaVazia.style.display = itensDaLista.length === 0 ? "block" : "none";
}

export default verificarListaVazia;