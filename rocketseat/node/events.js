
const {EventEmitter} = require('events')

const evento = new EventEmitter()

// Ouvir sempre

evento.on('saySomething', (mensagem) => {
    console.log('Eu ouvi você', mensagem)
})

evento.emit('saySomething', 'Neto')
evento.emit('saySomething', 'Neto')
evento.emit('saySomething', 'Neto')

// Ouvir uma única vez

evento.once('saySomething', (mensagem) => {
    console.log('Eu ouvi você', mensagem)
})

evento.emit('saySomething', 'Neto')
evento.emit('saySomething', 'Neto')
evento.emit('saySomething', 'Neto')

