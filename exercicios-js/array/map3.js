Array.prototype.map2 = function(callback){
    let retorno = []
    for (let i = 0; i < this.length; i++){
        retorno.push(callback(this[i], i, this))
    }
    return retorno
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.40}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array com apenas os preços
let obj = carrinho.map2(JSON.parse).map2(produto => produto.preco)
console.log(obj)