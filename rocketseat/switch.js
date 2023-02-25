
function calcular (number1, operador, number2) {
    let resultado

    switch (operador) {
        case "+":
            resultado = number1 + number2
            break 
        case "-":
            resultado = number1 - number2
            break
        case "*":
            resultado = number1 * number2
            break
        case "/":
            resultado = number1 / number2
            break
        default:
            console.log('Operação não definida, cara de bosta')
            break
    }
}

console.log(calcular(2, '+', 5))