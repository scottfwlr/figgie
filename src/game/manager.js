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
    hearts: document.getElementById('market-box-hearts'),
    spades: document.getElementById('market-box-spades'),
     diams: document.getElementById('market-box-diams'),
     clubs: document.getElementById('market-box-clubs')
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
    else if (toName === 'market') {
      animator.move(name, market[suitOf(name)]);
    }
    else {
      animator.move(name, players[toName]);
    }
  }

  return {
    deck, hand, players, market, 
    animator, 
    deal
  };
}

export default setup;