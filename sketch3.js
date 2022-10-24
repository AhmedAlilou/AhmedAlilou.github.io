function setup() {
  createCanvas(windowWidth, windowHeight);
  ys = [[width/2 - 200, 1, '#00b4d8'],
  [width/2 - 150, 2, '#48cae4'],
  [width/2 - 100, 3, '#90e0ef'],
  [width/2 - 50, 4, '#ade8f4'],
  [width/2, 6, '#caf0f8'],
  [width/2 + 50, 4, '#ade8f4'],
  [width/2 + 100, 3, '#90e0ef'],
  [width/2 + 150, 2, '#48cae4'],
  [width/2 + 200, 1, '#00b4d8'],
]
  balls = []
  ys.forEach(newBlock)
}

function newBlock(item, index) {
  ball = new Ball(item[0], height/2, item[1], 0, item[2])
  balls.push(ball)
}

function draw() {
  background(36, 35, 50);
  display();
}

function display() {
  strokeWeight(4);
  noFill();
  ellipseMode(CENTER)
  stroke(255);
  for (let x = width/2 - 200; x <= width/2+ 200; x+= 50) {
    line(x, height/2 - 300, x, height/2 + 300)
  }
  for (let i = 0; i < balls.length; i++) {
    balls[i].display()
    balls[i].move()
  }
}

class Ball {
  constructor(x, y, speed, bounces, colour) {
    this.x = x
    this.y = y
    this.speed = speed
    this.bounces = bounces
    this.colour = colour
  }

  display() {
    noStroke();
    fill(color(this.colour))
    circle(this.x, this.y, 30)
  }

  move() {
    if (this.y == height/2 - 300 || this.y == height/2 + 300) {
      this.bounces += 1
      console.log(this.bounces)
    }

    if (this.bounces%2 == 0) {
      this.y -= this.speed
    } else if (this.bounces%2 > 0){
      this.y += this.speed
    } 
 }
}