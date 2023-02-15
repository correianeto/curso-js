
let num = document.getElementById('txtn')
let lista = document.getElementById('selnum')
let res = document.getElementById('res')
let valores = []

function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n,l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (numero(num.value) && inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        alert('Número já digitado ou não corresponde ao solicitado')
    }
    res.innerHTML = ''
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores para finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]}
            if (valores[pos] < menor){
                menor = valores[pos]}
        }

        num.focus()
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<br><p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
        
    }   
}