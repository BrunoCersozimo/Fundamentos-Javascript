const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))// Irá aparecer no console as chaves do objeto pessoa
console.log(Object.values(pessoa))// Irá aparecer no console os valores das chaves do objeto pessoa
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Essa propriedade será listada
    writable: false, // Essa propriedade não poderá ser modificada
    value: '01/01/2021' // valor da propriedade
})  // Essa função define a prorpiedade, o nome da propriedade a ser criadad e um objeto que define as características da propriedade criada

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign ECMAScript 2015
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // O objeto gerado é a concatenação de todos os elementos