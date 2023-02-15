
var idade = 60
console.log(`Você tem: ${idade} anos`)
if (idade < 16) {
    console.log('Você não vota!')
}else if (idade < 18 || idade > 67) {
    console.log('Seu voto é opcional')
}else if (idade < 68) {
    console.log('Voto Obrigatório!')
}
