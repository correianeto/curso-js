

let number = 213.1233123

console.log(number.toFixed(2).replace('.', ','))

let word = 'Programar é muito bacana'
let word2 = 'PROGRAMAR É MUITO BACANA'

console.log(word.toLocaleUpperCase())
console.log(word2.toLowerCase())

// Manipulando arrays

let frase = 'Eu quero viver o amor!'
let array = frase.split(" ")
console.log(array)
let array2 = array.join("_")
console.log(array2)
let array3 = array2.toUpperCase()
console.log(array3)

console.log(frase.includes('amor'))

console.log(['amor', {type: 'array'}, function() {return 'alo'}].length)

console.log(['amor', {type: 'array'}, function() {return 'alo'}][2]())

console.log(['amor', {type: 'array', nome: 'neto'}, function() {return 'alo'}][1].type)

let bb = 'braba'
console.log(Array.from(bb))

let techs = ["HTML", "CSS", "JS"]
// Adicionar um item no fim
techs.push("PHP")
console.log(techs)
// Adicionar um item no inicio
techs.unshift("INFOBASIC")
console.log(techs)
// Remover do fim
techs.pop()
techs.pop()
console.log(techs)
// Remover do inicio
techs.shift()
console.log(techs)
// pegar alguns elementos do array
let nomes = ['Pedro', 'José', 'Kauã', 'João', 'Gustavo']
console.log(nomes.slice(2, 4))
// Remover 1 ou mai item em qualquer posição do array
console.log(nomes.splice(0,1))

let index = nomes.indexOf('Pedro')
nomes.splice(index, 0)
console.log(nomes)