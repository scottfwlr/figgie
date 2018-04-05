import Player from 'game/player';

export default class AI extends Player {

  constructor(args) {
    super(args);
    // this.strategy = args.strategy
    this.readStack = this.readStack.bind(this);
    this.readHand = this.readHand.bind(this);
    this.makeMove = this.makeMove.bind(this);
    this.decideValue = this.decideValue.bind(this);
  }

  decideValue(suit) {
    return (Math.floor(2 + Math.random()*6));
  }

  randomSuit() {
    const suits = ['hearts', 'spades', 'diams', 'clubs'];
    return suits[Math.floor(Math.random()*suits.length)];
  }

  readStack() {
    return Cards.cashOf(this.name);
  }

  readHand() {
    return { 
      hearts: this.hand.getElementsByClassName('card-container hearts').length,
      spades: this.hand.getElementsByClassName('card-container spades').length,
      diams: this.hand.getElementsByClassName('card-container diams').length,
      clubs: this.hand.getElementsByClassName('card-container clubs').length
    };
  }

  makeMove() {
    const suit = this.randomSuit();
    const trueValue = this.decideValue(suit);
    const buyLow = trueValue - 1;
    const sellHigh = trueValue + 1;
    // can we buy a card for this much?
    if (Cards.getPrice('sell', suit) < buyLow) {
      return Cards.takeBid(this.name, 'sell', suit);
    } // can we sell it for this much?
    else if (Cards.getPrice('buy', suit) > sellHigh) {
      return Cards.takeBid(this.name, 'buy', suit);
    } // bid on it
    else {
      return this.bidBoth(suit, buyLow, sellHigh);
    }
  }
}