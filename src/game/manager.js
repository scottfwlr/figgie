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
    oppOne: document.getElementById('opp-one'),
    oppTwo: document.getElementById('opp-two'),
    oppThree: document.getElementById('opp-three')
  };
}

const setup = () => {
  return {
    deck: newDeck(),
    hand: newHand(),
    players: newPlayers(),

    cardState: entity => ({ 
      entity, 
      x: null, y: null, 
      absX: null, absY: null, 
      offset: null }),

    movePair: (entity, toNode) => ({ entity, toNode }),

    rawMove: ({ entity, toNode }) => toNode.appendChild(entity),

    move: (pairs) => {

      // the FLIP animation technique:
      // https://medium.com/developers-writing/animating-the-unanimatable-1346a5aab3cd


      // get old location (of all cards)

      const cards = Object.values(Cards.deck).map(Cards.cardState);
      

      // within a single animation frame...
      window.requestAnimationFrame(() => {
 
        cards.forEach(card => {
          let { x, y } = card.entity.getBoundingClientRect();
          x = (x === 0 ? -63 : x);
          y = (y === 0 ? -88 : y);
          card.x = x;
          card.y = y;
        });
        // make the DOM changes (of just the moved cards)
        pairs.forEach(pair => Cards.rawMove(pair));

        // get the new location (of all cards)
        cards.forEach(card => {
          let { x, y } = card.entity.getBoundingClientRect();
          x = (x === 0 ? -63 : x);
          y = (y === 0 ? -88 : y);
          card.x = card.x - x;
          card.absX = Math.abs(x);
          card.y = card.y - y;
          card.absY = Math.abs(y);
        });

        // get the elements that changed position
        const moved = cards.filter(({ x, y }) => x !== 0 || y !== 0);
        ;
        // find out how they changed
        let bigX = 0;
        let bigY = 0;

        moved.forEach(({ absX, absY }) => {
          if (absX > bigX) bigX = absX;
          if (absY > bigY) bigY = absY;
        });

        // calculate some offsets to normalise card speed
        moved.forEach(card => card.offset = Math.max((1 - card.absX/bigX), (1 - card.absY/bigY), 0));

        moved.forEach(card => {
          // style the cards to look like they haven't changed
          const tS = `translate3d(${card.x}px, ${card.y}px, 0)`
          const tE = 'translate3d(0,0,0)'
          const keyframes = [
            {transform: tS},
            {transform: tS, offset: card.offset},
            {transform: tE}
          ];
          // animate their transition to the new location
          card.entity.animate(keyframes, { 
            easing: 'ease',
          // introduce some organic-looking randomness
            duration: (700-(card.offset*200)) + (25 - (Math.random()*50))
          });
        });
      });
    },

    pickupCards: (...names) => {
      Cards.move(names.map(name => {
        return Cards.movePair(Cards.deck[name], Cards.hand[name.split('-')[2]]);
      }));
    },

    deal: (name, playerName) => {
      const card = Cards.deck[name];
      const player = Cards.players[playerName];
      Cards.move([Cards.movePair(card, player)]);
    }
  };
};

export default setup;