


// Function hoisting

const cor = function criarCor(p) {
    console.log(p)
}

cor('neto')

// Arrow function

const idade = (i) => {
    console.log(i)
}

idade(21)

console.log(typeof idade, cor)

