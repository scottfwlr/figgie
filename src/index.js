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


})