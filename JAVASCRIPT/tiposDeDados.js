/* TIPOS DE DADOS

1. String -> Textos.
2. Numbers -> Números
3. Boolean -> Boleanos (verdadeiro ou falso)
4. Objetos 
5. Null & Undefined

Estrutura de dados

1. Array


*/

// String - TExtos
const texto1 = "Texto com aspas duplas"
const texto2 = 'Textos com aspas simples'
const texto3 = `Textos com a crase` /* Template literals ou Template String */

console.log(texto1)
console.log(texto2)
console.log(texto3)


const myAge = 30;
const myCar = 'Celta'

const myString = `Minha idade é ${myAge}, to ficando velho.
Mas pelo menos to andando de ${myCar}` // Template String

console.log(myString)

// Number - NUMEROS

const number1 = 32 / 2
const fakeNumber = "32 / 2"

console.log(number1)
console.log(fakeNumber)

// Boolean - Verdadeiro ou Falso (True e False)


// Objetos

const ildefonso = {
    name: "Ildefonso",
    age: 39,
    address: {
        street: "Francisco Falcato Junior",
        number: 169,
        city: "Itu",
        state: "SP",
        country: "Brasil"
    }
}

console.log(ildefonso)
console.log(ildefonso.age)
console.log(ildefonso.address)
console.log(ildefonso.address.street)

// NUll e Undefined

const user = {
    nome: "Rodolfo",
    idade: 30,
    nomeDoConjuge: null,
    id: null
}

console.log(user.abacate)

// Array

const users = [
    {
        nome: 'Ildefonso',
        age: 39,
        nomeDoConjuge: "Rosangela",
        id: null
    },

    {
        nome: 'Rosangela',
        age: 39,
        nomeDoConjuge: "Ildefonso",
        id: null
    }
]
console.log(users)
console.log(users[0])