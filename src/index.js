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

  window.setTimeout(() => {
    Cards.pickupCards('4-of-clubs', '5-of-clubs', '6-of-clubs', '7-of-clubs')
  }, 1000);
  
  window.setTimeout(() => {
    Cards.pickupCards('4-of-diams', '5-of-diams', '6-of-diams', '7-of-diams')
  }, 3000);
  
  window.setTimeout(() => {
    Cards.pickupCards('4-of-spades', '5-of-spades', '6-of-spades', '7-of-spades')
  }, 5000);

  window.setTimeout(() => {
    Cards.pickupCards('4-of-hearts', '5-of-hearts', '6-of-hearts', '7-of-hearts')
  }, 7000);
  
  window.setTimeout(() => {
    Cards.move(Array.from(document.querySelectorAll('.suit-container .card-container')).map(function(el, i) {
      return Cards.movePair(el, Cards.hand[Object.keys(Cards.hand)[i%4]])
    }));
  }, 10000);




})