
export const newCard = (suit, val) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const back = document.createElement('figure');
  back.classList.add('card-back');
  card.appendChild(back);

  const front = document.createElement('figure');
  front.classList.add('card-front', suit);
  
  // temp
  front.innerHTML = `${val} &${suit};`;

  card.appendChild(front);

  const container = document.createElement('div');
  container.classList.add('card-container');
  container.appendChild(card);
  container.id = `${val}-of-${suit}`;

  return container;
}


export const newDeck = () => {
  const suits = ['diams', 'hearts', 'spades', 'clubs'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const deck = {};
  suits.forEach(suit => {
    values.forEach(value => {
      deck[`${value}-of-${suit}`] = newCard(suit, value);
    });
  });

  return deck;
}  

