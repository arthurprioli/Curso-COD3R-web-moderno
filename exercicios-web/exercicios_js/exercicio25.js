function buscarPalavrasSemelhantes(letras, array){
    let contidos = []
    for (palavra of array){
        if(palavra.includes(letras)){
            contidos.push(palavra)
        }  
    }
    return contidos
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissão"]))