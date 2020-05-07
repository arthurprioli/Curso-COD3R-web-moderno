// novo rescurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endreco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa

const {sobrenome, bemHumorada = true} = pessoa

const {endreco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)