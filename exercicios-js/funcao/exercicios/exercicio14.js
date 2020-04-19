function feiraDoArthur(fruta){
    let f = fruta
    switch (f){
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
            break
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
            break
        case 'melancia':
            return 'Aqui está, são três reais o quilo'
            break
        default:
            throw 'Fruta invalida'
            break
    }
}

console.log(feiraDoArthur('melancia'))