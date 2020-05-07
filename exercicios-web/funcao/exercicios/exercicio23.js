function calcularMedia(ca, n1, n2, n3){
    let maiorNota = 0
    if ((n1 > n2) && (n1 > n3)){
        maiorNota = n1
        r1 = n2
        r2 = n3
    } else if ((n2 > n1) && (n2 > n3)){
        maiorNota = n2
        r1 = n1
        r2 = n3
    } else {
        maiorNota = n3
        r1 = n1
        r2 = n2
    }

    let media = ((4 * maiorNota) + (3 * r1) + (3 * r2)) / 10

    if (media >= 5){
        console.log(ca)
        console.log("APROVADO")
        console.log(media)
    } else {
        console.log(ca)
        console.log("REPROVADO")
        console.log(media)
    }
}

calcularMedia(01, 10, 7, 8)
calcularMedia(02, 4, 5, 5)