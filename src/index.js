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

  show(game);


  const pickupCards = (...names) => {
    names.forEach(name => Cards.deal(name, 'one'));
  }

  const showOff = () => {
    const clubNames = ['4-of-clubs', '6-of-clubs', '7-of-clubs', '10-of-clubs', 'K-of-clubs'].sort(randomly);
    const diamNames = ['4-of-diams', '5-of-diams', '7-of-diams', 'J-of-diams'].sort(randomly);
    const spadeNames = ['4-of-spades', '5-of-spades', '6-of-spades', '7-of-spades', '9-of-spades'].sort(randomly);
    const heartNames = ['4-of-hearts', '5-of-hearts', '6-of-hearts', '7-of-hearts'].sort(randomly);

    window.setTimeout(() => {
      pickupCards(...clubNames);
      Cards.deal('A-of-clubs', 'two');
      Cards.deal('2-of-clubs', 'three');
      Cards.deal('3-of-clubs', 'four');
    }, 500);


    window.setTimeout(() => {
      pickupCards(...diamNames);
      Cards.deal('A-of-diams', 'two');
      Cards.deal('2-of-diams', 'three');
      Cards.deal('3-of-diams', 'four');
    }, 1000);

    window.setTimeout(() => {
      pickupCards(...spadeNames);
      Cards.deal('A-of-spades', 'two');
      Cards.deal('2-of-spades', 'three');
      Cards.deal('3-of-spades', 'four');
    }, 1500);

    window.setTimeout(() => {
      pickupCards(...heartNames);
      Cards.deal('A-of-hearts', 'two');
      Cards.deal('2-of-hearts', 'three');
      Cards.deal('3-of-hearts', 'four');
    }, 2000);

    window.setTimeout(() => {
      Cards.sort()
    }, 3200);
  };

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
  }

  window.showOff = showOff;
  window.playGame = playGame;
  Cards.animator.start();
  // showOff();
  window.setTimeout(playGame, 500);
  window.setTimeout(Cards.sort, 1500);
  window.setTimeout(() => window.setInterval(AiTwo.makeMove, 3000), 2000);
  window.setTimeout(() => window.setInterval(AiThree.makeMove, 3000), 3000);
  window.setTimeout(() => window.setInterval(AiFour.makeMove, 3000), 4000);


})