import { newDeck } from 'card/cards';

function newHand() {
  return {
    hearts: document.getElementsByClassName('suit-container hearts')[0],
    spades: document.getElementsByClassName('suit-container spades')[0],
     diams: document.getElementsByClassName('suit-container diams')[0],
     clubs: document.getElementsByClassName('suit-container clubs')[0]
  };
}

function newPlayers() {
  return {
    two: document.getElementById('opp-two'),
    three: document.getElementById('opp-three'),
    four: document.getElementById('opp-four')
  };
}

const setup = (animator) => {
  const suitOf = name => name.split('-')[2];
  const deck = newDeck();
  const hand = newHand();
  const players = newPlayers();
  
  Object.values(deck).forEach(card => animator.register(card));

  const deal = (name, playerName) => {
    if (playerName === 'one') {
      animator.move(name, hand[suitOf(name)]);
    }
    else {
      animator.move(name, players[playerName]);
    }
  }

  const pickupCards = (...names) => {
    names.forEach(name => deal(name, 'one'));
  }

  return {
    deck, hand, players, animator, deal, pickupCards
  };
}

export default setup;