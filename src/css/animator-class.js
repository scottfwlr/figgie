// doing things the object-oriented way with ES6 classes

export class AnimationEntity {
  constructor(node) {
    this.node = node;
    const rect = node.getBoundingClientRect();

    this.oX = rect.x;
    this.oY = rect.y;
    // this.setOldPos = this.setOldPos.bind(this);

    this.nX = rect.x;
    this.nY = rect.y;
    // this.setNewPos = this.setNewPos.bind(this);

    this.toFrame = { transform: 'translate3d(0, 0, 0)' };
    // this.fromFrame = this.fromFrame.bind(this);
    // this.animate = this.animate.bind(this);
  }

  // compat shim
  static from(node) {
    return new AnimationEntity(node);
  }

  setOldPos() {
    const rect = node.getBoundingClientRect();
    this.oX = rect.x;
    this.oY = rect.y;
  }

  inferOldPos() {
    this.oX = this.nX;
    this.oY = this.nY;
  }

  setNewPos() {
    const rect = node.getBoundingClientRect();
    this.nX = rect.x;
    this.nY = rect.y;
  }

  fromFrame() {
    const dx = this.oX - this.nX;
    const dy = this.oY - this.nY;
    return { transform: `translate3d(${dx}px, ${dy}px, 0)` };
  }

  animate({ duration = 250, durationDelta = 0, easing = 'ease' }) {
    duration += durationDelta;

    this.node.animate([
      this.fromFrame(), 
      this.toFrame
    ], {
      duration,
      easing
    });
  }

}

export class Animator {
  constructor() {

    // list of entities to be watched for changes
    this.registry = [];

    // array of DOM changes to make next callback
    this.moves = [];

    this.animate = this.animate.bind(this);
    this.move = this.move.bind(this);
  }


  move() {

  }

  animate() {
    
    // ...

    window.requestAnimationFrame(this.animate)
  }


}
