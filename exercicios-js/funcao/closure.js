//Closure é o escopo criado quando uma função é declarada
// Esse escopo permite acessar a função e manipular variáveis externas à fução

// Contexto léxico em ação
const x = 'Global'
function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao)