// Global constants
// How long each clue's light/sound is held.
const cluePauseTime = 33;
const nextClueWaitTime = 1000;

// Global variables 
var clueHoldTime = 1000; 
var pattern = [];// pattern keeps track of button pattern
var progress = 0;// progress tracks player turns
var gamePlaying = false;// keeps track when to start.
var volume = 0.5; // volume between 0.0 and 1.0
var tonePlaying = false; // Play sound boolean
var guessCounter = 0;
var patternIncrement = 0;
var mistakes = 0;
var solved = progress;
// Start and Stop game functions
function startGame(){
  mistakes = 0;
  solved = progress;
  progress = 0;
  gamePlaying = true;
  randomNumber();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  pattern = [];
  mistakes = 0;
  progress = 0;
  solved = progress;
  clueHoldTime = 1000
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function randomNumber(){
  for (let i=0; i<=6; i++ ){
    pattern.push(Math.floor(Math.random()*6)+1);
  }
}

// Light and clear functions
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// Clue functions

// single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// clue sequence
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i=0;i<=progress;i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// Win/Loss conditions
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

// Geuss Counting
function guess(btn){
  console.log ("user guessed: " + btn)
  if(!gamePlaying){
    return;
  }

  // core game logic

  if(pattern[guessCounter] == btn){
    if(progress == guessCounter){
      if( progress == pattern.length -1  ){
        winGame();
      }else{
        progress++;
        clueHoldTime -=100;
        playClueSequence();
      }
    }else{
      guessCounter++;
      
    }
  }else {
    mistakes++;
    if (mistakes == 3){
      loseGame(); 
    }else if (mistakes == 2){
      alert("You have done a mistake you have one more chance to get the pattern");
      playClueSequence();
    }else if(mistakes == 1 ){
      alert("You have done a mistake you have two more chance to get the pattern");
      playClueSequence();
    }else{
      playClueSequence();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 234.2,
  2: 345.4,
  3: 422.5,
  4: 480.3,
  5: 606.4,
  6: 143.4
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)