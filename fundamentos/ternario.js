// A estrutura de um operador ternário, é uma versão compacta da estrutura if/else

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' 
/*
resultado é o nome da variável,
nota => nota => 7 É a condição,
? Aprovado Se o valor for verdadeiro,
: Reprovado se for falso
*/

console.log(resultado(7.1))
console.log(resultado(6.7))