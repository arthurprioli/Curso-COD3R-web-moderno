function contarCaractere(ch, frase){
    let contador = 0
    for (l of frase){
        if(l == ch){
            contador += 1
        }
    }
    return contador
}

console.log(contarCaractere('a', 'Feliz Natal pra todas'))