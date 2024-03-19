const score=
JSON.parse(localStorage.getItem('score')) || {
    Wins:0,
    Loss:0,
    Tie:0
};
updateScore();

function pickcomputerMove(){
const randomNumber= Math.random();
let computerMove='';
if(randomNumber>=0 && randomNumber<1/3){
    computerMove='Rock';
}else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='Paper';
}else{
    computerMove='Scissor';
}return computerMove;
}
function game(playerMove){
const computerMove=pickcomputerMove();
let result='';
if(playerMove==='Rock'){
    if(computerMove==='Rock'){
        result='Tie';
    }else if(computerMove==='Paper'){
        result='Lose';
    }else{
        result='Win';
    }
}else if(playerMove==='Paper'){
    if(computerMove==='Rock'){
        result='Win';
    }else if(computerMove==='Paper'){
        result='Tie';
    }else{
        result='Lose';
    }
}else {
    if(computerMove==='Rock'){
        result='Lose';
    }else if(computerMove==='Paper'){
        result='Win';
    }else{
        result='Tie';
    }
}
if(result==='Win'){
    score.Wins++;
}else if(result=='Lose'){
    score.Loss++;
}else{
    score.Tie++;
}
localStorage.setItem('score', JSON.stringify(score));
updateScore();

document.querySelector('.RPS-Result').innerHTML=result;

document.querySelector('.RPS-Moves').innerHTML=`You <img src="${playerMove}-emoji.png" class="icon">. <img src="${computerMove}-emoji.png" class="icon"> Computer`;


}
function updateScore(){
document.querySelector('.RPS-score').innerHTML=`Wins:${score.Wins} Loss:${score.Loss} Tie:${score.Tie} `;
}