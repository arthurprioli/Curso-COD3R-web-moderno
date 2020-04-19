function multiplica(vetor, n = 2){
    let multiplicados = []
    for (i in vetor){
        let mul = vetor[i] * n
        multiplicados.push(mul)
    }
    return multiplicados
}

function multiplicaExclusivo(vetor, n = 2){
    let multiplicadosExclusivos = []
    for (i in vetor){
        if (vetor[i] > 5){
            let mul = vetor[i] * n
            multiplicadosExclusivos.push(mul)
        }
    }
    return multiplicadosExclusivos
}

const teste = [4, 7, 3, 9, 11, 13, 15]
console.log(multiplica(teste, 4),
multiplicaExclusivo(teste, 4))