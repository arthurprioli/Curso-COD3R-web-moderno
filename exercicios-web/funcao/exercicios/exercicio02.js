function calcularTriangulo(a, b, c){
    if (a < (b + c) && b < (a + c) && c < (a + b)){
       if ((a == b) && (b == c) && (a == c)) {
           return 'Equilátero'
       } else if ((a != b) && (b != c) && (a != c)){
           return 'Escaleno'
       } else {
           return 'Isósceles'
       }
    } else {
        throw 'Triângulo invalido'
    }
}

console.log(calcularTriangulo(5, 3, 4))
console.log(calcularTriangulo(6, 6, 10))
console.log(calcularTriangulo(2, 2, 2))
console.log(calcularTriangulo(5, 3, 2))