const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]
let soma = []
for (n in vetorPilha){
    let a = vetorPilha[n] + vetorAdiciona[n]
    soma.push(a)
}
console.log(soma)