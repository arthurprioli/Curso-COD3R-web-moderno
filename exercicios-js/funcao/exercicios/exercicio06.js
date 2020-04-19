function aplicacaoComJurosSimples(capitalInicial, juros, tempo){
    let ppa = (capitalInicial * juros) * tempo
    let soma = ppa + capitalInicial
    return soma
}

console.log(aplicacaoComJurosSimples(1000, 0.1, 10))

function aplicacaoComJurosCompostos(capitalIncial, juros, tempo){
    let montante = capitalIncial * ((1 + 0.01)**tempo)
    return montante.toFixed(2)
}

console.log(aplicacaoComJurosCompostos(300, 0.1, 12))
