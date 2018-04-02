import Figgie from 'game/figgie';
import setup from 'game/manager';

import css from 'css/index';
import { show }  from 'utils';
import webAnimations from 'web-animations-js';

window.show = show;

// import Animator from 'css/animator-class';

document.addEventListener("DOMContentLoaded", () => {
  window.Cards = setup();

  const header = document.getElementById('header');
  const intro = document.getElementById('intro');
  const game = document.getElementById('game');
  const postgame = document.getElementById('postgame');
  const hand = document.getElementById('figgie-hand');

  show(game);

  const showOff = () => {
    const clubNames = ['4-of-clubs', '5-of-clubs', '6-of-clubs', '7-of-clubs'];
    const diamNames = ['4-of-diams', '5-of-diams', '6-of-diams', '7-of-diams'];
    const spadeNames = ['4-of-spades', '5-of-spades', '6-of-spades', '7-of-spades'];
    const heartNames = ['4-of-hearts', '5-of-hearts', '6-of-hearts', '7-of-hearts'];

    window.setTimeout(() => {
      Cards.pickupCards(...clubNames);
      Cards.deal('A-of-clubs', 'oppOne');
      Cards.deal('2-of-clubs', 'oppTwo');
      Cards.deal('3-of-clubs', 'oppThree');
    }, 500);


    window.setTimeout(() => {
      Cards.pickupCards(...diamNames);
      Cards.deal('A-of-diams', 'oppOne');
      Cards.deal('2-of-diams', 'oppTwo');
      Cards.deal('3-of-diams', 'oppThree');
    }, 1500);

    window.setTimeout(() => {
      Cards.pickupCards(...spadeNames);
      Cards.deal('A-of-spades', 'oppOne');
      Cards.deal('2-of-spades', 'oppTwo');
      Cards.deal('3-of-spades', 'oppThree');
    }, 2500);

    window.setTimeout(() => {
      Cards.pickupCards(...heartNames);
      Cards.deal('A-of-hearts', 'oppOne');
      Cards.deal('2-of-hearts', 'oppTwo');
      Cards.deal('3-of-hearts', 'oppThree');
    }, 3500);



    window.setTimeout(() => {
      Cards.move(Array.from(document.querySelectorAll('.suit-container .card-container')).map(function(el, i) {
        return Cards.movePair(el, Cards.hand[Object.keys(Cards.hand)[i%4]])
      }));
    }, 5000);
    window.setTimeout(() => {
      Cards.pickupCards(...clubNames.sort(), ...diamNames.sort(), ...spadeNames.sort(), ...heartNames.sort())
    }, 7000);
  };

  window.showOff = showOff;

  showOff();

})