const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)// length - conta o número de itens do array

valores.push({id: 3}, false, null, 'teste')//Método push - usado para adicionar elmentos ao array

console.log(valores)

// Usar um array de acordo com o seu tipo. Não ter tipos de dados diferentes dentro do mesmo array

console.log(valores.pop())// pop - Saca o último elemento dentro do array. retira, saca o último elemento
delete valores[0]// Outra forma de deletar um elemento dentro do array
console.log(valores)
console.log(typeof valores)// Em javascript, o array é um object