let humanScore=0;
let computerScore=0;
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

console.log(getHumanChoice())
console.log(getComputerChoice())