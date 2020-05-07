endRound() {
    const game = new Game();
    if (this.calculatePercentCorrect() > 90) {
      let endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
      console.log(endMessage);
      return endMessage;
    } else {
      let endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! Unfortunately, we require a score of 90 or higher to move on. You will now retake`
      console.log(endMessage);
      game.restartGame();
      return endMessage;
    }
  }

  restartGame() {
    this.roundAmount++;
    const cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

