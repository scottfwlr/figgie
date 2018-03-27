import css from 'css/index';
import { toggleClass }  from 'utils';

import Cards from 'card/cards';
window.Cards = Cards;

document.addEventListener("DOMContentLoaded", () => {
  Cards.setup();

  const header = document.getElementById('header');
  const intro = document.getElementById('intro');
  const game = document.getElementById('game');
  const postgame = document.getElementById('postgame');
  const hand = document.getElementById('figgie-hand');

  game.classList.add('visible');

  Cards.pickUpCard('6-of-hearts');

})