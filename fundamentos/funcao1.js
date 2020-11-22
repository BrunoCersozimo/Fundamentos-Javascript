// Funcao sem retorno
function imprimirSoma( a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)// Como na função eu declarei duas propriedades (a + b) agra posso apenas colocar um número que ele vai somar
imprimirSoma(2)// Neste caso, o número no item a = 2 e o item b ficará undefined. Gerando oresultado NaN porque um inteiro somando com um undefined é NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8)// Nesse caso será somado os dois primeiros itens e os restantes serão ignorados. Isso mostra como o javascript é flexível, algo a se observar e aprender
imprimirSoma()// Não dará erro, somente irá mostrar NaN

// Funcao com retorno
function soma(a, b = 1) {
    return a + b  
} // function é a palavra reservada para função. Soma é o nome da função. As variáveis são a e b. Sendo que estou declarando que b é por padrão igual a 1. É algo novo no ecmascript 2015, que é ter um valor padrão quando esse valor não for passado na chamada da função.
 console.log(soma(2, 4))// Aqui irá mostrar o valor 6 2 + 4.
 console.log(soma(2))// Nesse caso será mostrado o resultado 3. soma do número 2 + 1 iniciado anteriormento como valor padrão da variável b.
 console.log(soma())// Nesse caso a variável a está undefined e a variável b tem o valor 1. O resultado será um NaN.