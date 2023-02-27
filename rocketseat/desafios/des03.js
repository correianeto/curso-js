
function transformarGrau (grau) {
    const existeCelsius = grau.toUpperCase().includes('C')
    const existeFahrenheit = grau.toUpperCase().includes('F')
    if (!existeCelsius && !existeFahrenheit) {
        throw new Error('Grau não identificado')
    }

    // F => C
    let transformarF = Number(grau.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let sinal = 'C'

    if (existeCelsius) {
        transformarF = Number(grau.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        sinal = 'F'
    }

    return formula(transformarF) + sinal
}

try {
    console.log(transformarGrau('68F'))
    console.log(transformarGrau('13c'))
    console.log(transformarGrau('13z'))
} catch (error) {
    console.log(error.message)
}