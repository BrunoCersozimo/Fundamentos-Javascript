// Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b //Em parenteses estão os parametros, logo após é exibido o return da função 
console.log(subtracao(2, 3))

// Um outro exemplo de arrow function pra diminuir ainda mais uma linha de codigo
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')