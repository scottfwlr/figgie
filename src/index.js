import css from 'css/index';
import { toggleClass }  from 'utils';
import webAnimations from 'web-animations-js';
import setup from 'card/cards';

document.addEventListener("DOMContentLoaded", () => {
  window.Cards = setup();

  const header = document.getElementById('header');
  const intro = document.getElementById('intro');
  const game = document.getElementById('game');
  const postgame = document.getElementById('postgame');
  const hand = document.getElementById('figgie-hand');

  game.classList.add('visible');

  const clubNames = ['4-of-clubs', '5-of-clubs', '6-of-clubs', '7-of-clubs'];
  const diamNames = ['4-of-diams', '5-of-diams', '6-of-diams', '7-of-diams'];
  const spadeNames = ['4-of-spades', '5-of-spades', '6-of-spades', '7-of-spades'];
  const heartNames = ['4-of-hearts', '5-of-hearts', '6-of-hearts', '7-of-hearts'];

  window.setTimeout(() => Cards.pickupCards(...clubNames), 500);
  
  window.setTimeout(() => Cards.pickupCards(...diamNames), 1500);
  
  window.setTimeout(() => Cards.pickupCards(...spadeNames), 2500);

  window.setTimeout(() => Cards.pickupCards(...heartNames), 3500);
  
  window.setTimeout(() => {
    Cards.move(Array.from(document.querySelectorAll('.suit-container .card-container')).map(function(el, i) {
      return Cards.movePair(el, Cards.hand[Object.keys(Cards.hand)[i%4]])
    }));
  }, 5000);

  window.setTimeout(() => {
    Cards.pickupCards(...clubNames.sort(), ...diamNames.sort(), ...spadeNames.sort(), ...heartNames.sort())
  }, 7000);


})