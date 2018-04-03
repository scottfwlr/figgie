import Player from 'game/player';

export default class Figgie {

  // game
    // four players
    // deal $200 to each
    // play rounds until someone is bankrupt

  // round 
    // from 4 suits select 8, 10, 10, 12 cards
    // take 50 chips from each player
    // deal 10 cards to each player
    // open trading floor
    // close trading floor and do payouts

  // trading
    // players announce bids
    // bids accumulate until a player accepts a bid
    // when a bid is accepted, all markets are cleared


  constructor() {
    this.players = {
        one: { cash: 200 },
        two: { cash: 200 },
      three: { cash: 200 },
       four: { cash: 200 }
    }

  }



}
