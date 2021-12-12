class Orb {

  // creator maker generator
  constructor(_x, _y, _d, _vx, _vy) {
    this.x = _x;
    this.y = _y;
    this.d = _d;
    this.vx = _vx;
    this.vy = _vy;
    this.r = random(10,255);
    this.g = random(10,255);
    this.b = random(10,255);
    this.a = 8 ;

  }

  bounce() {
    this.vx = this.vx ;
    this.vy = this.vy ;
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.a);
  //  rectMode(CENTER);
    ellipse(this.x,this.y, this.d);
  }

  move() {


    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x > width || this.x < 0) {
      this.vx = this.vx * -1;
    }

    if (this.y > height || this.y < 0) {
      this.vy = this.vy * -1;
    }
  }
}
