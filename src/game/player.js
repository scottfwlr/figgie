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

    this.readHand = this.readHand.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.bidBuy = this.bidBuy.bind(this);
    this.bidSell = this.bidSell.bind(this);
    this.bidBoth = this.bidBoth.bind(this);
  }

  readHand() {
    return { 
      hearts: this.hand.getElementsByClassName('card-container hearts').length,
      spades: this.hand.getElementsByClassName('card-container spades').length,
      diams: this.hand.getElementsByClassName('card-container diams').length,
      clubs: this.hand.getElementsByClassName('card-container clubs').length
    };
  }

  getPrice(action, suit) {
    const price = this.markets[action][suit].getAttribute('price');
    if (price === "-") {
      if (action === "sell") {
        return Infinity;
      }
      else {
        return -Infinity
      }
    }
    else {
      return price;
    }
  }

  bidBuy(suit, price) {
    if (this.getPrice('buy', suit) < price) {
      Cards.submitBid({
        player: this.name,
        action: 'buy',
        suit, 
        price
      });
    }
  }

  bidSell(suit, price) {
    if (this.getPrice('sell', suit) > price) {
      Cards.submitBid({
        player: this.name,
        action: 'sell',
        suit, 
        price
      });
    }
  }

  bidBoth(suit, buy, sell) {
    this.bidBuy(suit, buy);
    this.bidSell(suit, sell);
  }

  buy(suit) {

  }

  sell(suit) {

  }

}