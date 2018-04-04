export const toggle = property => element => {
  element.classList.contains(property) ?
  element.classList.remove(property) :
  element.classList.add(property)
}


export const show = element => {
  Array.from(document.getElementsByClassName('visible')).forEach(el => {
    if (el) el.classList.remove('visible');
  })
  element.classList.add('visible');
}


// 

const cardValue = {
  'A': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
 '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13
}

export const byCardValue = (cardA, cardB) => {
  const a = cardValue[ cardA.id.split('-')[0] ];
  const b = cardValue[ cardB.id.split('-')[0] ];
  return a - b;
}

export const randomly = () => Math.random() - 0.5;