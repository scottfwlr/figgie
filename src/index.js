// import Figgie from 'game/figgie';
import setup from 'game/manager';
import Player from 'game/player';
import AI from 'game/ai';

import css from 'css/index';
import { show, randomly }  from 'utils';
import webAnimations from 'web-animations-js';

window.show = show;

import { AnimationEntity, Animator } from 'css/animator-class';

document.addEventListener("DOMContentLoaded", () => {
  window.Cards = setup(new Animator());
  window.Play = new Player({ name: 'one', markets: Cards.markets });
  window.AiTwo = new AI({ name: 'two', hand: Cards.players['two'], markets: Cards.markets });
  window.AiThree = new AI({ name: 'three', hand: Cards.players['three'], markets: Cards.markets });
  window.AiFour = new AI({ name: 'four', hand: Cards.players['four'], markets: Cards.markets });

  const header = document.getElementById('header');
  const intro = document.getElementById('intro');
  const game = document.getElementById('game');
  const postgame = document.getElementById('postgame');

  const playGame = () => {
    const suits = ['hearts', 'diams', 'spades', 'clubs'].sort(randomly)
    const vals = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'].sort(randomly);
    const amounts = [8, 10, 10, 12].sort(randomly);
    const gameDeck = [];
    let cardName;

    for (let i = 0; i < suits.length; i++) {
      vals.sort(randomly);
      for (let j = 0; j < amounts[i]; j++) {
        cardName = `${vals[j]}-of-${suits[i]}`;
        gameDeck.push(cardName);
      }
    }

    const playerNames = ['one', 'two', 'three', 'four'];
    gameDeck.sort(randomly);
    for (let k = 0; k < gameDeck.length; k++) {
      Cards.deal(gameDeck[k], playerNames[k%4]);
    }

    Array.from(document.getElementsByClassName('sell-podium')).forEach(podium => {
      podium.addEventListener('click', e => {
        Cards.takeBid('one', 'buy', e.currentTarget.getAttribute('suit'))
      })
    })

    Array.from(document.getElementsByClassName('buy-podium')).forEach(podium => {
      podium.addEventListener('click', e => {
        Cards.takeBid('one', 'sell', e.currentTarget.getAttribute('suit'))
      })
    })
  }

  window._playGame = playGame;

  const startGame = () => {
    Cards.animator.start();
    window.setTimeout(_playGame, 500);
    window.setTimeout(Cards.sort, 1500);
    window.setTimeout(() => window.setInterval(AiTwo.makeMove, 2000), 2000);
    window.setTimeout(() => window.setInterval(AiThree.makeMove, 2000), 2666);
    window.setTimeout(() => window.setInterval(AiFour.makeMove, 2000), 3332);
  };

  window.startGame = startGame;

  show(intro);
  document.getElementById('start-the-game').addEventListener('click', e => {
    e.preventDefault();
    show(game);
    startGame();
  })


})