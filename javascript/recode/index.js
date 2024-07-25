function logComHora(textoEntrada){

    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    let hora_formatada = `${hora}:${min}:${sec}`
    console.log(`${hora_formatada} : ${textoEntrada}`)


}

logComHora('Um texto qualquer')

