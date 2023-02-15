

// callback function

function sayMyName(name) {
    console.log('Antes de executar o callback')

    name()

    console.log('Depois de executar o callback')

}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)

// Função construtora

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
}

const neto = new Person("Neto")
const kaua = new Person('Kauã')

console.log(neto.walk())
console.log(kaua.walk())

let date = new Date()
console.log(date) 