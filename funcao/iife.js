// IIFE -> Immediately Invoked Function Expression

//Esse é um padrão muito usado para fugir do escopo global
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()