const prod1 = {}// Declarando o objeto de maneira dinâmica
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = { // declarando o objeto de maneira direta, literal
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)