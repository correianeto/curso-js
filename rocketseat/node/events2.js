const { inherits } = require('util')
const { EventEmitter } = require ('events')

function Character(nome) {
    this.nome = nome
}

inherits (Character, EventEmitter)

const chapolin = new Character ('Chapolin')

chapolin.on ('help', () => {
    console.log(`Eu, o ${chapolin.nome} Colorado`)
})
console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')