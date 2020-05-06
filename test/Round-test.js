const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  it('should be a function', function() {
    const card = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const deck = new Deck(card)
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of a Round', function() {
    const card = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const deck = new Deck(card)
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  })

  it('should return the current card being played', function() {
    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const deck = new Deck([card1])
    const round = new Round(deck);
    round.returnCurrentCard();
    console.log(round.currentCard);
    deck.addToDeck(card2);
    round.takeTurn("object");
    round.returnCurrentCard();
    console.log(round.currentCard);
    expect(round.returnCurrentCard()).to.deep.equal(card2);
  })

});

