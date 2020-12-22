function objetoParaArray(objeto){
    return Object.entries(objeto)
}

console.log(objetoParaArray({'a': '1', 'b':'2'}))