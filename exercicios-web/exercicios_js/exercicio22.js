function funcaoDaSorte(n){
    let rnum = (Math.random(10) * 10).toFixed(0)
    if (n == rnum){
        return `Parabéns, o número sorteado foi o ${rnum}`
    } else {
        return `Que pena! O número sorteado foi o ${rnum}`
    }
}

console.log(funcaoDaSorte(5))