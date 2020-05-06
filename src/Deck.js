class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  addToDeck(card) {
    this.cards.push(card);
  }
  countDeck() {
    let countedCards = this.cards.length;  
    return countedCards  
  }

}

module.exports = Deck