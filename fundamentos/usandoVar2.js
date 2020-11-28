var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// Se a variável não estiver dentro de um escopo de uma função ela etá em um escopo global. Sendo assim independente se a variável está dentro de um bloco e este não é uma função, a variável será de nível global