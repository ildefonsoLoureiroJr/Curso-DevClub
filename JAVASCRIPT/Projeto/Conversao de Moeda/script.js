const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConverter = document.querySelector(".currency-select-converter")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".inputCurrency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const realToday = 1
    const dolarToday = 5.64
    const euroToday = 6.25
    const libraToday = 7.49
    const bitcoinToday = 425253

    if(currencySelectConverter.value == "real"){    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if(currencySelectConverter.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if(currencySelectConverter.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if(currencySelectConverter.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if(currencySelectConverter.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }


    // Real
    if(currencySelectConverter.value == "real" && currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency: "USD"
        }).format((inputCurrencyValue*realToday)/dolarToday)
    }

    if(currencySelectConverter.value == "real" && currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format((inputCurrencyValue*realToday)/euroToday)
    }

    if(currencySelectConverter.value == "real" && currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency: "GBP"
        }).format((inputCurrencyValue*realToday)/libraToday)
    }

    if(currencySelectConverter.value == "real" && currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "BTC"
        }).format((inputCurrencyValue*realToday)/bitcoinToday)
    }

    // Dolar
    if(currencySelectConverter.value == "dolar" && currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency: "BRL"
        }).format((inputCurrencyValue*dolarToday)/realToday)
    }

    if(currencySelectConverter.value == "dolar" && currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format((inputCurrencyValue*dolarToday)/euroToday)
    }

    if(currencySelectConverter.value == "dolar" && currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency: "GBP"
        }).format((inputCurrencyValue*dolarToday)/libraToday)
    }

    if(currencySelectConverter.value == "dolar" && currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "BTC"
        }).format((inputCurrencyValue*dolarToday)/bitcoinToday)
    }

    //Euro
    if(currencySelectConverter.value =="euro" && currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency: "BRL"
        }).format((inputCurrencyValue*euroToday)/realToday)
    }

    if(currencySelectConverter.value =="euro" && currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency: "USD"
        }).format((inputCurrencyValue*euroToday)/dolarToday)
    }

    if(currencySelectConverter.value =="euro" && currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency: "GBP"
        }).format((inputCurrencyValue*euroToday)/libraToday)
    }

    if(currencySelectConverter.value =="euro" && currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "BTC"
        }).format((inputCurrencyValue*euroToday)/bitcoinToday)
    }
    //Libra
    if(currencySelectConverter.value =="libra" && currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency: "BRL"
        }).format((inputCurrencyValue*libraToday)/realToday)
    }

    if(currencySelectConverter.value =="libra" && currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency: "USD"
        }).format((inputCurrencyValue*libraToday)/dolarToday)
    }

    if(currencySelectConverter.value =="libra" && currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format((inputCurrencyValue*libraToday)/euroToday)
    }

    if(currencySelectConverter.value =="libra" && currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "BTC"
        }).format((inputCurrencyValue*libraToday)/bitcoinToday)
    }
    //Bitcoin

    if(currencySelectConverter.value =="bitcoin" && currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency: "BRL"
        }).format((inputCurrencyValue*bitcoinToday)/realToday)
    }

    if(currencySelectConverter.value =="bitcoin" && currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency: "USD"
        }).format((inputCurrencyValue*bitcoinToday)/dolarToday)
    }

    if(currencySelectConverter.value =="bitcoin" && currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format((inputCurrencyValue*bitcoinToday)/euroToday)
    }

    if(currencySelectConverter.value =="bitcoin" && currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency: "GBP"
        }).format((inputCurrencyValue*bitcoinToday)/libraToday)
    }
    
} 

function changeCurrency(){
    
    const currencyName1 = document.getElementById("currency-name1")
    const currencyImg1 = document.querySelector(".currency-img1")

    const currencyName = document.getElementById("currency-name2")
    const currencyImg2 = document.querySelector(".currency-img2")

    if(currencySelectConverter.value == "real"){
        currencyName1.innerHTML = "Real"
        currencyImg1.src = "./assets/brasil.png"
    }

    if(currencySelectConverter.value == "dolar"){
        currencyName1.innerHTML = "Dolar Americano"
        currencyImg1.src = "./assets/dolar.png"
    }
    if(currencySelectConverter.value == "euro"){
        currencyName1.innerHTML = "Euro"
        currencyImg1.src = "./assets/euro.png"
    }
    if(currencySelectConverter.value == "libra"){
        currencyName1.innerHTML = "Libra"
        currencyImg1.src = "./assets/libra.png"
    }
    if(currencySelectConverter.value == "bitcoin"){
        currencyName1.innerHTML = "Bitcoin"
        currencyImg1.src = "./assets/bitcoin.png"
    }

    //
    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImg2.src = "./assets/brasil.png"
    }

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar Americano"
        currencyImg2.src = "./assets/dolar.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg2.src = "./assets/euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg2.src = "./assets/libra.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg2.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency )
currencySelectConverter.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)