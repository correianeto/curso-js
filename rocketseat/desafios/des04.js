
const livrosPorCategoria = [
    {
        categoria: "Riqueza",
        livros: [
            {
                titulo: "Os segredos da mente milionária",
                autor: "George S. Clason"
            },
            {
                titulo: "O homem mais rico da babilônia",
                autor: "George S. Clason"
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        categoria: "Inteligência Emocional",
        livros: [
            {
                titulo: "Você é insubstituível",
                autor: "Augusto Cury"
            },
            {
                titulo: "Ansiedade - como enfrentar o mal do século",
                autor: "Augusto Cury"
            },
            {
                titulo: "Os 7 hábitos das pessoas altamente eficazes",
                autor: "Stephen R. Covey"
            }
        ]
    }
]

const totalCategorias = livrosPorCategoria.length

console.log(`Quantidade de categorias: ${totalCategorias}`)
for (let categorias of livrosPorCategoria) {
    console.log(`Total de livros da categoria ${categorias.categoria}: ${categorias.livros.length}`)
}

function contarAutores () {
    let autores = []
    for (let categorias of livrosPorCategoria) {
        for (let livros of categorias.livros) {
            if (autores.indexOf(livros.autor) == -1) {
                autores.push(livros.autor)
            }
        }
    }

    console.log(`Total de autores: ${autores.length}`)
}

contarAutores()

function augustoCury () {
    let livro = []
    for (let categorias of livrosPorCategoria) {
        for (let livros of categorias.livros) {
            if (livros.autor == "Augusto Cury") {
                livro.push(livros.titulo)
            }
        }
    }
    console.log(`Livros do Augusto Cury: ${livro.join(", ")}`)
}

augustoCury()

function livrosAutor (autor) {
    let livro = []
    for (let categorias of livrosPorCategoria) {
        for (let livros of categorias.livros) {
            if (livros.autor == autor) {
                livro.push(livros.titulo)
            }
        }
    }
    console.log(`Livros do Autor ${autor}: ${livro.join(", ")}`)
}

livrosAutor("Stephen R. Covey")