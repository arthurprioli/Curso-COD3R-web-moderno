function calcMediaDeNumeros(adn){
    let tot = 0
    for (o of adn){
        tot += o 
    }
    let media = tot / adn.length
    return media
}

console.log(calcMediaDeNumeros([0, 10]))