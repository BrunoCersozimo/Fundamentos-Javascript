// estrategia para gerar valor padrao
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // Existe dentro de arguments o índice 1? Se sim pegue o valor de 'a', se não pegue 1
    c = isNaN(c) ? 1 : c // Se c for igual a NaN então retorne 1, se não retorne o valor de c
    return a + b +  c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão de ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b +  c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))