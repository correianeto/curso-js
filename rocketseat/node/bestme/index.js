/* process.stdout.write('Alguma coisa') */

const questoes = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) =>  {
    process.stdout.write(questoes[index] + '\n')
}

ask()

const answers = []

process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questoes.length) {
        ask(answers.length)
    } else {
    console.log(answers)
    process.exit()
    }
})

process.on('exit', () => {
console.log(`
Bacana Neto!

O que você aprendeu hoje foi:
${answers[0]}

O que te deixou aborrecido foi:
${answers[1]}

O que poderia fazer para melhorar é:
${answers[2]}

O que te deixou feliz hoje foi:
${answers[3]}

Hoje você ajudou ${answers[4]} pessoas.
`)
})
