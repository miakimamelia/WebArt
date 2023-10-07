let cdCaseElements = document.querySelectorAll(".cdcase");
let cdElements = document.querySelectorAll(".cd");

let cover1 = document.querySelectorAll(".cover1");
let cover2 = document.querySelectorAll(".cover2");
let cover3 = document.querySelectorAll(".cover3");
let cover4 = document.querySelectorAll(".cover4");
let cover5 = document.querySelectorAll(".cover5");
let cover6 = document.querySelectorAll(".cover6");
let cover7 = document.querySelectorAll(".cover7");


let playpause = document.querySelectorAll(".playpause");
let previous = document.querySelectorAll(".previous");
let next = document.querySelectorAll(".next");


let cdX = 0;
let originalCdX = 0; // Store the original CD position
let isMovingRight = false;
let rotationAngle = 0;
let isSpinning = false;

let animationState = 0;
let angle = 0;
let shiftX = 0;
let maxShiftX = 140; // The maximum allowed shift to the right
let shiftBackSpeed = 1; // The speed at which img1 shifts back to its original position
let audios;
let currentAudio = 0;
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
  cdImage = loadImage("Silver-CD-PNG-Clipart-Background.png");
  overlayImage = loadImage("pinpng.com-cd-png-463190.png");

  massiveAttackImage = loadImage("Massive_Attack.png");
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
