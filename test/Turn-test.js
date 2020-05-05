const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn('pug', Card);
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn with 2 arguments', function() {
    const turn = new Turn('pug', Card);
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should return a guess', function() {
    const turn = new Turn('pug', Card);
    turn.returnGuess();
    expect(turn.guess).to.equal('pug');
  })

  it('should return a card', function() {
    const turn = new Turn('pug', Card);
    turn.returnCard();
    expect(turn.card).to.equal(Card);
  })

  it('should evaluate a guess to a boolean based on the answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should give feedback to whether the guess was correct or not', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    turn.evaluateGuess(card);
    expect(turn.giveFeedback()).to.equal('correct!');
  })
});