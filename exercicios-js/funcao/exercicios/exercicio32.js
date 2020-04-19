function mediaAritmetica(vetor){
    let soma = null
    for (n in vetor){
        soma += vetor[n]
    }
    return (soma / vetor.length).toFixed(1)
}

console.log(mediaAritmetica([7.7, 8.7, 6.5]))