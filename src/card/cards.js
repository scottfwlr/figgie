
const didMove = ({ oldRect, newRect }) => {
  return !(oldRect.top === newRect.top &&
  oldRect.right === newRect.right &&
  oldRect.bottom === newRect.bottom &&
  oldRect.left === newRect.left &&
  oldRect.width === newRect.width &&
  oldRect.height === newRect.height &&
  oldRect.x === newRect.x &&
  oldRect.y === newRect.y)
};

const howMoved = ({ oldRect, newRect }) => ({
  top: oldRect.top - newRect.top,
  right: oldRect.right - newRect.right,
  bottom: oldRect.bottom - newRect.bottom,
  left: oldRect.left - newRect.left,
  width: oldRect.width - newRect.width,
  height: oldRect.height - newRect.height,
  x: oldRect.x - newRect.x,
  y: oldRect.y - newRect.y
});

const movePair = (entity, toNode) => ({ entity, toNode, oldRect: null, newRect: null });

const rawMove = ({ entity, toNode }) => toNode.appendChild(entity);


function newDeck() {
  const suits = ['diams', 'hearts', 'spades', 'clubs'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const cardNode = document.adoptNode(document.getElementById('card-template'));
  cardNode.removeAttribute('id');

  const newCard = (suit, value) => {
    const card = cardNode.cloneNode(true);
    card.id = `${value}-of-${suit}`;
    const front = card.getElementsByClassName('card-front')[0]
    front.innerHTML = `${value} &${suit};`;
    front.classList.add(suit);
    return card;
  };

  const deck = {};
  suits.forEach(suit => {
    values.forEach(value => {
      deck[`${value}-of-${suit}`] = newCard(suit, value);
    });
  });

  return deck;
}  

function newHand() {
  return {
    hearts: document.getElementsByClassName('suit-container hearts')[0],
    spades: document.getElementsByClassName('suit-container spades')[0],
     diams: document.getElementsByClassName('suit-container diams')[0],
     clubs: document.getElementsByClassName('suit-container clubs')[0]
  };
}

const setup = () => {



  return {
    hand: newHand(),
    deck: newDeck(),
    move: (...pairs) => {

    },
  };
}



 

  
const Cards = {
  moves: (pairs) => {
    window.requestAnimationFrame(() => {
      // get old location
      pairs.forEach(pair => pair.oldRect = pair.entity.getBoundingClientRect());
      // make the DOM changes
      pairs.forEach(pair => Cards.move(pair));
      // get the new location
      pairs.forEach(pair => pair.newRect = pair.entity.getBoundingClientRect());
      // get the elements that changed position
      pairs.filter(didMove).forEach(pair => {
        // find out how they changed

        // style them to look like they haven't changed, and animate
        // their transition to the new location
        pair.entity.animate
      })
    })
  },



  moveCard: (name, toNode) => {
    const card = Cards.deck[name];
    window.requestAnimationFrame(() => {
      console.log('before');
      console.log(card.getBoundingClientRect());
      Cards.rawMove(name, toNode)
      console.log('after');
      console.log(card.getBoundingClientRect());
    });
  },

  pickUpCard: name => {
    const { suit } = Cards.suitValFromName(name);
    Cards.rawMove(name, document.getElementsByClassName(`suit-container ${suit}`)[0]);
  },

  pickUp: (...names) => {
    const pairs = names.map(name => movePair(Cards.deck[name], Cards.hand[Cards.suitValFromName(name).suit]));
    Cards.moves(pairs)
  },

};


export default Cards;