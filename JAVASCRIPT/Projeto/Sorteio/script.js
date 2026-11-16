

function generateNumber() {
    const valMin = Math.ceil(document.querySelector('.input-min').value)
    const valMax = Math.floor(document.querySelector('.input-max').value)

    const result = Math.floor(Math.random() * (valMax - valMin + 1) + valMin);

    alert(result)
}