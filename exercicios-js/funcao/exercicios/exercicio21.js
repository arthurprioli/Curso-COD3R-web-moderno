function planoDeSaude(idade){
    if (idade < 10){
        valor = 100 + 80
        return valor
    } else if (idade >= 10 && idade < 30){
        valor = 100 + 50
        return valor
    } else if (idade >= 30 && idade < 60){
        valor = 100 + 95
        return valor
    } else {
        valor = 100 + 130
        return valor
    }
}

console.log(planoDeSaude(9),
planoDeSaude(16),
planoDeSaude(48),
planoDeSaude(73))