Vis = Vis || {};
Vis.elements = Vis.elements || {};

Vis.register = (id, el) => {
  if (el === undefined) el = document.getElementById(id);
  Vis.elements[id] = el;
}

Vis.show = name => {

}
