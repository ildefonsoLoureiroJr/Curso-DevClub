/* OPERADORES TYPE OF E DELETE

Typeof -> Tipo de dados
delete

*/

const myObject = {
    name: "Ildefonso",
    age: 39,
    address: "Rua dos Bobos, n0"
}

const myNumber = 30

console.log(typeof myNumber)
console.log(typeof myObject)

delete myObject.address

console.log(typeof myObject)