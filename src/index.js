import reset from 'css/reset'
import base from 'css/base';
import header from 'css/header';
import page from 'css/page';
import card from 'css/card';

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById('header');
  const intro = document.getElementById('intro');
  const game = document.getElementById('game');
  const postgame = document.getElementById('postgame');
  game.classList.add('visible');
})