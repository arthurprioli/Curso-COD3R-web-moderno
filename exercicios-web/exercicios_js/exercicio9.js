function repetir(valor, vezes){
    let array = []
    for (let n = 0; n < vezes; n++){
        array[n] = valor
    }
    return array
}

console.log(repetir(7, 3))