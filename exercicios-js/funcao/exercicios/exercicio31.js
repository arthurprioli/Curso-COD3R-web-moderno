function contarNegativos(vetor){
    let negativos = 0
    for (n in vetor){
        if (vetor[n] < 0){
            negativos++
        }
    }
    console.log(negativos)
}

contarNegativos([-5, -4, 1, 2, -3, -6,5])