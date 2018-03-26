import { buildElem, div } from 'elementbuilder';

const cardFront = buildElem('div', 'card-front');
const cardBack = buildElem('div', 'card-back');
const innerCard = buildElem('div', 'card', { 
  cardFront, 
  cardBack 
})
const card = buildElem('div', 'card-container', {
  innerCard
})

export const baseCard = () => card.cloneNode(true);


const otherCard = buildElem('div', 'card-container', {
  otherInnerCard: buildElem('div', 'card', {
    cardFront: buildElem('div', 'card-front'),
    cardBack: buildElem('div', 'card-back')
  })
})

export const otherBaseCard = () => otherCard.cloneNode(true);


const thirdCard = div('card-container', {
  innerCard: div('card', {
    cardFront: div('card-front'),
    cardBack: div('card-back')
  })
})

export const thirdBaseCard = () => thirdCard.cloneNode(true);


export const cardMaker = ({ card, front, back }) => (
  div('card-container', {
    innerCard: div(`card ${card}`, {
      cardFront: div(`card-front ${front}`),
      cardBack: div(`card-back ${back}`)
    })
  })
) 