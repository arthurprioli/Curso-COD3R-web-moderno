function calcularConceito(notas){
    let conceito = []
    for (i in notas){
        if (notas[i] >= 0.0 && notas[i] <= 4.9){
            conceito.push('D')
        } else if (notas[i] > 4.9 && notas[i] <= 6.9){
            conceito.push('C')
        } else if (notas[i] > 6.9 && notas[i] <= 8.9){
            conceito.push('B') 
        } else if (notas[i] > 8.9 && notas[i] <= 10){
            conceito.push('A')
        } else {
            throw 'Nota inválida'
        }
    }
    return conceito
}

console.log(calcularConceito([10, 4.4, 7.5, 2.2]))

