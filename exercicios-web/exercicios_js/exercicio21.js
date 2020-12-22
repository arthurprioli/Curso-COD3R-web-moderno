function menorNumero(array){
    let menor = array[0]
    for (let n = 0; n < array.length; n++){
        if (array[n] < menor) {
            menor = array[n]
        }
    }
    return menor
}

console.log(menorNumero([5, -15, 50]))