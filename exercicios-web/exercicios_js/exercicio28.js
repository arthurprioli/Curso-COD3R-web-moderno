function calcularDigitos(array, digitos){
    const combinando = []
    for (n of array){
        if (n.toString().length == digitos){
            combinando.push(n)
        }
    }
    return combinando
}

console.log(calcularDigitos([32, 233, 1, 42], 2
    ))