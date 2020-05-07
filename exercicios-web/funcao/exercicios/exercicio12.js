function fatorial(n){
    for (let i = n - 1; i > 0; i--){
        n = n * i 
    }
    return n
}

console.log(fatorial(5))