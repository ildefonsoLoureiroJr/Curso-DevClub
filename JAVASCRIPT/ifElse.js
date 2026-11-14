/* Controlador de FLuxo 

    - IF (Se)
    - ELSE (Se não)


    Operadores de comparação
    > Maior que
    >= Maior igual
    < Menor que
    <= Meno igual
    == igual que
    === igual igual
    != diferente

*/

// IF e ELSE

const notaAluno = 4
const notaDeCorte = 5

if(notaAluno > notaDeCorte) {
    // O que será executado, Se o if for verdadeiro
    console.log("Parabéns, você foi passou de ano")
} else {
    //Se o if for falso, ele executa este comando
    console.log("Você foi reprovado")
}


const senhaDoUsuario = 123456
const senhaDigitada = 1234567

if (senhaDoUsuario === senhaDigitada){
    console.log("Seja bem-vindo, você está logado(a)")
} else {
    console.log("Senha incorreta. Favor digitar a senha corretamente.")
}