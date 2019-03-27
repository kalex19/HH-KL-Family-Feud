import $ from 'jquery';
import Game from './Game.js';
import Round from './Round.js';



export default {

 clearInputField() {
   $('.answerInput').val('')
 },

 errorMessage() {
  $('.errorMessage').css('visibility', 'visible')
},

 wrongAnswer() {
  $('.wrongAnswer').css('visibility', 'visible')
},

 removeWrongAnswer() {
  $('.wrongAnswer').css('visibility', 'hidden')
},

 tryAgain() {
  $('.tryAgain').css('visibility', 'visible')
},

popUp() {
  $('.gamePopUp').append( `<section class="startGamePopUp">
   <h2>Welcome to Family Feud!</h2>
   <div class='playerNames'>
   <p>Please Enter Player Names.</p>
   <div class='popUpPlayers'>
   <label class="labelName">Player 1 Name</label>
   <input class="nameOne"></input>
   </div>
   <div class='popUpPlayers'>
   <label class="labelName">Player 2 Name</label>
   <input class="nameTwo"></input>
   </div>
   <button id="startBtn">Start Game</button>
   </section>`
   )},

  appendQuestion(question) {
    console.log(question);
    $('#surveyQuestion').text(question);
  },

  highlightPlayer(playerId) {
    if(playerId === 1) {
      $('#nameOne').css('width', '300px')
     $('#nameOne').css('height', '80px')
     $('#nameOne').css('border-radius', '1%')
     $('#nameOne').css('box-shadow','inset 0 0 50px #fff, 0 0 50px red, -10px 0 80px blue, 10px 0 80px #fff')
    }

    if(playerId === 2){
      $('#nameTwo').css('width', '300px')
     $('#nameTwo').css('height', '80px')
     $('#nameTwo').css('border-radius', '1%')
     $('#nameTwo').css('box-shadow','inset 0 0 50px #fff, 0 0 50px red, -10px 0 80px blue, 10px 0 80px #fff') 
        } 
  },

  // unhighlightPlayer(playerId) {
  //    if(playerId === 1) {
  //     $('#nameOne').css('');
  //   }
  //      if(playerId === 2) {
  //     $('#nameTwo').css('');
  //   }
  // },

  changeScore(score, playerId) {
     if(playerId === 1) {
        $('#scoreOne').text(score);
    }

    if(playerId === 2) {
          $('#scoreTwo').text(score);
       }  
  },

  progressBar(roundNumber) {
    console.log('roundnumber',roundNumber);
    if(roundNumber === 1){
      $('#progress').html('<progress id="bar" max="100" value="25"> </progress>');
    } else if(roundNumber === 2){
       $('#progress').html('<progress id="bar" max="100" value="50"> </progress>');
       $('#round').text("Round 2");
    } else if(roundNumber === 3){
      console.log('happy');
       $('#progress').html('<progress id="bar" max="100" value="75"> </progress>');
       $('#round').text("Lightning ⚡ Round");
    } else if(roundNumber === 4){
       $('#progress').html('<progress id="bar" max="100" value="100"> </progress>');
       $('#round').text("Lightning ⚡ Round");
    }
  },

  appendAnswer(answerSet, answer, respondents) {
      console.log(answer)
      console.log(respondents)
      console.log(answer[1])
      console.log(respondents[1])
      console.log(answerSet[1])
     

    if(answerSet[0].answer === answer) {
      $('#responseOne').text('');
       $('#responseOne').append(`${answer}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${respondents}`);
    }
    
    if(answerSet[1].answer === answer) {
      $('#responseTwo').text('');
      $('#responseTwo').append(`${answer}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${respondents}`); 
    }

    if(answerSet[2].answer === answer) {
      $('#responseThree').text('');
     $('#responseThree').append(`${answer}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${respondents}`); 
  }
  },

  multiplierMessage(player1, player2) {
    console.log('lower score1', player1.score);
    console.log('lower score2', player2.score);
    let player;
    if(player1.score < player2.score) {
      player = player1;
    } else {
      player = player2;
    }

    $('.gamePopUp').append(`<section class="selectMultiplier">
      <h2 class="currentPlayer"></h2>
      <p class="chooseMultiplier">${player}, choose your point multiplier!</p>
      <div>
        <input type="radio" name="1" value="1">
        <label for="1">1</label>
        <input type="radio" name="2" value="2">
        <label for="2">2</label>
        <input type="radio" name="3" value="3">
        <label for="3">3</label>
        <input type="radio" name="4" value="4">
        <label for="4">4</label>
        <input type="radio" name="5" value="5">
        <label for="5">5</label>
      </div>
      <button id="submitMultiplier">Start Lightning Round!</button>
    </section>`)
  },

  winnerMessage(player1, player2) {
    console.log('winner', player1.score);
    console.log('winner', player2.score);

    if(player1.score > player2.score){
     $('.winnerMessage').append(`<h1 class="winner">${player1.name}IS THE WINNER!</h1>
      <h3>Want To Play Again?</h3>
      <button id="newGameBtn">New Game</button>
        `);
    } else {
      $('.winnerMessage').append(`<div id='winner'><h1 class="winner">${player2.name}, you're the WINNER!</h1>
      <h3>Want To Play Again?</h3>
      <button id="newGameBtn">New Game</button></div>
        `);
    };

  },


}
