function progressaoAritmetica(n, a1, r){
    let pa = []
    let soma = null
    for (let i = 1; i <= n; i++){
        let a = a1 + (i - 1) * r
        pa.push(a)
    }

    soma = ((a1 + pa[pa.length - 1]) * n) / 2
    console.log(pa)
    console.log(soma)
}

progressaoAritmetica(5, 1, 2)

function progressaoGeometrica(n, a1, q){
    let pg = []
    for (let i = 1; i <= n; i++){
        let a = a1 * (q**(i - 1))
        pg.push(a)
    }

    let soma = (a1 * (1 - (q**n))) / (1 - q)
    console.log(pg)
    console.log(soma)
}

progressaoGeometrica(4, 1, 5)
