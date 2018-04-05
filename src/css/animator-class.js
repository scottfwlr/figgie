// doing things the object-oriented way with ES6 classes

export class AnimationEntity {
  constructor(node) {
    this.node = node;
    this.delay = 0;

    this.oX = null;
    this.oY = null;

    this.nX = 0;
    this.nY = 0;

  }

  // compat shim
  static from(node) {
    return new AnimationEntity(node);
  }

  setOldPos() {
    const rect = this.node.getBoundingClientRect();
    this.oX = rect.x;
    this.oY = rect.y;
  }

  setNewPos() {
    const rect = this.node.getBoundingClientRect();
    this.nX = rect.x;
    this.nY = rect.y;
  }

  animate() {
    const dx = this.oX - this.nX;
    const dy = this.oY - this.nY;
    const delay = this.delay;
    this.delay = 0;

    return this.node.animate([
      // style to look like it hasn't moved
      { transform: `translate3d(${dx}px, ${dy}px, 0)` }, 
      { transform: 'translate3d(0, 0, 0)' }
    ], {
      duration: 400,
      delay,
      easing: 'ease',
      fill: 'backwards'
    });
  }

}

export class Animator {
  constructor(array = []) {
    this.running = false;

    // list of entities to be watched for changes
    this.registry = {};
    if (array.length > 0) {
      array.forEach(e => this.register(e));
    }
    // array of DOM changes to make next callback
    this.moves = [];

    this.animate = this.animate.bind(this);
    this.loop = this.loop.bind(this);
  }

  register(obj) {
    if (obj instanceof Node) {
      this.registry[obj.id] = AnimationEntity.from(obj);
    }
    else {
      console.log("not a node:");
      console.log(obj);
    }
  }

  move(name, toNode) {
    if (typeof toNode === 'string') {
      toNode = document.getElementById(toNode);
    }
    this.registry[name].toNode = toNode; 
    this.moves.push(name);
  }

  stop() {
    this.running = false;
  }

  start() {
    this.running = true;
    this.loop();
  }

  loop() {
    if (this.moves.length) this.animate();
    if (this.running) window.requestAnimationFrame(this.loop);
  }

  animate() {

    // the FLIP animation technique
    // https://medium.com/developers-writing/animating-the-unanimatable-1346a5aab3cd

    // within a single animation frame...
    const entities = Object.values(this.registry);

    // get old locations:
    entities.forEach(e => e.setOldPos());

    // make DOM changes:
    let delay = 0;
    this.moves.forEach((name, i) => {
      this.registry[name].delay = i*20;
      const { node, toNode } = this.registry[name];
      toNode.appendChild(node);
    })
    this.moves = [];

    // get new locations:
    entities.forEach(e => e.setNewPos());

    // animate everything that moved:
    entities.forEach(e => {
      if (e.oX === e.nX && e.oY === e.nY) return;
      e.animate();
    })
  }

}



