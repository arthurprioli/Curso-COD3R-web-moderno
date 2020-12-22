function somarNumeros(array){
    let a = 0
    for (n of array){
        a += n
    }
    return a
}

console.log(somarNumeros([1, 3, 4, 5]))