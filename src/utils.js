export const toggle = property => element => {
  element.classList.contains(property) ?
  element.classList.remove(property) :
  element.classList.add(property)
}

