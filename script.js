const scorE0=document.getElementById("score-0");
const scorE1=document.getElementById('score-1');
const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');


const currentScoreE0=document.getElementById('current-0')
const currentScoreE1=document.getElementById('current-1')

const diceEl=document.querySelector('.dice');
const newGameBtn=document.querySelector('.btn-new')
const rollDicBtn=document.querySelector('.btn-roll')
const holdBtn=document.querySelector('.btn-hold')



let scores,currentScore,playingState,activePlayer;
//TODO: Rolling dice functionality
const init=function(){
     scores=[0,0];
    currentScore=0;
    activePlayer=0;
    playingState=true;
    scorE0.textContent=0;
    scorE1.textContent=0;
    currentScoreE0.textContent=0;
    currentScoreE1.textContent=0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    document.querySelector('.player-win').classList.add('hidden');

}
init();


const switchPlayer=function(){
    document.getElementById(`current-${activePlayer}`).textContent=0;

    activePlayer= activePlayer===0?1:0;
    currentScore=0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active'); 
}


rollDicBtn.addEventListener('click',function(){
if(playingState){    //TODO: generate a random dice
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
    switchPlayer();
    document.getElementById(`current-${activePlayer}`).textContent=currentScore;
}}

else{
    null;
}
});

holdBtn.addEventListener('click',function(){
    if(playingState){console.log("click");
    scores[activePlayer]+=currentScore;
    document.querySelector(`#score-${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer]>=100){

        playingState=false;
        diceEl.classList.add('hidden');
        document.querySelector('.player-win').classList.remove('hidden');
        document.querySelector('.player-win').textContent=`player ${activePlayer+1} win🏆,let's play again🔄`;
        document.querySelector(`.player-${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player-${activePlayer}`).classList.add('player--winner');

        switchPlayer();

    }
        switchPlayer();

    

 } else{
    null;
 }
});


newGameBtn.addEventListener('click',init);