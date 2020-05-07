let comparaComOThis = function (param){
    console.log(this === param)
}
comparaComOThis(global)

const obj = {}
comparaComOThis = comparaComOThis.bind(obj)
comparaComOThis(global)
comparaComOThis(obj)

comparaComOThisArrow = param => console.log(this === param)
comparaComOThisArrow(global)
comparaComOThisArrow(module.exports)

comparaComOThisArrow = comparaComOThisArrow.bind(obj)
comparaComOThisArrow(obj)
comparaComOThisArrow(module.exports)