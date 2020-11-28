{
  {
    {
      var sera = "Será???";
    }
  }
}
console.log(sera)// Exibindo variável de escopo de nível global, isso pode gerar um problema no programa porque todos podem sobrescrever essa variável. A variável tem dos níveis escopo global onde a varíável fica visivel na aplicação inteira

function teste(){
    var local = 123
    console.log(local)// O resultado aqui ficará visível apenas dentro do escopo da função
}// Um outro exemplo de var é em escopo de nível de função

teste()
console.log(local)