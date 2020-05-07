function percorreVetor(vetor){
    let n = 0
    for (numero in vetor){
        if (vetor[numero] >= 20 && vetor[numero] <= 30){
            n++
        }
    }
    return n
}

console.log(percorreVetor([10, 20, 25, 26, 28, 30, 31, 21]))