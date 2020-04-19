function bhaskara(a, b, c){
    const delta = (b**2) - (4 * a * c)
    if (delta >=  0) {
        const formula1 = ((b * -1) + (delta**0.5)) / (2 * a)
        const formula2 = ((b * -1) - (delta**0.5)) / (2 * a)
        return [formula1, formula2]
    } else {
        return 'Delta negativo'
    }
}

console.log(bhaskara(1, -2, -3))