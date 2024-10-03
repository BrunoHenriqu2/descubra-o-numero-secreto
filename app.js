let randomNb

function startButton() {
    let startButton = document.querySelector("button#start-button")
    let activated = false

    function onClick() {
        let mainDiv = document.querySelector("section").querySelector("div")

        if (!activated) {
            activated = true
            startButton.style.backgroundColor = "#3e3e3e"
            startButton.style.borderColor = "#ffffff"

            randomNb = randomNumber(10)
            inputNumber()
        }
    }
    
    function onHover() {
        if (!activated) {
            startButton.style.color = "#6eecf5"
            startButton.style.backgroundColor = "#1b1b1b"
        }
    }
    
    function onLeave() {
        if (!activated) {
            startButton.style.color = "#000000"
            startButton.style.backgroundColor = "#eeeeee"
        }
    }
    
    startButton.addEventListener("click", onClick)
    startButton.addEventListener("mouseover", onHover)
    startButton.addEventListener("mouseleave", onLeave)
}

function inputNumber() {
    let inputNumber = document.querySelector("input.input-number")
    let resultDiv = document.querySelector("div#result")

    function onKeyUp(keyValue) {
        let choicedNumber = Number(inputNumber.value)

        if (keyValue.key == "Enter") {
            if (choicedNumber == randomNb) {
                resultDiv.innerHTML = `<p>Você acertou! quer <a href="">jogar novamente?</a>`

            } else {
                inputNumber.value = ""
                resultDiv.innerHTML = `<p> Errado! tente novamente.`
            }
        }
    }

    inputNumber.style.visibility = "visible"
    inputNumber.addEventListener("keyup", onKeyUp)
}

function randomNumber(maxNumber) {
    let randomMath = Math.random()
    let random = Math.round(randomMath * maxNumber)

    return random
}

startButton()