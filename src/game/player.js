export default class Player {
  // player
    // can ask about the markets
    // can announce a bid to sell a suit at $price
    // can announce a bid to buy a suit at $price
    // can announce a dual bid

  constructor(hand, markets) {
    this.hand = hand;
    this.markets = markets;

    this.bidBuy = this.bidBuy.bind(this);
    this.bidSell = this.bidBuy.bind(this);
    this.bidBoth = this.bidBuy.bind(this);
  }

  readHand() {
    Array.from(this.hand.getElementsByClassName('card-container'));
    return { hearts, spades, diams, clubs };
  }

  readMarkets() {
    return this.figgie.markets();
  }

  bidBuy(suit, price) {
    if (this.readMarkets()[suit].low < price) {
      this.figgie.submitBid(this.name, this);
    }
  }

  bidSell(suit, price) {

  }

  bidBoth(suit, buy, sell) {

  }

}