class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(this.cards === undefined) {
      return undefined;
    }
    const min = 0;
    const max = this.cards.length;
    let randomNumber;

    this.cards.forEach(() => {
      randomNumber = Math.floor(Math.random() * (max - min)) + min; 
      
      const selectedCard = this.cards[randomNumber];

      this.cards.splice(randomNumber, 1);
      this.cards.push(selectedCard)
    });
  }

  checkIfPair(card1, card2) {
  if(card1 === card2) {
    this.pairsGuessed++;
    return true;
    }
    this.pairsClicked++
  return false;
}

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } 
    return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
