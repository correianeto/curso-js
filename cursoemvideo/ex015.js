let eu = {
    nome:'Neto', 
    idade:'21 anos', 
    altura:'1,77m', 
    peso: Number(91.2),
    engordar(p=0){
        console.log('Engordou!')
        this.peso += Number(p)
    }}

 
console.log(`${eu.nome} pesa ${eu.peso}Kg`)