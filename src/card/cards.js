

const Cards = {
  suits: ['diams', 'hearts', 'spades', 'clubs'],
  values: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  deck: {},
  hand: {},
  cardNode: null,
  deckHolder: document.createDocumentFragment(),

  nameOfCard: (suit, val) => `${val}-of-${suit}`,

  suitValFromName: name => {
    const [val, , suit] = name.split('-');
    return { suit, val }
  },

  setCardNode: () => {
    Cards.cardNode = document.adoptNode(document.getElementById('card-template'));
    Cards.cardNode.removeAttribute('id');
  },

  newCard: (suit, val) => {
    const card = Cards.cardNode.cloneNode(true);
    card.id = Cards.nameOfCard(suit, val);
    const front = card.getElementsByClassName('card-front')[0]
    front.innerHTML = `${val} &${suit};`;
    front.classList.add(suit);
    return card;
  },

  newDeck: () => {
    Cards.suits.forEach(suit => Cards.values.forEach(val => {
      const name = Cards.nameOfCard(suit, val);
      Cards.deckHolder.appendChild(Cards.newCard(suit, val));
      Cards.deck[name] = Cards.deckHolder.getElementById(name);
    }));
  },

  setHands: () => {
    Cards.suits.forEach(suit => {
      Cards.hand[suit] = document.getElementsByClassName(`suit-container ${suit}`)[0]
    });
  },


  setup: () => {
    Cards.setCardNode();
    Cards.setHands();
    Cards.newDeck();
  },

  rawMove: (name, toNode) => toNode.appendChild(Cards.deck[name]),

  move: (name, toNode) => {
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
    
    const pairs = names.map(name => {
      let { suit } = Cards.suitValFromName(name);
      return { name, suit };
    })
    Cards.moves(pairs)

  }

};


export default Cards;