/*  EVENTOS



*/

const input = document.querySelector("#main-input")
const paragraph2 = document.getElementsByClassName(".paragraph2")

function cliqueiNoBotao(){
    console.log(input.value)
    paragraph2 = input.value
}

function digiteiNoInput(){
    console.log("Digitei no input")
}