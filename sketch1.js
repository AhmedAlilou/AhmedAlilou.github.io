function setup() {
  createCanvas(windowWidth, windowHeight);
  ys = [[windowHeight/2 +150, 1, '#03045e'],
  [windowHeight/2 + 100, 2, '#023e8a'],
  [windowHeight/2 + 50, 3, '#0077b6'],
  [windowHeight/2, 4, '#0096c7'],
  [windowHeight/2 - 50, 5, '#00b4d8'],
  [windowHeight/2 - 100, 6, '#48cae4'],
  [windowHeight/2 - 150, 7, '#90e0ef'],
  [windowHeight/2 - 200, 8, '#ade8f4'],
]
  blocks = []
  ys.forEach(newBlock)
}

function newBlock(item, index) {
  block = new Block(windowWidth/2 - 420, item[0], item[1], 0, item[2])
  blocks.push(block)
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
  rect((windowWidth/2)-420, (windowHeight/2)-202, 920, 404);
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].move()
    blocks[i].display()
  }
  
}

class Block {
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
    rect(this.x, this.y, 80, 50)
  }

   move() {
    if (this.x == windowWidth/2 -420) {
      this.bounces +=1
    } else if (this.x == windowWidth/2 + 420) {
      this.bounces +=1
    }
    if (this.bounces%2 > 0) {
      this.x += this.speed
    } else if (this.bounces%2 == 0) {
      this.x -= this.speed
    } 
  }
}