import chai from 'chai';
import spies from 'chai-spies';
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

  it.skip('when a guess is incorrect, it should switch player turn', () => {
    let round = new Round();
    let game = new Game();

    game.switchPlayer(); 

    assert.equal();
    expect(domUpdates.wrongAnswer).to.have.been.called(1);
   });

   it.skip('should check input answer with survey question answer', () => {
    let round = new Round();

    round.checkAnswer(); 

    assert.equal();
   });

   it.skip('should end the current round', () => {
    let round = new Round();

    round.endRound(); 

    assert.equal();
   });

})