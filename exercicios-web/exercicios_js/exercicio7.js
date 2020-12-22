function estaEntre(min, max, val, inc=false){
    if(inc){
        if (val >= min && val <= max){
            return true
        } else {
            return false
        } 
    } else {   
        if (val > min && val < max){
            return true
        } else {
            return false
        }
    }
}

console.log(estaEntre(1, 100, 1, true))