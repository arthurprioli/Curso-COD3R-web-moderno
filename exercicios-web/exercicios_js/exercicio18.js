function calcularTotal(ado){
    let total = 0
    for (o of ado){
        total += o.preco    
    }
    return total
}

console.log(calcularTotal([  {nome: "Jornal online", categoria: "Informação", preco: 89.99},  {nome: "Cinema", categoria: "Entretenimento", preco: 150}]))