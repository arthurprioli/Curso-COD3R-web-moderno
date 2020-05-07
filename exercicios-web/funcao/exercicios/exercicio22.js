function calcValorAssociacao(mes, valor){
    if (mes > 12){
        throw 'Mês inválido'
    }

    let montante = valor * ((1 + 0.05)**mes)
    console.log(`O valor a ser pago no mes ${mes} é de ${montante.toFixed(2)}`)
}

calcValorAssociacao(12, 1000)