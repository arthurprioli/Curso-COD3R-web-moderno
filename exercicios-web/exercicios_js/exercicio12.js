function retornarPropriedade(objeto, propr){
    delete objeto[propr]
    return objeto
}

console.log(retornarPropriedade({'a': 1, 'b': 2, 'c': 3}, 'c'))