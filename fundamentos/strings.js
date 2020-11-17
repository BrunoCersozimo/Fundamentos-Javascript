const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))// Vai retornar o índice que corresponde o número 3
console.log(escola.substring(1))// Ele vai mostrar a partir do índice 1 da palavra. Não vai incluir o índice 0
console.log(escola.substring(0, 3))// Vai do índice 0 ao índice 3 sem incluir o índice 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '.concat + escola + "!") //mesmo resultado do código acima, usando o + para concatenar
console.log(escola.replace(3, 'e'))// substitui o dígito 3 pela letra e

console.log('Ana,Maria,Pedro'.split(','))// converter essa string para um array usando a função split