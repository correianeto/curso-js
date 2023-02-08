
const num = [2,1,4,3]
num.push(9)
num.sort()
console.log(`O array tem ${num.length} numeros`)
console.log(`Os números são: ${num}`)
console.log('Sem formatação:')

for (var p in num){
    console.log (`A posição ${p} tem valor ${num[p]}`)
}

var pos = num.indexOf(5)
if (pos < 0) {
    console.log(`O número 5 não existe`)
}