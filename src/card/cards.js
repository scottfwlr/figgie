const Cards = {
  suits: ['diams', 'hearts', 'spades', 'clubs'],
  values: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  cardNode: null,

  setCard: () => {
    const original = document.getElementById('card-template')
    const clone = original.cloneNode(true);
    clone.removeAttribute('id');
    Cards.cardNode = clone;
    original.remove();
  },

  newCard: (suit, val) => {
    const card = Cards.cardNode.cloneNode(true);
    const front = card.getElementsByClassName('card-front')[0]
    front.innerHTML = `${val} &${suit};`;
    front.classList.add(suit);
    return card;
  },

  newDeck: target => {
    Cards.suits.forEach(suit => Cards.values.forEach(val => {
      target.appendChild(Cards.newCard(suit, val))
    }))
  }
};


export default Cards;