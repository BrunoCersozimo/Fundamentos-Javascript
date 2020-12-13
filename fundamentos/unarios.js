let num1 = 1
let num2 = 2

num1++  // forma pós fixada  O que faz? >= Ele acrescenta uma unidade ao valor da variável

console.log(num1)
--num1 // operador pré fixado -  Essa forma tem uma prioridade maior que a forma pós fixada. Por causa da prescedência que possui.
console.log(num1)

console.log(++num1 === num2--)// A resposta é true. POruqe no momento da comparação o num2 vale 2, somente após a comparação é retirado uma unidade de num2