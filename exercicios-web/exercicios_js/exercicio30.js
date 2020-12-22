function receberMelhorEstudante(alunos){
    let soma = 0
    let arrayDeMedias = []
    for (notas of Object.values(alunos)){
        for (nota of notas){
            soma += nota
        }
        arrayDeMedias.push(soma / notas.length)
        soma = 0
    }
    
    let maior = arrayDeMedias[0]
    let indiceMaior = 0
    arrayDeMedias.forEach((media, indice)  => {
        if (media > maior) {
            indiceMaior = indice
            maior = media
        }
    })
    return {'nome': Object.entries(alunos)[indiceMaior][0], 'media': maior}
}

console.log(receberMelhorEstudante({  Joao: [8, 7.1, 8.9, 6],  Mariana: [9, 6.6, 7.9, 8],   Carla: [7, 7, 8, 9] }))