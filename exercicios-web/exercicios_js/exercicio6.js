function inverso(valor){
    if (typeof valor == 'string' ){
        return "booleano ou número esperados, mas o parâmetro é do tipo string"
    }
    if (typeof valor == 'number'){
        return -valor
    } else if (typeof valor == 'boolean'){
        if (valor == true){
            return false
        } else {
            return true
        }
    } else {
        return 'tipo desconhecido, favor inserir boolean ou number'
    }
}

console.log(inverso('5'))