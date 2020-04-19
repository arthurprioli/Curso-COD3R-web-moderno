function calcularCrescimento(altura1, taxaDeCrescimento1, altura2, taxaDeCrescimento2)
{
    if (altura1 > altura2){
        if (taxaDeCrescimento2 > taxaDeCrescimento1){
            let n = 0
            while (altura2 <= altura1){
                altura1 += taxaDeCrescimento1
                altura2 += taxaDeCrescimento2
                n++
            }
            return `A crianca mais baixa irá passar a mais alta em ${n} anos`
        } else {
            return 'A crianca mais baixa nao ultrapassara'
        }
    } else if (altura2 > altura1){
        criancaMenor = altura1
        if (taxaDeCrescimento1 > taxaDeCrescimento2){
            let t = 0
            while (altura1 <= altura2){
                altura1 += taxaDeCrescimento1
                altura2 += taxaDeCrescimento2
                t++
            }
            return `A crianca de altura mais baixa irá passar a mais alta em ${t} anos`
        } else {
            return 'A crianca mais baixa nao ultrapassará'
        }
    } else {
        if (taxaDeCrescimento1 > taxaDeCrescimento2){
            return 'A crianca 1 será mais alta'
        } else if (taxaDeCrescimento2 > taxaDeCrescimento1) {
            return 'A crianca 2 será mais alta'
        } else {
            return 'As criancas terão alturas iguais'
        }
    }
}