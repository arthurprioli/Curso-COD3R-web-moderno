let pares = []
let impares = []
for (let n = 0; n <= 100; n++){
    if (n % 2 == 0) {
        pares.push(n)
    } else {
        impares.push(n)
    }
}
console.log(pares)