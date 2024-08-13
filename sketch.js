function setup() {
    createCanvas(600, 600);
    background("branco");  
    }  
         
  function draw() {
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed === true) {
      if (mouseButton === LEFT) {
        stroke("black");
        fill("white");
        rect(mouseX, mouseY, 20, 35);
      }
      if (mouseButton === RIGHT) {
        stroke("black");
        fill("white");
        circle(mouseX, mouseY, 20, 25);
      }
      if (mouseButton === CENTER){
        background(random(0, 255), random(0, 255),random(0, 255))
      }
    }
  }
  