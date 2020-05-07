const nome = "Regina"
const concatenacao = "Olá " + nome + "!"

const template = `
        Olá 
        ${nome}!`

console.log(concatenacao, template)

const up = texto => texto.toUpperCase()

console.log(`Ei! ${up('cuidado')}`)