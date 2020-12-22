function filtrarNumeros(array){
    return array.filter((n) => typeof n == 'number')
}

console.log(filtrarNumeros(['arroz', 'beterraba']))