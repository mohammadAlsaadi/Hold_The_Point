const scorEl=document.querySelector("#score-0");
const scorE2=document.getElementById('score-1');
const player0El=document.querySelector('player-0');
const player1El=document.querySelector('player-1');

const currentScoreE1=document.getElementById('current-0')
const currentScoreE2=document.getElementById('current-1')

const diceEl=document.querySelector('.dice');
const newGameBtn=document.querySelector('.btn-new')
const rollDicBtn=document.querySelector('.btn-roll')
const holdBtn=document.querySelector('.btn-hold')


let currentScore=0;
let activePlayer=0;
diceEl.classList.add('hidden');


//TODO: Rolling dice functionality


rollDicBtn.addEventListener('click',function(){
    //TODO: generate a random dice
    const dice= Math.trunc((Math.random()*6)+1);

    //TODO: display the dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice${dice}.png`;

    //TODO: Check for rolled 1 : if true ->switch to next player
if(dice!==1){
    currentScore=currentScore+dice
    console.log(currentScore);
    document.getElementById(`current-${activePlayer}`).textContent=currentScore;


}
else{
    
    document.getElementById(`current-${activePlayer}`).textContent=0;

    activePlayer= activePlayer===0?1:0;
    currentScore=0;

    
    document.getElementById(`current-${activePlayer}`).textContent=currentScore;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');



}

})