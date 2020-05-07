const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  it('should be a function', function() {
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
    deck.addToDeck(card2);
    expect(round.returnCurrentCard()).to.deep.equal(card1)
    // console.log(round.currentCard);
    round.takeTurn("object");
    round.returnCurrentCard();
    // console.log(round.currentCard);
    expect(round.returnCurrentCard()).to.deep.equal(card2);
  })

  it('should increase the number of turns', function() {
    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
    round.takeTurn("object");
    round.takeTurn("array");
    expect(round.turns).to.equal(2);
  });

  it('should add to the incorrectGuesses array if the guess is INCORRECT', function() {
    const card = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const deck = new Deck([card]);
    const round = new Round(deck);

    round.takeTurn("array");
    expect(round.incorrectGuesses).to.deep.equal([card])
  })

  it('should NOT add to the incorrectGuesses array if the guess is CORRECT', function() {
    const card = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const deck = new Deck([card]);
    const round = new Round(deck);

    round.takeTurn("object");
    expect(round.incorrectGuesses.length).to.equal(0)
  })

  it('should calculate the percentage of correct answers', function() {
    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);

    round.takeTurn("object");
    round.takeTurn("function");
    expect(round.calculatePercentCorrect()).to.equal(50);
  })

  it('should print a dynamic message informing the user that the round is over, their percentage correct, and time', function() {
    const card = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const deck = new Deck([card]);
    const round = new Round(deck);

    round.takeTurn("object")
    let time = round.getTime(20000, 40000);
    expect(round.endRound(time)).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly! It took you 20 seconds!`)
  })

});

