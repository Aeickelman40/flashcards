const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const protoTypeQuestions = require('../src/data')

describe('Game', function() {
  it('should be a function', function() {
    expect(Game).to.be.a('function')
  })

  it('should be an instance of a Game', function() {
    const game = new Game() ;
    expect(game).to.be.an.instanceof(Game);
  })

  it('should be able to start a game', function() {
    const cards = protoTypeQuestions.prototypeData
    const deck = new Deck(cards);  
    const round = new Round(deck);
    const game = new Game(round);
    game.start();
    expect(deck.cards.length).to.equal(30);
  })
    
})