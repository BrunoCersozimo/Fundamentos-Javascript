function Pessoa(){
    this.idade = 0

    setInterval(() => { // Comportamento do this dentro do Arrow function
        this.idade++ 
        console.log(this.idade)
    }, 1000)
}

new Pessoa