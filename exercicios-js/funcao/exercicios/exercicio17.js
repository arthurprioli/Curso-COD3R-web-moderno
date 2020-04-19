function calcularAumento(salario, plano){

    switch (plano){
        case 'A':
            salario += salario * 0.1
            return salario
            break
        case 'B':
            salario += salario * 0.15
            return salario
            break
        case 'C':
            salario += salario * 0.2
            return salario
            break
        default:
            throw 'Plano inválido'
    }
}

console.log(calcularAumento(1000, 'A'))
console.log(calcularAumento(1000, 'B'))
console.log(calcularAumento(1000, 'C'))