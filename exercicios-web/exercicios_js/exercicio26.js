function removerVogais(frase){
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (v of vogais){
        if (frase.includes(v)){
            frase = frase.replace(v, '')
        }
    }
    return frase
}

console.log(removerVogais('Arthur'))