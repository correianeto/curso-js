

let gastos = {
    receitas: [3000, 500.1, 400, 200, 100],
    despesas: [100, 300.3, 600, 1000],
} 

let total = 0

function soma(array) {
    let total = 0
    for (let valor of array) {
        total += valor
    }
    return total
}

function calcular() {
    let calcularReceitas = soma(gastos.receitas)
    let calcularDespesas = soma(gastos.despesas)
    let saldo = calcularReceitas - calcularDespesas
    let mensagem = 'Negativo'
    if (saldo >= 0) {
        mensagem = 'Positivo'
    }
    console.log(`Seu saldo é ${mensagem}: ${saldo.toFixed(2)}`)
}

calcular()