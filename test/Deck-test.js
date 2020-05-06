const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function () {

    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should add cards to the Deck', function () {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const deck = new Deck([card1]);
        deck.addToDeck(card2);
        expect(deck.cards[1]).to.equal(card2);
    })

    it.only('should be able to count the cards within the deck', function () {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array"); 
        const deck = new Deck([card1]);
        deck.addToDeck(card2)
        deck.countDeck()
        expect(deck.cards.length).to.equal(2);
    })
})