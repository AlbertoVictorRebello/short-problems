// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
// the console output shall be {a:1,b:2,c:3} 

function myFunction(a, b) {
    const myObject = {};
    myObject[a[0]] = b[0];
    myObject[a[1]] = b[1];
    myObject[a[2]] = b[2];
    return myObject
    
}
console.log("solution 1: ");
console.log(myFunction2(['a','b','c'],[1,2,3]));

function myFunction2(a, b) {

    const myObject = {};
    let counter = 0;

    for (const key of a) {
        myObject[key] = b[counter];
        counter++
    };  
    
    return myObject
}

console.log("solution 2: ");
console.log(myFunction2(['a','b','c'],[1,2,3]));

const a = ['a','b','c'];
const b = [1,2,3];
function myFunction3(a, b) {
    const myObject = {};

    for (const key of a) {
        myObject[key] = b[a.indexOf(key)];
    };   

    return myObject;    
}

console.log("solution 3: ");
console.log(myFunction3(a, b));

/*
Oi @theus_pablo#6233 , fiz um código com duas soluções propostas diferentes. Vou tentar te ajudar sem colocar o código diretamente, ok? Pode ser que alguns conceitos você já domine então desconsidere.
Para resolver esse problema precisei usar os seguintes fundamentos. Se estiver dominando todos eles, para resolver o problema a solução apenas juntará eles em um só código:
1) Arrays: acessar elementos de um array.
    Verificação: crie um array e faça um console.log() de um dos elementos desse array.
2) Funções: criar uma função que recebe argumentos.
     Verificação: crie uma função que receba 2 argumentos e faça um faça um console.log() de cada um deles.
3) Objetos: criar um objeto com propriedades.
     Verificação: crie um objeto e faça um console.lo() do objeto inteiro.

3) Objetos: incluir propriedades em um objeto.
Verificação: crie um objeto vazio, inclua propriedades nele faça um console.lo() do objeto inteiro.
     
     */