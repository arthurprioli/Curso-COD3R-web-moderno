//Armazenando uma função dentro de uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow dentro de uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal')