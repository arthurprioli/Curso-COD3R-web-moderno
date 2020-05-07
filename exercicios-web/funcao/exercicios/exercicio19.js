function calcularCardapio(codigo, quantidade){
    let preco = 0
    switch(codigo){
        case 100:
            preco = 3 * quantidade
            return preco
            break
        case 200:
            preco = 4 * quantidade
            return preco
            break
        case 300:
            preco = 5.5 * quantidade
            return preco
            break
        case 400:
            preco = 7.5 * quantidade
            return preco
            break
        case 500:
            preco = 3.5 * quantidade
            return preco
            break
        case 600:
            preco = 2.8 * quantidade
            return preco
            break
        default:
            throw 'Produto não encontrado'
   } 
}

console.log(calcularCardapio(600, 2))