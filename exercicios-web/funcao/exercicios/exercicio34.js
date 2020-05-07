function comparaStrings(string1, string2){    
    let stringLower1 = string1.toLowerCase()
    let stringLower2 = string2.toLowerCase()

    if ((stringLower1.includes(stringLower2)) || (stringLower2.includes(stringLower1))){
        return true
    } else {
        return false
    }
}

console.log(comparaStrings('Arthur', 'ARTHURITO'))