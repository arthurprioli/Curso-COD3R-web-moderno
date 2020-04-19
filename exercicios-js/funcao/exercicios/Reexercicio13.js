function mostrarDia(dia){
    switch (dia) {
        case (dia > 31):
            console.log('Dia inválido')
            break
        case 1: case 8: case 15: case 22: case 29: case (dia % 7 == 0):
            console.log('Fim de semana')
            break
        default:
            break
    }
}

mostrarDia(25)
mostrarDia(32)
mostrarDia(28)