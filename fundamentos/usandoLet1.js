let numero = 1// Essa variável está visível fora do bloco e tem maior visibilidade.
{// Irá se impresso o let com o valor de 2. Porque a palavra reservada de let tem escopo de bloco. Ou seja, o valor 2 da variável numero aqui só está visível dentro do bloco.
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/* variáveis declaradas com as palavras reservadas:
var - tem escopo global e de função 
let - tem esopo global, de função e de bloco*/