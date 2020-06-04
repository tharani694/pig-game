//game with two players//
var activePlayer, dice, globalScore, currentScore,gamePlaying;
gamePlaying = true;

init();

//to randomize 

//to change the dice value setter method using querySelector
//document.querySelector('#current-'+activePlayer).textContent = dice;


//to change the htmml content of name
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';

//getter method using querySelector
//var x = document.querySelector('#score-0').textContent;
//console.log(x);


//changing css content
document.querySelector('.dice').style.display = 'none';


//setting all boxes to 0 at first

document.querySelector('.btn-roll').addEventListener('click',function(){
    //1. to change dice value
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
    
    //2. to disply the dice on weebpage
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3. to update in respective boxes and stop when dice rolls to one
    if(dice !== 1)
    {
        currentScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = currentScore;
        //add to currentscore
    }
    else{
        
        //nextPlayer
        
        nextPlayer();
        }
}
});


        document.querySelector('.btn-hold').addEventListener('click' , function(){
            
            if(gamePlaying){
                globalScore[activePlayer]+= currentScore;
            
            //add in ui
            document.querySelector('#score-' + activePlayer).textContent = globalScore[activePlayer];
           
                                    
            //check if player wins
            if(globalScore[activePlayer] >= 100){
                
                document.querySelector('#name-'+activePlayer).textContent = 'Winner!!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            }else{
                nextPlayer();
            }
            }
            
        });

        document.querySelector('.btn-new').addEventListener('click',init);


       function nextPlayer(){
           activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
           currentScore = 0;//nextplayer
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        /* class List element to remove
        
        document.querySelector('.player-0-panel').classList.remove('active');*/
        
        
        /* classList method to add
        document.querySelector('.player-1-panel').classList.add('active');*/
        
        //classList element to toggle active class in html
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
       }

    function init(){
        activePlayer = 0;
        globalScore =[0,0];
        currentScore = 0;
        
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        
        
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        
        document.querySelector('.player-0-panel').classList.add('active');
        
    }