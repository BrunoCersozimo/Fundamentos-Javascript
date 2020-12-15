const imprimirResultado = function(nota) {
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break 
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break 
        default: 
            console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

/*
Switch  

> É uma seleção múltipla,
> Não é uma expressão relacional que retorna true ou false. Pode-se passar valores e tipos para ele > > > selecionar entre esses valores,
> por padrão usa o break para que ele possa executar um dos casos e sair.
> Se não colocar o break ele entra no case e sai executando todos os que estão abaixo.

 */