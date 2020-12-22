function inverter(obj){
    const objetoInvertido = {}
    Object.entries(obj).forEach( parChaveEValor => {
        const chave = 0
        const valor = 1

        objetoInvertido[ parChaveEValor[valor] ] = parChaveEValor[chave]
    })
    return objetoInvertido
}

console.log(inverter({ a: 1, b: 2, c: 3}))