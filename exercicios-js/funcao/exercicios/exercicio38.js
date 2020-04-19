function impressora(inicio = 0, fim = 100){
    let i = inicio
    let f = fim
    if (inicio > fim){
        f = inicio
        i = fim
    }

    for (let n = i; n <= f; n++){
        if (n % 2 != 0){
            console.log(n)
        } 
    }
}

impressora(20, 60)