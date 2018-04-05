export default class Player {
  // player
    // can ask about the markets
    // can announce a bid to sell a suit at $price
    // can announce a bid to buy a suit at $price
    // can announce a dual bid

  constructor({ name, hand, markets }) {
    this.name = name;
    this.hand = hand;
    this.markets = markets;

    this.readStack = this.readStack.bind(this);
    this.readHand = this.readHand.bind(this);
    this.bidBuy = this.bidBuy.bind(this);
    this.bidSell = this.bidSell.bind(this);
    this.bidBoth = this.bidBoth.bind(this);
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

  bidBuy(suit, price) {
    return Cards.submitBid({
      player: this.name,
      action: 'buy',
      suit, 
      price
    });
  }

  bidSell(suit, price) {
    return Cards.submitBid({
      player: this.name,
      action: 'sell',
      suit, 
      price
    });
  }

  bidBoth(suit, buy, sell) {
    return this.bidBuy(suit, buy) && this.bidSell(suit, sell);
  }


}