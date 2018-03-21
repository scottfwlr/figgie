# Figgie

### Background

Figgie is a four-player card game similar to poker, invented by Jane Street to simulate fast-paced market trading. Players buy and sell suits of cards like they are stocks, using authentic stock trader terminology. The rules are simple and rounds are only a few minutes long, but play is nevertheless complex enough to host many real-world trading strategies. The frenetic pace and tactical depth makes this an extremely addictive game.

[See here](https://www.janestreet.com/2014/04/22/figgie/) for more detailed rules.

### MVPs
- Tracks a player's cards, bid prices, carries out buying/selling/transferring of cards
- Shows the player their hand, the prices of suits, and provides usable/intuitive interface for playing
- Play against computer players implementing various strategies
- See post-game information in "stock-market-like" visualisation
- Always-accessible instructions reference, post-game analysis
- Production readme highlighting the impressive parts

### Technologies, Libraries, APIs
This single-page app will consist of three screens: an introductory/instructions screen, the game screen, and the post-game screen.

The game (and in particular, the playing cards) will be drawn using [3D CSS](https://desandro.github.io/3dtransforms/) - ideally, not even using images for the cards, just fonts and lots of CSS styling. The post-game visualisation will be made using [d3js](https://d3js.org). The rest of the page will be vanilla JavaScript and HTML/CSS, applying some minimal React/Redux sensibilities (without the bloat of the libraries themselves). [Webpack 4](https://www.valentinog.com/blog/webpack-4-tutorial/) will be used on the backend to compile and bundle the files.

### Wireframes

Forthcoming.

### Backend
No backend is necessary for the initial project. A future addition could be a small database for accumulating "stock market" data to beef up the visualisations. A larger re-working of the project would add multiplayer capabilities through something like [Socket.io](https://socket.io).

## Implementation Timeline

### Phase I

Tooling/pipeline set up, webpage up locally, navigation between screens working, non-game window styling

### Phase II

Game logic and display, basic computer opponent, card 3D CSS, in-game interaction/interface (keypress events)

### Phase III

Post-game data visualisation, styling refinements, further variety of computer opponents

## Checklist

Forthcoming.
