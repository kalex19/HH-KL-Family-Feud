import chai from 'chai';
import spies from 'chai-spies';
import Game from '../src/Game.js';
import Round from '../src/Round.js';
import Player from '../src/Player.js';
import domUpdates from '../src/domUpdates.js';

chai.use(spies);
const assert = chai.assert;
const expect = chai.expect;

describe('Round', function() {

  beforeEach(function() {
    chai.spy.on(domUpdates, 'appendAnswer', () => true);
    chai.spy.on(domUpdates, 'changeScore', () => true);
    chai.spy.on(domUpdates, 'wrongAnswer', () => true);
    chai.spy.on(domUpdates, 'errorMessage', () => true);
    chai.spy.on(domUpdates, 'clearInputField', () => true);
    chai.spy.on(domUpdates, 'highlightPlayer', () => true);
    chai.spy.on(domUpdates, 'unhighlightPlayer', () => true);
  });

  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('Round is a function', () => {

  assert.isFunction(Round);
  });

  it('should instantiate a new Round', () => {
    let round = new Round;

    assert.instanceOf(round, Round); 
  });

  it('should accept a random survey with answers', () => {
     let round = new Round({});

     round.questionSet.answers = [{answer: 'watch'}];
     assert.deepEqual(round.questionSet.answers, [{answer: 'watch'}]);
   });

  it('should have a correct answer default of zero', () => {
    let round = new Round();

    assert.equal(round.answerCount, 0)
   });

  it('when a guess is correct, it should add to answer count and update the dom', () => {
    let player = new Player();
    let round = new Round({});
    round.questionSet.answers = [{answer: 'watch'}]
    assert.equal(round.answerCount, 0)

    round.checkAnswer('watch', player);

    assert.equal(round.answerCount, 1);
    expect(domUpdates.appendAnswer).to.have.been.called(1);
   });

  it('when a guess is incorrect, it should switch player turn', () => {
    let player1 = new Player('katie', 1);
    let player2 = new Player('hannah', 2);
    let round = new Round({});
    let game = new Game();
    game.player1 = player1;
    game.player2 = player2;
    round.questionSet.answers = [{answer: 'watch'}]

    round.checkAnswer('planner', player1, game);
    game.switchPlayer(player1, player2); 
    expect(domUpdates.wrongAnswer).to.have.been.called(1);
   });

   it('should alert player if no guess is entered', () => {  
    let player1 = new Player('katie', 1);
    let player2 = new Player('hannah', 2);
    let game = new Game();
    let round = new Round({});
    game.player1 = player1;
    game.player2 = player2;
    round.questionSet.answers = [{answer: 'watch'}]

    round.checkAnswer('', player1, game); 
    expect(domUpdates.errorMessage).to.have.been.called(1);
   });

   it('should end the current round after three correct answers and reset the anser count', () => {
    let round = new Round({});
    let player = new Player();
    let game = new Game();
 
    round.questionSet.answers = [{answer: 'watch'}, {answer: 'alarm clock'}, {answer: 'calendar'}]

    assert.equal(round.answerCount, 0)

    round.checkAnswer('watch', player);

    assert.equal(round.answerCount, 1);

    round.checkAnswer('alarm clock', player);

    assert.equal(round.answerCount, 2);

    round.checkAnswer('calendar', player);

    assert.equal(round.answerCount, 0);
  
   });

})