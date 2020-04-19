function compararString(string1, string2){
    let stringLower1 = string1.toLowerCase()
    let stringLower2 = string2.toLowerCase()

    let iguais = []
    for (char in stringLower1){
        for (c in stringLower2){
            if (stringLower2[c] == stringLower1[c]){
                iguais.push(stringLower2[c])
            }
        }
    }
    console.log(iguais)
    if (iguais == string1 || iguais == string2){
        return true
    } else {
        return false
    }
}

console.log(compararString('arthur', 'ARTHUR'))