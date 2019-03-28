import domUpdates from './domUpdates.js';


class LightningRound {
  constructor(survey) {
    this.multiplier = 2;
    this.questionSet = survey;
    this.answerCount = 0;
  };

  checkLRAnswer(guess, currentPlayer, game) {
    let answers = this.questionSet.answers;
    let score;
    domUpdates.clearInputField();
    let correctAnswer = answers.find(answer => (guess.toLowerCase() === answer.answer.toLowerCase())); 
    domUpdates.highlightPlayer(currentPlayer.playerId);
    //needs to iluminate upon game creation for player 1 and should be removed when player switches
    console.log(correctAnswer);
    if (correctAnswer) {
      let score = correctAnswer.respondents;
      let mult = score * this.multiplier
      currentPlayer.addScore(mult);
      this.answerCount++
      domUpdates.appendAnswer(answers, correctAnswer.answer, correctAnswer.respondents);
    } else {
      console.log('incorrect')
      domUpdates.tryAgain();
        // domupdates.unhighlightPlayer(currentPlayer.playerId);  
      };

      console.log(currentPlayer);

      if (guess === '') {
        console.log('empty')
        domUpdates.errorMessage();
      };

      if(this.answerCount === 3){
        this.endRound(game);
      }
    };

    endRound(game) {
      game.createRound();
      this.answerCount = 0;
    };

//multiplier = score * 2
}


export default LightningRound;