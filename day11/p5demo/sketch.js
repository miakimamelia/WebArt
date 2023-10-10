console.log("is this thing on?")


function setup () {
    createCanvas(innerWidth, innerHeight)
    background(200, 100, 0)
}

function draw () {
   let red = map(mouseX, 0, width, 0, 255)
    fill(red, 0, 0)
    strokeWeight(1)
    stroke(mouseX, mouseY, 255)
    rect( mouseX, mouseY, random(10, 50),
    random(10, 50))

    // rotateX(frameCount * 0.001);
    // rotateY(frameCount * 0.001);
    // box(1000);

}

// function setup() {
//     createCanvas(100, 100, WEBGL);
//     describe('a white box rotating in 3D space');
//   }
  
//   function draw() {
//     background(200);
//     rotateX(frameCount * 0.01);
//     rotateY(frameCount * 0.01);
//     box(50);
//   }
//an event listener that listens for when the page is resized, if it is, do whatever is in the function
function windowResized() {
    resizeCanvas(innerWidth, innerHeight)


}