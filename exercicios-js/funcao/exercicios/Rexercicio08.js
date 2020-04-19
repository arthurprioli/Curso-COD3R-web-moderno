function calcularRecordesEPontos(jogos){
    let pontos = jogos.split(" ")
    console.log(pontos)
    let recorde = 0
    let piorJogo = 0
    let max = 0
    for (let n = 0; n < pontos.length; n++){
        if (pontos[n] > max){
            max = pontos[n]
            recorde++
            console.log(max)
        } else if (pontos[n] < pontos[n - 1]){
            piorJogo = n
        }
    }

    return [recorde, piorJogo - 1]
}

console.log(calcularRecordesEPontos("10 20 20 8 25 3 0 30 1"))