import { newDeck } from 'card/cards';
import { byCardValue } from 'utils';

function newHand() {
  return {
    hearts: document.getElementById('hand-hearts'),
    spades: document.getElementById('hand-spades'),
     diams: document.getElementById('hand-diams'),
     clubs: document.getElementById('hand-clubs')
  };
}

function newPlayers() {
  return {
    two: document.getElementById('opp-two'),
    three: document.getElementById('opp-three'),
    four: document.getElementById('opp-four')
  };
}

function newMarkets() {
  return {
    sell: {
      hearts: document.getElementById('sell-box-hearts'),
      spades: document.getElementById('sell-box-spades'),
       diams: document.getElementById('sell-box-diams'),
       clubs: document.getElementById('sell-box-clubs')
    },
    buy: {
      hearts: document.getElementById('buy-box-hearts'),
      spades: document.getElementById('buy-box-spades'),
       diams: document.getElementById('buy-box-diams'),
       clubs: document.getElementById('buy-box-clubs')
    }
  };
}

const setup = (animator) => {
  const suitOf = name => name.split('-')[2];
  const deck = newDeck();
  const hand = newHand();
  const players = newPlayers();
  const markets = newMarkets();

  Object.values(deck).forEach(card => animator.register(card));
  Object.values(markets.buy).forEach(box => box.setAttribute('price', '-'))
  Object.values(markets.sell).forEach(box => box.setAttribute('price', '-'))

  const deal = (name, toName) => {
    if (toName === 'one') {
      animator.move(name, hand[suitOf(name)]);
    }
    else {
      animator.move(name, players[toName]);
    }
  }

  const sort = () => {
    Object.values(hand).forEach(suit => {
      const cards = Array.from(suit.getElementsByClassName('card-container'));
      cards.sort(byCardValue);
      for (let i = 0; i < cards.length; i++) {
        deal(cards[i].id, 'one');
      }
    });
  }

  const bids = {
    sell: {
      hearts: null,
      spades: null,
       diams: null,
       clubs: null
    },
    buy: {
      hearts: null,
      spades: null,
       diams: null,
       clubs: null
    }
  }

  const submitBid = bid => {
    const { player, action, suit, price } = bid;
    markets[action][suit].setAttribute('price', `${price}`);
    bids[action][suit] = bid;
  }

  const buy = (suit) => {
    
  }

  const sell = (suit) => {

  }

  return {
    deck, hand, players, markets, 
    animator, sort,
    deal, submitBid, buy, sell
  };
}

export default setup;