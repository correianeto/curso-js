
const timeOut = 1000
const check = () => {
    console.log('Checking!')
}

let interval = setInterval(check, timeOut)

setInterval (() => clearInterval(interval), 4000)
