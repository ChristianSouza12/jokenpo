
const result = document.querySelector(".result")

const humanScore =document.getElementById("human-score")
const machineScore = document.getElementById("machine-score")


let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ["pedra", "papel", "tesoura"]
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log(" Humano: " + human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Xii, Deu Empate! &#x1F611;"
    } else if (human === "papel" && machine === "pedra" ||
        (human === "pedra" && machine === "tesoura" ||
            (human === "tesoura" && machine === "papel"))) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Parabéns! Você ganhou!! &#x1F604;"

    } else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Que pena,Não foi dessa vez!! &#x1F62D;"
    }



}