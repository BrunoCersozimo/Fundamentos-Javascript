let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++){// aqui há o contador(variável), a expressão e o incremento
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {  // length é uma forma de percorrer todo o array
    console.log(`nota = ${notas[i]}`)
}// nessa expressão estou dizendo para começar a partir do zero, vá até o i menor que o tamanho do array(i < notas.length) e acrescente uma unidade ao valor de i a cada operação (i++)