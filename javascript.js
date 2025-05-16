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
            }
            else if (computerChoice === "rock")
            {
                console.log("cpu chose rock, its a tie!");
            }
            else
            {
                console.log("cpu chose paper, you lose!");
            }
            break;
            
        case "paper":
            if (computerChoice === "rock")
            {
                console.log("cpu chose rock, you win!");
            }
            else if (computerChoice === "paper")
            {
                console.log("cpu chose paper, its a tie!");
            }
            else
            {
                console.log("cpu chose scissors, you lose!");
            }
            break;

        case "scissors":
            if (computerChoice === "paper")
            {
                console.log("cpu chose paper, you win!");
            }
            else if (computerChoice === "scissors")
            {
                console.log("cpu chose scissors, its a tie!");
            }
            else
            {
                console.log("cpu chose rock, you lose!");
            }
            break;
            default:
                console.log("invalid option, please try again.")
                play();
    }
}

function getComputerChoice()
{
    let random = Math.floor(Math.random() * 3);
    console.log(random);
    let array = ["rock","paper","scissors"];
    return array[random];
}

function getHumanChoice()
{
    let answer = prompt("Choose your option: (rock, paper, scissors)");
    answer = answer.toLowerCase();
    return answer;
}