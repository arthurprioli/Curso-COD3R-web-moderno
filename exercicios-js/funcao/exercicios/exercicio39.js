function inverterVetores(va, vb){
    if (va.length == vb.length){
        for (let n = 0; n < va.length; n++){
            va[n] = va[n] + vb[n]
            vb[n] = va[n] - vb[n]
            va[n] = va[n] - vb[n]
        }
    } else {
        return 'Vetores de tamanhos difrentes'
    }

    console.log(`Vetor 1: ${va}`)
    console.log(`Vetor 2: ${vb}`)
}

inverterVetores([1, 2, 3], [4, 5, 6])