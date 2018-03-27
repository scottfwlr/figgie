import css from 'css/index';
import { toggleClass }  from 'utils';

import Cards from 'card/cards';
window.Cards = Cards;

document.addEventListener("DOMContentLoaded", () => {
  Cards.setCard();

  const header = document.getElementById('header');
  const intro = document.getElementById('intro');
  const game = document.getElementById('game');
  const postgame = document.getElementById('postgame');

  game.classList.add('visible');


  Cards.newDeck(document.getElementById('figgie-field'));  
})