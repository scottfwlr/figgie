import reset from 'css/reset'
import base from 'css/base';
import header from 'css/header';
import page from 'css/page';
import card from 'css/card';

import { cardMaker } from 'deck';

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById('header');
  const intro = document.getElementById('intro');
  const game = document.getElementById('game');
  const postgame = document.getElementById('postgame');

  game.classList.add('visible');

  const toggle = property => element => {
    element.classList.contains(property) ?
    element.classList.remove(property) :
    element.classList.add(property)
  }

  const cards = Array.from(document.getElementsByClassName('card'));
  const flip = () => cards.forEach(toggle('flipped'));
  window.flip = flip;
  window.cardMaker = cardMaker;

})