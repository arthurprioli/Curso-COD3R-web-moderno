function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            // console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}
/*
esperarPor(2000)
    .then(() => console.log('Executando promisse 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 3...'))

*/

async function retornarValor(){
    return 20
}

async function executar(){
    let valor = await retornarValor()
    await esperarPor(1500)
    console.log(`Async/Await  ${valor}...`)
    await esperarPor(1500)
    console.log(`Async Await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()