
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
    const rock = document.querySelector("#rock")
    const paper = document.querySelector("#paper")
    const scissor = document.querySelector("#scissor")
    const humanScoreShow=document.querySelector("#humanScore")
    const computerScoreShow=document.querySelector("#computerScore")
    const humanChoiceShow=document.querySelector("#humanChoice")
    const computerChoiceShow=document.querySelector("#computerChoice")
    rock.addEventListener("click",makeHandlerWithParams("rock"))
    paper.addEventListener("click",makeHandlerWithParams("paper"))
    scissor.addEventListener("click",makeHandlerWithParams("scissor"))
    function makeHandlerWithParams(humanChoice, computerChoice){
        return   function(){
            computerChoice=getComputerChoice()
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
        humanScoreShow.textContent=humanScore
        computerScoreShow.textContent=computerScore
        humanChoiceShow.textContent=humanChoice
        computerChoiceShow.textContent=computerChoice
        }
    }


    // gg
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
