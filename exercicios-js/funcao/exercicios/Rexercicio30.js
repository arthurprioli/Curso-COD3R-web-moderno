function percorreVetorMaiorEMenor(vetor){
    let maior = null
    let menor = Infinity
    for (numero in vetor){
        switch (vetor[numero]){
            case (vetor[numero] > maior):
                maior = vetor[numero]
                console.log(vetor[numero])
        }
    }
    return `Maior: ${maior}, Menor: ${menor}` 
}

console.log(percorreVetorMaiorEMenor([1, 2, 3, 4, 5, 6, 7, 10, 15, 22, 12, 8]))