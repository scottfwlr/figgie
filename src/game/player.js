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

    this.bidBuy = this.bidBuy.bind(this);
    this.bidSell = this.bidSell.bind(this);
    this.bidBoth = this.bidBoth.bind(this);
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