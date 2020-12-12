function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Alternativas diferentes para chamar a mesma função

console.log(rand({ max: 40, min: 30}))

// outra maneira de usar o destructuring
const obj = {max: 10, min: 1 }
console.log(rand(obj))

// Definindo o mínimo ele ficará percorrendo entre o mínimo e o máximo 1000 pré-estabelecido
console.log(rand({ min: 995}))