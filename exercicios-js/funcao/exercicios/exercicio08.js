function calcularPontos(jogos){
    pontos = jogos.split(" ")
    let scores = []
    for (jogo in pontos){
        let djogo = parseInt(pontos[jogo])
        scores.push(djogo)
    }
    let recorde = scores[0]
    let quebrou = 0
    let menor = scores[0]
    let piorJogo = scores[0]
    console.log(scores)
    for (n in scores){
        if (scores[n] > recorde){
            recorde = scores[n]
            quebrou++
        } else if (scores[n] < menor){
            menor = scores[n]
            piorJogo = parseInt(n) + 1
        }
    }
    return [quebrou, piorJogo]
}

console.log(calcularPontos('10 20 20 8 25 3 0 30 1'))