const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req,res) {
    const items = [
        {
            tittle: 'D',
            message: 'esenvolver aplicações de forma fácil'
        },
        {
            tittle: 'E',
            message: 'JS usa JavaScript para renderizar HTML'
        },
        {
            tittle: 'M',
            message: 'uito fácil de usar'
        },
        {
            tittle: 'A',
            message: 'morzinho'
        },
        {
            tittle: 'I',
            message: 'nstall EJS'
        },
        {
            tittle: 'S',
            message: 'intaxe simples'
        }
    ]

    const subtittle = 'Uma linguagem de modelagem para criação de página HTML utilizando JavaScript'
    res.render('pages/index', {qualities: items, subtittle: subtittle})
})

app.get('/sobre', function (req,res) {
    res.render('pages/about')
})

app.listen(8080)

console.log('Rodando')