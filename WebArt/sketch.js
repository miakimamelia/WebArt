

let img1, img2, img3, img4, img5, img6, img7, img8, img9;
let x, y;

let button1, button2, button3, button4;
let animationState = 0;
let angle = 0;
let shiftX = 0;
let maxShiftX = 140; // The maximum allowed shift to the right
let shiftBackSpeed = 1; // The speed at which img1 shifts back to its original position
let audios;
let currentAudio = 0;
let volumeSlider;
let tracks = [
  { title: "Risingson", artist: "Massive Attack", year: "1998"},
  { title: "Sometimes", artist: "My Bloody Valentine", year: "1991" },
  { title: "When the Sun Hits", artist: "Slowdive", year: "1993" },
  { title: "My Own Summer (Shove It)", artist: "Deftones", year: "1997" },
  { title: "Kool Thing", artist: "Sonic Youth", year: "1990" },
  { title: "Celebrity Skin", artist: "Hole", year: "1998" },
  { title: "Everlong", artist: "Foo Fighters", year: "1997" }
];

function preload() {
  img1 = loadImage("Silver-CD-PNG-Clipart-Background.png");
  img2 = loadImage("pinpng.com-cd-png-463190.png");

  img3 = loadImage("Massive_Attack.png");
  img4 = loadImage("mbv.jpeg");
  img5 = loadImage("slowdive.jpeg");
  img6 = loadImage("deftones_atf.jpg");
  img7 = loadImage("sonicyouth.png");
  img8 = loadImage("hole.png");
  img9 = loadImage("foo.jpeg");

  audios = [
    loadSound("Risingson (Remastered 2019).mp3"),
    loadSound("Sometimes.mp3"),
    loadSound("Slowdive - When the Sun Hits (Audio).mp3"),
    loadSound("Deftones - My Own Summer (Official Music Video) [HD Remaster].mp3"),
    loadSound("Sonic Youth - Kool Thing.mp3"),
    loadSound("Hole - Celebrity Skin.mp3"), 
    loadSound("Foo Fighters - Everlong.mp3"),
  ];
  


}
function setup() {
createCanvas(500,500)
  img1.resize(200, 200);
  img2.resize(240, 240);
  img3.resize(160, 160);
  img4.resize(160, 160);
  img5.resize(160, 160);
  img6.resize(160, 160);
  img7.resize(160, 160);
  img8.resize(160, 160);
  img9.resize(160, 160);

  x = (width - img1.width) / 2;
  y = (height - img2.height) / 2;

  const buttonWidth = 80; // Reduce the button width
  const buttonHeight = 20; // Reduce the button height
  const buttonSpacing = 10;
  

  button1 = createButton("play/pause");
  button1.size(buttonWidth, buttonHeight); // Set the size of button1
  button1.position(x + img2.width / 2 - buttonWidth - 67, y + img2.height + 10);
  button1.mousePressed(toggleAnimation);

  button2 = createButton("finished");
  button2.size(buttonWidth, buttonHeight); // Set the size of button2
  button2.position(x + img2.width / 2 - 58, y + img2.height + 10);
  button2.mousePressed(stopAnimation);

  button3 = createButton("next track");
  button3.size(buttonWidth, buttonHeight); // Set the size of button3
  button3.position(button2.x + button2.width + buttonSpacing, y + img2.height + 10);
  button3.mousePressed(nextAudio);
}


function draw() {
  background(255);

function draw() {

  // Calculate image x position
  let imgX = width/2 + imgWidth/2 + 100; 
  
  image(img1, imgX, height/2 - imgHeight/2);

  // Draw buttons and text
  // ...

}




  if (animationState === 1) {
    angle += 0.03;
    if (shiftX < maxShiftX) {
      shiftX += 0.5;
    }
  } else if (animationState === 2) {
    if (shiftX > 0) {
      shiftX -= shiftBackSpeed;
    }
  }

  push();
  translate(x + img1.width / 2 + 30 + shiftX, y + img1.height / 2 + 15);
  rotate(angle);
  imageMode(CENTER);
  image(img1, 0, 0);
  pop();

  if (currentAudio >= 0 && currentAudio < audios.length) {
    // Display track title and artist based on the currentAudio index
    fill(0);
    textSize(12);
    textAlign(CENTER);


    text(`Title: ${tracks[currentAudio].title}`, width / 2, y + img2.height + 60);
    text(`Artist: ${tracks[currentAudio].artist}`, width / 2, y + img2.height + 90);
    text(`Year: ${tracks[currentAudio].year}`, width / 2, y + img2.height + 120);

  }


  if (currentAudio === 0) {
    image(img3, x + 56, y + 40);}
    
    
    else if (currentAudio === 1) {
    image(img4, x + 56, y + 40);
  } 
  else if (currentAudio === 2) {
    image(img5, x + 56, y + 40);
  } 
  else if (currentAudio === 3) {
    // Add a new condition for the new image
    image(img6, x + 56, y + 40);
  } 
  
  else if (currentAudio === 4) {
    // Add a new condition for the new image
    image(img7, x + 56, y + 40);
  }

  else if (currentAudio === 5) {
    // Add a new condition for the new image
    image(img8, x + 56, y + 40);
  }
  else if (currentAudio === 6) {
    // Add a new condition for the new image
    image(img9, x + 56, y + 40);
  }

  image(img2, x, y);
}




function toggleAnimation() {
  if (animationState === 1) {
    animationState = 0;
    audios[currentAudio].pause();
  } else {
    animationState = 1;
    audios[currentAudio].play();
  }
}

function stopAnimation() {
  animationState = 2; // Change this to 2 to indicate stopping state
  audios[currentAudio].stop();
}

function nextAudio() {
  audios[currentAudio].stop();
  currentAudio = (currentAudio + 1) % audios.length;
  if (animationState === 1) {
    audios[currentAudio].play();
  }
}




