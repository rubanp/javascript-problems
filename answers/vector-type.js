class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus({ x: x, y: y }) {
    return new Vec(this.x + x, this.y + y);
  }

  minus({ x: x, y: y }) {
    return new Vec(this.x - x, this.y - y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
