import { newDeck } from 'card/cards';
import { byCardValue } from 'utils';

function newHand() {
  return {
    hearts: document.getElementById('hand-hearts'),
    spades: document.getElementById('hand-spades'),
     diams: document.getElementById('hand-diams'),
     clubs: document.getElementById('hand-clubs')
  };
}

function newPlayers() {
  return {
    two: document.getElementById('opp-two'),
    three: document.getElementById('opp-three'),
    four: document.getElementById('opp-four')
  };
}

function newMarkets() {
  return {
    sell: {
      hearts: document.getElementById('sell-box-hearts'),
      spades: document.getElementById('sell-box-spades'),
       diams: document.getElementById('sell-box-diams'),
       clubs: document.getElementById('sell-box-clubs')
    },
    buy: {
      hearts: document.getElementById('buy-box-hearts'),
      spades: document.getElementById('buy-box-spades'),
       diams: document.getElementById('buy-box-diams'),
       clubs: document.getElementById('buy-box-clubs')
    }
  };
}

const setup = (animator) => {
  const suitOf = name => name.split('-')[2];
  const deck = newDeck();
  const hand = newHand();
  const players = newPlayers();
  const markets = newMarkets();
  Object.values(deck).forEach(card => animator.register(card));
  Object.values(markets.buy).forEach(box => {
    box.setAttribute('price', '-');
    animator.register(box);
  });
  Object.values(markets.sell).forEach(box => {
    box.setAttribute('price', '-');
    animator.register(box);
  });
  Array.from(document.getElementsByClassName('stack')).forEach(stack => animator.register(stack));

  const cash = document.createElement('div');
  cash.setAttribute('id', 'cash');
  cash.innerText = "💵";
  cash.classList.add('hidden')
  animator.register(cash);


  const deal = (name, toName) => {
    if (toName === 'one') {
      animator.move(name, hand[suitOf(name)]);
    }
    else {
      animator.move(name, players[toName]);
    }
  }

  const handOf = name => {
    if (name === 'one') {
      hand
    }
  }

  const sort = () => {
    Object.values(hand).forEach(suit => {
      const cards = Array.from(suit.getElementsByClassName('card-container'));
      cards.sort(byCardValue);
      for (let i = 0; i < cards.length; i++) {
        deal(cards[i].id, 'one');
      }
    });
  }

  const cardOfSuitFrom = (suit, name) => {
    let cardArray;
    if (name === 'one') {
      cardArray = Array.from(hand[suit].getElementsByClassName('card-container'));
    }
    else {
      debugger
      cardArray = Array.from(players[name].getElementsByClassName(`card-container ${suit}`));
    }
    return cardArray[Math.floor(Math.random()*cardArray.length)];
  }

  const bids = {
    sell: {
      hearts: null,
      spades: null,
       diams: null,
       clubs: null
    },
    buy: {
      hearts: null,
      spades: null,
       diams: null,
       clubs: null
    }
  }

  const getPrice = (action, suit) => {
    const price = markets[action][suit].getAttribute('price');
    if (price === "-") {
      if (action === "sell") {
        return Infinity;
      }
      else {
        return -Infinity
      }
    }
    else {
      return price;
    }
  }

  const submitBid = bid => {
    const { player, action, suit, price } = bid;
    const currentPrice = getPrice(action, suit);
    const winner = (action === 'sell') ? (price < currentPrice) : (price > currentPrice);
    if (winner) {
      markets[action][suit].setAttribute('price', `${price}`);
      bids[action][suit] = bid;
      return true;
    }
    else {
      return false;
    }
  }

  const inverseOf = { buy: 'sell', sell: 'buy' };

  const takeBid = (name, action, suit) => {
    const sideTwo = bids[inverseOf[action]][suit];
    const sideOne = { player: name, action, suit, price: sideTwo.price }
    const podium = document.getElementById(`${sideTwo.action}-box-${suit}`);
    const seller = (sideTwo.action === 'sell') ? (sideTwo) : (sideOne);
    const buyer = (sideTwo.action === 'buy') ? (sideTwo) : (sideOne);
    const card = cardOfSuitFrom(suit, seller.player);
    // const cash = create cash emoji node here

    if (seller && buyer && card && podium) {
      stackOf(buyer.player).appendChild(cash); // hacky as hell!
      cash.classList.remove('hidden'); // so hacky!
      animator.move(card.id, podium);
      animator.move(cash.id, podium);

      const finalize = () => {
        debugger
        deal(card.id, buyer.player);
        animator.move(cash.id, stackOf(seller.player));
      }

      window.setTimeout(finalize, 600)
      window.setTimeout(() => cash.classList.add('hidden'), 1200);
    }

  }

  const stackOf = name => {
    if (name === 'one') {
      return document.getElementById('player-stack');
    }
    else {
      return players[name].parentElement.getElementsByClassName('stack')[0];
    }
  }

  const cashOf = name => Number(stackOf(name).getAttribute('money'));

  const changeCash = (name, amount) => {
    const stack = stackOf(name)
    const currentCash = Number(stack.getAttribute('money'));
    stack.setAttribute('money', currentCash + amount);
  } 

  return {
    deck, hand, players, markets, bids,
    animator, sort, deal, 
    stackOf, cashOf, changeCash, cardOfSuitFrom,
    getPrice, submitBid, takeBid
  };
}

export default setup;