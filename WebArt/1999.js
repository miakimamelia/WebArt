


document.addEventListener("DOMContentLoaded", function() {

    let cdCaseElements = document.querySelectorAll(".cdcase");
    let spinningObject = document.getElementById("spinning-object");
    
    let cover1 = document.querySelectorAll(".cover1");
    let cover2 = document.querySelectorAll(".cover2");
    let cover3 = document.querySelectorAll(".cover3");
    let cover4 = document.querySelectorAll(".cover4");
    let cover5 = document.querySelectorAll(".cover5");
    let cover6 = document.querySelectorAll(".cover6");
    let cover7 = document.querySelectorAll(".cover7");


   
let songs = [
    { 
    title: "Risingson", 
    artist: "Massive Attack", 
    year: "1998",
    img : "cover1",
    audio : "audio1",

},
  
    { title: "Celebrity Skin", artist: "Hole", year: "1998", img : "cover2",
    audio : "audio2"},
  
    { title: "Kool Thing", artist: "Sonic Youth", year: "1990", img : "cover3",
    audio : "audio3"},
  
      { title: "When the Sun Hits", artist: "Slowdive", year: "1993", img : "cover4",
      audio : "audio4"},
  
    { title: "Sometimes", artist: "My Bloody Valentine", year: "1991", img : "cover5",
    audio : "audio5"},
  
    { title: "My Own Summer (Shove It)", artist: "Deftones", year: "1997", img : "cover6",
    audio : "audio6"},
  
    { title: "Everlong", artist: "Foo Fighters", year: "1997", img : "cover7",
    audio : "audio7"}
  ];
  

    let audio1 = document.getElementById("audio1");
    let audio2 = document.getElementById("audio2");
    let audio3 = document.getElementById("audio3");
    let audio4 = document.getElementById("audio4");
    let audio5 = document.getElementById("audio5");
    let audio6 = document.getElementById("audio6");
    let audio7 = document.getElementById("audio7");

    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");
    const cdElement = document.getElementById("spinning-object"); // You had ".cd" selector, changed to id for more specificity
    const elementToSlide = document.getElementById("element-to-slide");
    const playpauseButton = document.getElementById("playpauseButton");
    let isSpinning = false; // initially set to false

    playpauseButton.addEventListener("click", () => {
        if (isSpinning) {
            // Pause audio and stop spinning
            audio4.pause();
            cdElement.classList.remove("spinning");
            cdElement.classList.remove("shifting");
        } else {
            // Play audio and start spinning
            audio4.play();
            cdElement.classList.add("spinning");
            cdElement.classList.add("shifting");
        }
        isSpinning = !isSpinning;
    });
});


// let cdX = 0;
// let originalCdX = 0; // Store the original CD position
// let isMovingRight = false;
// let rotationAngle = 0;
// let isSpinning = false;

// let animationState = 0;
// let angle = 0;
// let shiftX = 0;
// let maxShiftX = 140; // The maximum allowed shift to the right
// let shiftBackSpeed = 1; // The speed at which img1 shifts back to its original position
// let audios;

// let currentAudio = 0;

