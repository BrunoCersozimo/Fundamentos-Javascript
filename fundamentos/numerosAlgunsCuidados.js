console.log(7 / 0.0001)//Qualquer número divido por 0 não gera um erro gera um infinity

console.log("10" / 2)//javascript divide o 10 apesar dele estar entre aspas, ou seja, ser uma string

console.log('3' + 2) // Diferente do exemplo acima, aqui o + vai concatenar o 3 e o 2. Exibindo o resultado 32

console.log("Show!" * 2)// Algumas linguagens repetem o "Show!" duas vezes o javascript não. Gera um NaN

console.log(0.7 + 0.1)// O resultado não é 0.8 por haver uma especificação IEEE, portanto gera um resultado impreciso
//console.log(10.toString())//Não consigo chamar um número literal.Uma função

console.log((10.345).toFixed(2))// Aqui é possível apenas colocando o número em parenteses
