function serBissexto(ano){
    if (ano % 100 == 0){
        if (ano % 400 == 0){
            return true
        } else {
            return false
        }
    } else if (ano % 4 == 0) {
        return true
    }
}


console.log(serBissexto(2400))