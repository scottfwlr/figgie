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