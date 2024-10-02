
function getComputerChoice(){
    switch (Math.floor(Math.random()*3))
    {
        case 0 :
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissor"
    }
}
function getHumanChoice(){
    switch (prompt("what you gonna chose Rock, Paper , Scissor you can just write (r, p, s,)","rock").toLowerCase()){
        case "r":
        case "rock":
            return "rock"
        case "p":
        case "paper":
            return "paper"
        case "scissor":
        case "s":
            return "scissor"
        default:
            return getHumanChoice()
    }
}
function playGame(){
    let humanScore=0;
    let computerScore=0;
    function playRound(humanChoice, computerChoice){
        console.log("Human choice is " + humanChoice + " computer choice is "+ computerChoice)
        switch (humanChoice){
        case "rock":
            switch (computerChoice){
                case "rock":
                    console.log("draw")
                    break
                case "paper":
                    console.log("you lose")
                    computerScore++
                    break
                case "scissor":
                    console.log("you win")
                    humanScore++
                    break
        }
            break;
        case "paper":
            switch (computerChoice){
                case "rock":
                    console.log("you win")
                    humanScore++
                    break;
                case "paper":
                    console.log("draw")
                    break;
                case "scissor":
                    console.log("you lose")
                    computerScore++
                    break;
        }
            break;
        case "scissor":
            switch (computerChoice){
            case "rock":
                console.log("you lose")
                computerScore++
                break;
            case "paper":
                console.log("you win")
                humanScore++
                break;
            case "scissor":
                console.log("draw")
                break;
            }
        }
    console.log("your score is " +humanScore+ " computer score is " + computerScore + " good match.")
    console.log("")
    }
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    if (humanScore>computerScore){
        console.log("You win the score is " +humanScore+ " - "+computerScore)
    }
    else if (computerScore>humanScore){
        console.log("You lose  the score is " +humanScore+ " - "+computerScore)
    }
    else{
        console.log("Draw the score is " +humanScore+ " - "+computerScore)
    }
}
playGame()