function calcularTriangulo(a, b, c){
    if (a < b + c && b < a + c && c < a + b){
        switch (a, b, c){
            case (a == b == c):
                return 'Equilátero'
                break
            case (a != b != c):
                return 'Escaleno'
                break
            case ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)):
                return 'Isósceles'
                break
            default:
                return 'Triangulo inválido'
        }
    }
}

console.log(calcularTriangulo(5, 3, 2))
console.log(calcularTriangulo(6, 6, 10))