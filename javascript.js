let playerScore = 0;
let cpuScore = 0;

function play()
{
    let playerChoice = this.classList.toString();
    let computerChoice = getComputerChoice();

    const playerImage = document.querySelector(".playerPic");
    const cpuImage = document.querySelector(".cpuPic");

    playerImage.height = 300;
    cpuImage.height = 300;

    const playerHealth = document.querySelector(".playerHealth");
    const cpuHealth = document.querySelector(".cpuHealth");
    const winningtext = document.querySelector(".winner");

    switch(computerChoice)
    {
        case "rock":
            cpuImage.src = "./images/rock.png";
            break;
        case "paper":
            cpuImage.src = "./images/paper.png";
            break;
        case "scissors":
            cpuImage.src = "./images/scissors.png";
            break;
    }

    switch (playerChoice)
    {
        case "rock":
            playerImage.src = "./images/rock.png";
            if (computerChoice === "scissors")
            {
                console.log("cpu chose scissors, you win!");
                cpuHealth.querySelector("div").remove();
                playerScore++;
            }
            else if (computerChoice === "rock")
            {
                console.log("cpu chose rock, its a tie!");
            }
            else
            {
                console.log("cpu chose paper, you lose!");
                playerHealth.querySelector("div").remove();
                cpuScore++;
            }
            break;
            
        case "paper":
            playerImage.src = "./images/paper.png";
            if (computerChoice === "rock")
            {
                console.log("cpu chose rock, you win!");
                cpuHealth.querySelector("div").remove();
                playerScore++;
            }
            else if (computerChoice === "paper")
            {
                console.log("cpu chose paper, its a tie!");
            }
            else
            {
                console.log("cpu chose scissors, you lose!");
                playerHealth.querySelector("div").remove();
                cpuScore++;
            }
            break;

        case "scissors":
            playerImage.src = "./images/scissors.png";
            if (computerChoice === "paper")
            {
                console.log("cpu chose paper, you win!");
                cpuHealth.querySelector("div").remove();
                playerScore++;
            }
            else if (computerChoice === "scissors")
            {
                console.log("cpu chose scissors, its a tie!");
            }
            else
            {
                console.log("cpu chose rock, you lose!");
                playerHealth.querySelector("div").remove();
                cpuScore++;
            }
            break;
            default:
                console.log("invalid option, please try again.")
    }
    if (playerScore === 5)
    {
        winningtext.textContent = "I knew you'd win!!!";
        gameEnd();
    }
    if (cpuScore === 5)
    {
        winningtext.textContent = "You're a loser.";
        gameEnd();
    }
}

function getComputerChoice()
{
    let random = Math.floor(Math.random() * 3);
    let array = ["rock","paper","scissors"];
    return array[random];
}

function gameEnd()
{
    const choicesContainer = document.querySelector(".choicesContainer");
    const choiceButtons = choicesContainer.querySelectorAll("button");

    choiceButtons.forEach(button => button.remove());

    document.querySelector(".player").remove();
    document.querySelector(".cpu").remove();

    const retryButton = document.createElement("button");
    retryButton.className = "retry";
    retryButton.textContent = "Retry";
    retryButton.onclick = () => location.reload();
    choicesContainer.appendChild(retryButton);
}

const choicesContainer = document.querySelector(".choicesContainer");
const buttons = choicesContainer.querySelectorAll("button");
buttons.forEach(button => {
    console.log("found a button!")
    button.addEventListener("click", play);
});