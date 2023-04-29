const inputs = document.querySelector(".inputs")
const typingInput = document.querySelector(".typing-input")
const hint = document.querySelector(".hint span"),
resetBtn = document.querySelector(".reset-btn");

let word;

let wordList = [

    {
      word : "Apple",
      hint: "A popular fruit that is often associated with teachers."
    },
    {
      word : "Banana",
      hint: "A yellow fruit that is a great source of potassium."
    },
    {
      word : "Cherry",
      hint: "A small red fruit that is often used to make pies."
    },
    {
      word : "Grape",
      hint: "A small, round fruit that is often used to make wine."
    },
    {
      word : "Kiwi",
      hint: "A small, brown fruit that is known for its fuzzy skin and bright green flesh."
    },
    {
      word : "Lemon",
      hint: "A sour fruit that is often used to make lemonade."
    },
    {
      word : "Mango",
      hint: "A sweet fruit that is popular in tropical regions."
    },
    {
      word : "Orange",
      hint: "A citrus fruit that is commonly consumed as a juice or eaten as a snack."
    },
    {
      word : "Papaya",
      hint: "A large fruit with orange flesh and black seeds that is often eaten for breakfast."
    },
    {
      word : "Pineapple",
      hint: "A tropical fruit that has a tough outer layer and sweet, juicy flesh inside."
    },
    {
      word : "Raspberry",
      hint: "A small, red fruit that grows on bushes and is often used to make jam."
    },
    {
      word : "Strawberry",
      hint: "A small, red fruit that is often used to make desserts."
    },
    {
      word : "Watermelon",
      hint: "A large, juicy fruit with a green outer layer and pink flesh inside."
    },
    {
      word : "Grapefruit",
      hint: "A large, citrus fruit that is often eaten for breakfast."
    },
    {
      word : "Blueberry",
      hint: "A small, blue fruit that is often used in baking and is high in antioxidants."
    }
  ]




function randomWord(){
    //get random obj from the list
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    let word = ranObj.word;//get a random WORD from obj
    console.log(word);

  hint.innerHTML = ranObj.hint;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
  }
  inputs.innerHTML = html;



}
randomWord();

function initGame(e){
  let key = e.target.value;
  if(key.match(/^[A-Za-z]+$/)){
    console.log(key);
    if(word.includes(key)){//if user letter found in the word
      console.log("letter found")
    } else{
      console.log("letter not found")
    }

  }
}


resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
//Get user letter pressed
document.addEventListener("keydown", () => typingInput.focus());