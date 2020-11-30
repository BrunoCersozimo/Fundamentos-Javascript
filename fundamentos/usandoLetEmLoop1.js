for (let i = 0; i < 10; i++){ // ao contrário do exemplo em que usando a palavra reservada var pra iniciar uma variável, com o let o valor de i está apenas dentro do escopo de bloco 
    console.log(i)
}
console.log('i =', i)// dará erro porque i está visível dentro do escopo de bloco