// não aceita repetição/ não indexada
const times = new Set()
times.add('Cardinals')
times.add('Lakers').add('Diamondbacks').add('Fluminense')
times.add('Cardinals')

console.log(times)
console.log(times.size)
console.log(times.has('fluminense'))
console.log(times.has('Fluminense'))
times.delete('Diamondbacks')
console.log(times.has('Lakers'))

const nomes = ['Arthur', 'Amélia', 'Luísa', 'Gustavo', 'Arthur']
const nomesSet = new Set(nomes)
console.log(nomesSet)