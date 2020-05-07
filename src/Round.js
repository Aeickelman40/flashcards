const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck[0];
  }

  returnCurrentCard() {
    this.currentCard = this.deck[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
  }

  getTime(startTime, endTime) {
    let difference = endTime - startTime;
    let gameTime = Math.floor(difference / 1000);
    return gameTime;
  }

  endRound(time) {
    let endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! It took you ${time} seconds!`
    console.log(endMessage)
    return endMessage
  }
}


module.exports = Round