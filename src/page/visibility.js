Vis = {};
Vis.elements = {};


Vis.register = className => {
  const els = document.getElementsByClassName(className);
  Array.from(els).forEach(el => Vis.elements[el.id] = el);
}

Vis.show = (id) => {
  Array.from(document.getElementsByClassName('visible')).forEach(el => el.classList.remove('visible'));
  document.getElementById(id).classList.add('visible')
}



Array.from(document.getElementsByClassName('visible')).map(e => e.classList.remove('visible')