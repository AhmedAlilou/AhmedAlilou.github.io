function setup() {
  createCanvas(windowWidth, windowHeight);
  sc = [[6, color('#d7e9fe'), 'right'],
  [5, color('#b7d6f7'), 'right'],
  [4, color('#84BCF3'), 'right'],
  [3, color('#509cde'), 'right'],
  [2, color('#2481cd'), 'right'],
  [1, color('#0645a4'), 'right'],
  [6, color('#d7e9fe'), 'left'],
  [5, color('#b7d6f7'), 'left'],
  [4, color('#84BCF3'), 'left'],
  [3, color('#509cde'), 'left'],
  [2, color('#2481cd'), 'left'],
  [1, color('#0645a4'), 'left'],]
  
  balls = []
  sc.forEach(newBall)
}

function newBall(item, index) {
  ball = new Ball((windowWidth/2) - 150, (windowHeight/2) - 150, item[0], item[1], item[2])
  balls.push(ball)
}

//ball1 = new Ball((windowWidth/2) - 150, (windowHeight/2) - 150, 6, '#d7e9fe')

function displayball(item, index) {
  item.display()
}

function draw() {
  background(36, 35, 50);
  display();
  balls.forEach(displayball)
}

function display() {
  strokeWeight(4);
  noFill();
  ellipseMode(CENTER)
  stroke(255);
  rect((windowWidth/2)-150, (windowHeight/2)-150, 300, 300);
}

class Ball {
  constructor(x, y, speed, hexColour, direction) {
    this.x = x
    this.y = y
    this.speed = speed
    this.hexColour = hexColour
    this.direction = direction
  }

  display() {
    fill(this.hexColour);
    stroke(this.hexColour);
    this.move()
    ellipse(this.x, this.y, 24);
  }

   move() {
    if (this.direction == 'right'){
      if (this.x < (windowWidth/2)+150 && this.y == (windowHeight/2)-150) {
        this.x += this.speed
      } else if (this.x == (windowWidth/2)+150 && this.y < (windowHeight/2)+150) {
        this.y += this.speed
      } else if (this.x > (windowWidth/2)-150 && this.y == (windowHeight/2)+150) {
        this.x -= this.speed
      } else if (this.x == (windowWidth/2)-150 && this.y > (windowHeight/2)-150) {
        this.y -= this.speed
      }
    } else if (this.direction == 'left') {
      if (this.x == (windowWidth/2)-150 && this.y < (windowHeight/2)+150) {
        this.y += this.speed
      } else if (this.x < (windowWidth/2)+150 && this.y == (windowHeight/2)+150) {
        this.x += this.speed
      } else if (this.x == (windowWidth/2)+150 && this.y > (windowHeight/2)-150) {
        this.y -= this.speed
      } else if (this.x > (windowWidth/2)-150 && this.y == (windowHeight/2)-150) {
        this.x -= this.speed
      }
    }
  }
}