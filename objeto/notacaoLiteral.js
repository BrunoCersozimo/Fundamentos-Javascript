// Formas de notação literal ESC15
const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // notação literal 1
const obj2 = {a, b, c} // mesmo efeito da notação acima, porém mais reduzida
console.log(obj1, obj2)// 

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2(){

    }
}

console.log(obj5)