function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTvDe50 = trabalho1 && trabalho2
    //const comprarTvDe32 = !!(trabalho1 ^ trabalho2)
    const comprarTvDe32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTvDe50, comprarTvDe32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, false))
console.log(compras(false, false))