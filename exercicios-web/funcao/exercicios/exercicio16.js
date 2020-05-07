function calculadora(x, op, y){
    switch (op){
        case '+':
            return x + y
            break
        case '-':
            return x - y
            break
        case '*':
            return x * y
            break
        case '/':
            return x / y
            break
        default:
            throw 'Operação inválida'
    }
}

console.log(calculadora(5, '+', 3))
console.log(calculadora(5, '-', 3))
console.log(calculadora(5, '*', 3))
console.log(calculadora(5, '/', 3))
console.log(calculadora(5, 's', 3))