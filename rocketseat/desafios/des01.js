

function converter (nota) {
    if (nota > 100 || nota < 0) {
        console.log('Digite uma nota entre 0 e 100')
    } else if (nota >= 90){
        console.log('Você tirou nota A')
    } else if (nota >= 80) {
        console.log('Você tirou nota B')
    } else if (nota >= 70) {
        console.log('Você tirou nota C')
    } else if (nota >= 60) {
        console.log('Você tirou nota D')
    } else if (nota >= 0) {
        console.log('Você tirou nota F')
    }
}

converter(90)