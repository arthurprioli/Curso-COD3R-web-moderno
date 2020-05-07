function calcularNota(nota){
    let md5 = 5;
    let n = nota
    let proxMultDe5 = function (n) {
        for (let i = 0; i < 10; i++){
            if ((n + i)% 5 == 0){
                md5 = n + i
                break
            }
        }
        return md5
    }
    proxMultDe5(n)
    if (nota > 38 && (md5 - nota <= 3)){
        n = md5
        return n
    } else {
        return 'Reprovado'
    }

}

console.log(calcularNota(58))