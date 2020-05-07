function calcAnoBissexto(ano){
    let anoInicial = 0
    if ((ano % 400 == 0) && (ano % 100 != 0)){
        console.log('É bissexto')
        return true
    } else if ((ano % 4 == 0) && (ano % 100 != 0)){
        console.log('É bissexto')
        return true
    } else {
        console.log('Não é bissexto')
        return false
    }
}
