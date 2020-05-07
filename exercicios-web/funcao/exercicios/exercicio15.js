function revendaDeCarros(carro){
    switch (carro){
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
            break
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
            break
    }
}

console.log(revendaDeCarros('hatch'))
console.log(revendaDeCarros('caminhonete'))
console.log(revendaDeCarros('motocicleta'))
console.log(revendaDeCarros('cybertruck'))