const inputs = document.querySelector(".inputs")
const typingInput = document.querySelector(".typing-input")
const hint = document.querySelector(".hint span")
wrongLetter = document.querySelector(".wrong-letter span")
guessLeft = document.querySelector(".guess-left span")
resetBtn =  document.querySelector(".reset-btn")
let word, 
maxGuesses = [],
corrects = [],
incorrects = [];


function randomWord() {
  //get random obj from the list
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranObj.word;//get a random WORD from obj
  maxGuesses = 6; 
  corrects = [];
  incorrects = []; //reser all values to default

  hint.innerText = ranObj.hint;
  guessLeft.innerText = maxGuesses;
  wrongLetter.innerText = incorrects;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
  }
  inputs.innerHTML = html;

}
randomWord();

function initGame(e) {
  let key = e.target.value;
  //addding !incorrects, that way the user cannot enter same wrong letter twice
  if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(key)) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          inputs.querySelectorAll("input")[i].value = key;
          corrects.push(key)
          console.log(corrects)
        }
      }
    } else {
      maxGuesses--;//decrement maxGuesses by 1
      incorrects.push(` ${key}`);
    }
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrects;
  }
  typingInput.value = "";
  
  setTimeout(()=>{
    if (corrects.length === word.length) {
      alert("won");
      randomWord();
    } else if (maxGuesses < 1) {
      alert("Game Over");
      for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll("input")[i].value = word[i];
      }
    }
    })
} 


resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
//Get user letter pressed
document.addEventListener("keydown", () => typingInput.focus());