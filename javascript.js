let playerScore = 0;
let cpuScore = 0;

function play()
{
    let playerChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    switch (playerChoice)
    {
        case "rock":
            if (computerChoice === "scissors")
            {
                console.log("cpu chose scissors, you win!");
                playerScore++;
            }
            else if (computerChoice === "rock")
            {
                console.log("cpu chose rock, its a tie!");
            }
            else
            {
                console.log("cpu chose paper, you lose!");
                cpuScore++;
            }
            break;
            
        case "paper":
            if (computerChoice === "rock")
            {
                console.log("cpu chose rock, you win!");
                playerScore++;
            }
            else if (computerChoice === "paper")
            {
                console.log("cpu chose paper, its a tie!");
            }
            else
            {
                console.log("cpu chose scissors, you lose!");
                cpuScore++;
            }
            break;

        case "scissors":
            if (computerChoice === "paper")
            {
                console.log("cpu chose paper, you win!");
                playerScore++;
            }
            else if (computerChoice === "scissors")
            {
                console.log("cpu chose scissors, its a tie!");
            }
            else
            {
                console.log("cpu chose rock, you lose!");
                cpuScore++;
            }
            break;
            default:
                console.log("invalid option, please try again.")
                play();
                break;
    }
    console.log("score is now: ");
    console.log("you: " + playerScore);
    console.log("cpu: " + cpuScore);
}

function getComputerChoice()
{
    let random = Math.floor(Math.random() * 3);
    let array = ["rock","paper","scissors"];
    return array[random];
}

function getHumanChoice()
{
    let answer = prompt("Choose your option: (rock, paper, scissors)");
    answer = answer.toLowerCase();
    return answer;
}

function playGame(num = 5)
{
    playerScore = 0;
    cpuScore = 0;
    for (let i = 0; i < num; i++)
    {
        play();
    }
}