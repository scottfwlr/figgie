import { newDeck } from 'card/cards';

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
  const market = newMarkets();
  
  Object.values(deck).forEach(card => animator.register(card));

  const deal = (name, toName) => {
    if (toName === 'one') {
      animator.move(name, hand[suitOf(name)]);
    }
    else {
      animator.move(name, players[toName]);
    }
  }

  const bid = (action, suit, price) => {
    market[action][suit].setAttribute('price', `$${price}`);
  }

  const buy = (suit) => {

  }

  const sell = (suit) => {

  }

  return {
    deck, hand, players, market, 
    animator, 
    deal, bid, buy, sell
  };
}

export default setup;