class Pessoa{
    constructor(nome){
        this.nome = nome // This torna o atributo nome público, sendo possível acessá-lo fora do escopo da função
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Bruno')
p2.falar()

// No browser o this pode variar, nesse caso , a vantagem de usar a função factory é de o fato de que o objeto tem consciência do contexto léxico que ele se encontra. 