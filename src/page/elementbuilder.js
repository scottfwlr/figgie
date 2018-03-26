export const buildElem = (tagName, classString, children) => {
  const classList = classString.split(" ");
  return elemBuilder({ tagName, classList, children })
}

export const elemBuilder = ({ tagName, classList, children = {} }) => {
  const e = document.createElement(tagName);
  classList.forEach(cls => e.classList.add(cls));
  Object.values(children).forEach(cNode => e.appendChild(cNode));
  return e;
}

export const div = (classString, children) => (buildElem('div', classString, children));
export const ul = (classString, children) => (buildElem('ul', classString, children));
export const li = (classString, children) => (buildElem('li', classString, children));


// experimental

export const a = (classString, children) => (buildElem('a', classString, children));

export const p = (classString, textchildren) => (buildElem('p', classString, children));
