function segundoMaior(numeros){
    let indiceDoMaior = 0
    let segundoMaior = 0
    
    numeros.forEach( (numero, indice) => {
        if (numero > numeros[indiceDoMaior]){
            indiceDoMaior = indice
        }
    })

    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]

    numeros.forEach(numero => {
        if (numero > segundoMaior){
            segundoMaior = numero
        }
    })

    return segundoMaior
}

console.log(segundoMaior([6, 7, 2, 3]))