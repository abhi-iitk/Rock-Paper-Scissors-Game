let userScore = 0;
let compScore = 0;

let choice = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userPoints = document.querySelector("#userscore")
let compPoints = document.querySelector("#compscore")

const randomCompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option [randomIdx];
};


choice.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
} );

const draw = () => {
    msg.innerText = "Draw! You both choose same";
    msg.style.backgroundColor = "rgb(39, 62, 113)";

}
const winner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userPoints.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compPoints.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = randomCompChoice();

    if(userChoice === compChoice){
        draw();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
             userWin = compChoice === "rock" ? false : true;
        }
        winner(userWin, userChoice, compChoice);
    }
};