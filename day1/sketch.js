let img1, img2, img3, img4, img5, img6, img7, moshedImage;
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

function preload() {
  img1 = loadImage("Silver-CD-PNG-Clipart-Background.png");
  img2 = loadImage("pinpng.com-cd-png-463190.png");
  img3 = loadImage("parlorpalm.jpg");
  img4 = loadImage("ichikoalbumcover.jpg");
  img5 = loadImage("arabesquealbumcover.jpg");
  img6 = loadImage("R-12973804-1545646968-2489.jpg");
  img7 = loadImage("a0471216186_10.jpg");

  audios = [
    loadSound("ParlorPalm.mp3"),
    loadSound("Ichiko Aoba - bouquet (Official Audio).mp3"),
    loadSound("Arabesque.mp3"),
    loadSound(
      "onlymp3.to - Forevertime Journeys-47S3ih06g9c-256k-1655596247172.mp3"
    ),
    loadSound("mutate.mp3"),
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img1.resize(260, 260);
  img2.resize(300, 300);
  img3.resize(200, 200);
  img4.resize(200, 200);
  img5.resize(200, 200);
  img6.resize(200, 200);
  img7.resize(200, 200);

  x = (width - img1.width) / 2;
  y = (height - img2.height) / 2;

  button1 = createButton("play/pause");
  button1.position(
    x + img2.width / 2 - button1.width - 67,
    y + img2.height + 10
  );
  button1.mousePressed(toggleAnimation);

  button2 = createButton(" i'm done listening");
  button2.position(x + img2.width / 2 - 58, y + img2.height + 10);
  button2.mousePressed(stopAnimation);

  button3 = createButton("Next track");
  button3.position(button2.x + button2.width + 10, y + img2.height + 10);
  button3.mousePressed(nextAudio); // Add this line
}

function draw() {
  clear();
  if (animationState === 1) {
    angle += 0.03; // Increase this value to make the spinning animation faster
    if (shiftX < maxShiftX) {
      shiftX += 0.5;
    }
  } else if (animationState === 2) {
    // Add this condition to handle the stopping state
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

  if (currentAudio === 0) {
    image(img3, x + 56, y + 40);
  } else if (currentAudio === 1) {
    image(img4, x + 56, y + 40);
  } else if (currentAudio === 2) {
    image(img5, x + 56, y + 40);
  } else if (currentAudio === 3) {
    // Add a new condition for the new image
    image(img6, x + 56, y + 40);
  } else if (currentAudio === 4) {
    // Add a new condition for the new image
    image(img7, x + 56, y + 40);
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
