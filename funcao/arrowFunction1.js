let dobro = function(a){
    return 2 * a
}

// arrow function
dobro = (a) => {// Função arrow é uma função anônima então não esquecer de armazenar em uma variável ou uma constante
    return 2 * a
}

dobro = a => 2 * a // return está implícito
console.log(dobro(Math.PI))

let ola = function(){ 
    return 'Olá'
}

// Função Arrow
ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())