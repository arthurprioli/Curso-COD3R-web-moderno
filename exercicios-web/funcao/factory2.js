function criarProduto(nome, preco){
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('iPad', 1559.99))
console.log(criarProduto('Notebook', 4999.99))