const inputs = document.querySelector(".inputs")
const typingInput = document.querySelector(".typing-input")
const hint = document.querySelector(".hint span")
wrongLetter = document.querySelector(".wrong-letter span")
guessLeft = document.querySelector(".guess-left span")
resetBtn = document.querySelector(".reset-btn")
let word, maxGuesses = [] , corrects = [], incorrects = [];

let wordList = [

  {
    word: "apple",
    hint: "A popular fruit that is often associated with teachers."
  },
  {
    word: "banana",
    hint: "A yellow fruit that is a great source of potassium."
  },
  {
    word: "cherry",
    hint: "A small red fruit that is often used to make pies."
  },
  {
    word: "grape",
    hint: "A small, round fruit that is often used to make wine."
  },
  {
    word: "kiwi",
    hint: "A small, brown fruit that is known for its fuzzy skin and bright green flesh."
  },
  {
    word: "lemon",
    hint: "A sour fruit that is often used to make lemonade."
  },
  {
    word: "mango",
    hint: "A sweet fruit that is popular in tropical regions."
  },
  {
    word: "orange",
    hint: "A citrus fruit that is commonly consumed as a juice or eaten as a snack."
  },
  {
    word: "papaya",
    hint: "A large fruit with orange flesh and black seeds that is often eaten for breakfast."
  },
  {
    word: "pineapple",
    hint: "A tropical fruit that has a tough outer layer and sweet, juicy flesh inside."
  },
  {
    word: "raspberry",
    hint: "A small, red fruit that grows on bushes and is often used to make jam."
  },
  {
    word: "strawberry",
    hint: "A small, red fruit that is often used to make desserts."
  },
  {
    word: "watermelon",
    hint: "A large, juicy fruit with a green outer layer and pink flesh inside."
  },
  {
    word: "grapefruit",
    hint: "A large, citrus fruit that is often eaten for breakfast."
  },
  {
    word: "blueberry",
    hint: "A small, blue fruit that is often used in baking and is high in antioxidants."
  }
]




function randomWord() {
  //get random obj from the list
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranObj.word;//get a random WORD from obj
  maxGuesses = 4; 
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