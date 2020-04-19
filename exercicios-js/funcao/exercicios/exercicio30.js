function percorreVetorMaiorEMenor(vetor){
    let maior = vetor[0]
    let menor = vetor[0]
    for (numero in vetor){
        if (vetor[numero] > maior){
            maior = vetor[numero]
        } else if (vetor[numero] < menor){
            menor = vetor[numero]
        }
    }
    return `Maior: ${maior}, Menor: ${menor}` 
}

console.log(percorreVetorMaiorEMenor([1, 2, 3, 4, 5, 6, 7, 10, 15, 22, 12, 8]))