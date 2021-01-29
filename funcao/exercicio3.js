//) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

function calcula(base, expoente){
    // forma antiga
    let resultado = Math.pow(base, expoente)
    // OU nova forma

    resultado = base ** expoente
     return resultado
}

console.log(calcula(3, 2))