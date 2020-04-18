function arredonda(valor, moeda){
    return `${moeda} ${valor.toFixed(2)}`
}

console.log(arredonda(0.1 + 0.2, 'R$'))