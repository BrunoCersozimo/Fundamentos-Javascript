console.log('01)', '1' == 1)// Com dois sinais de igual a comparação está no valor que está comparando
console.log('02)', '1' === 1)// Nesse caso a comparação é se os números comparados são extritamente iguais, sendo comparado valor e tipo.
console.log('03)', '3' != 3)// A pergunta se é diferente um do outro. Nesse caso levando em conta só o valor e não o tipo.
console.log('04)', '3' !== 3)// Nesse caso a pergunta é se os itens comparados são extritamente diferentes e nesse caso sim, porque leva em conta não só o vaor mas também o tipo.

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())// São iguais pois possuem o mesmo valor.

console.log('12)', undefined == null)
console.log('13)', undefined === null)
