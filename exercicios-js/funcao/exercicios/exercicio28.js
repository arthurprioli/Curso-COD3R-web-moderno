function lerVetorDePares(vetor){
    let p = 0
    let i = 0
    for (numero in vetor){
        if (numero % 2 == 0){
            p++
        } else {
            i++
        }
    }
    console.log(`Pares: ${p}`)  
    console.log(`Impares: ${i}`)
}

lerVetorDePares([1, 2, 3, 4, 5, 6])