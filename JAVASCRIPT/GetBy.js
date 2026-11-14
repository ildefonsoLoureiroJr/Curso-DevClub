/* document -> HTML

getElementById -> Trás Um elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa Classe
getElementByTagName -> Trás todos os elementos com essa Tag
getElementByName -> Tras todos os elementos com esse Name

querySelector -> Tras um elemento, o primeiro que encontrar
querySelectorAll -> Trás todos os elementos encontrados

*/

const input = document.getElementById("main-input")
console.log(input)

const elements = document.getElementsByClassName("paragraph-js")
console.log(elements)

const tags = document.getElementsByTagName("p")
console.log(tags)

const names = document.getElementsByName("nome-completo")
console.log(names)

const element2 = document.querySelector(".paragraph-js")
console.log(element2)

const element3 = document.querySelectorAll("paragraph-js")
console.log(element3)

const eelement = document.querySelector("paragraph-js")
//eelement.textContent = "O novo texto é esse"
//console.log(eelement.textContent) // Só HTML
//console.log(eelement.innerText) // Leva em conta o css
//console.log(eelement.innerHTML) // Tras tudo

const button = document.querySelector(".main-button")

button.style.color = "#fff"
button.style.backgroundColor = "#852394"