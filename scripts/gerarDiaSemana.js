export function addDiaHora(){
    // adiciona o dia da semana e hora atual in-place a um elemento Li

    const agora = new Date();
    const diaSemana = agora.toLocaleDateString("pt-BR",{weekday: "long"});
    const data = agora.toLocaleDateString("pt-BR");
    const horario = new Date().toLocaleTimeString("pt-BR", {
        hour:"numeric",
        minute : "numeric"
    })
    const dataCompleta = `${diaSemana} (${data}) às ${horario}`;
    return dataCompleta;
}

export default addDiaHora;