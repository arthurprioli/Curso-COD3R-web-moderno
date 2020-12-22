function arrayDeParesEmPares(array){
    let pares = []
    for (let n = 0; n < array.length; n++){
        if ((n % 2 ==0) && (array[n] % 2 == 0)){
            pares.push(array[n])
        }
    }
    return pares
}

console.log(arrayDeParesEmPares([1, 2, 4, 5, 8, 9]))

