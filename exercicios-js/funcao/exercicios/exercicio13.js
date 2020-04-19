function mostrarDia(dia){
    if (dia > 31){
        throw 'Dia inválido'
    }
    switch (dia) {
        case 1: case 8: case 15: case 22: case 29: case 7: case 14: case 21: case 28:
            console.log('Fim de semana')
            break
        default:
            console.log('Dia útil')
            break
    }
}

mostrarDia(25)
mostrarDia(28)
mostrarDia(32)
