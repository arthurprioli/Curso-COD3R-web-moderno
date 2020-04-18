function aplicacaoComJurosSimples(capitalInicial, juros, tempo){
    let ppa = (capitalInicial * juros) * tempo
    let soma = ppa + capitalInicial
    return soma
}

console.log(aplicacaoComJurosSimples(1000, 0.1, 10))

function aplicacaoComJurosCompostos(capitalInicial, juros, tempo){
    
}