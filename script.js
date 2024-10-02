console.log("hello mtrfcker")
function getComputerChoice(){
    switch (Math.floor(Math.random()*3))
    {
        case 0 :
            return "ROCK"
        case 1:
            return "Paper"
        case 2:
            return "SCİSSOR"
    }
}
function getHumanChoice(){
    return prompt("what you gonna chose","rock","paper","scissors")
}
getHumanChoice()
console.log(getComputerChoice())