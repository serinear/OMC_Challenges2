const answers = document.querySelector(".answers");
resetButton = document.querySelector(".resetButton");
hint = document.querySelector(".hint span");
remainingGuesses = document.querySelector(".remaining-guesses span");
wrongLetters = document.querySelector(".wrong-letters span");
typingInput = document.querySelector(".typing-input");

let word,incorrectLetters,maxGuesses;
function randomWord(){
    let RnadomObject=wordList[Math.floor(Math.random()*wordList.length)];
    word= RnadomObject.word;
    incorrectLetters=[];
    maxGuesses=10;
    hint.innerText= RnadomObject.hint;
    remainingGuesses.innerText=maxGuesses;
let html="";
for(let i=0; i<word.length;i++){
    html+=`<input type="text" disable>`;
}
answers.innerHTML=html;
} randomWord();
function playing(e){
let key=e.target.value;
if(key.match(/^[A-Za-z]+$/)&& !incorrectLetters.includes(key)){
    if(word.includes(key)){
    for(let i=0;i<word.length;i++){
        if(word[i]===key){
            answers.querySelectorAll("input")[i].value=key;
        }
    }
    }else{
        maxGuesses--;
      incorrectLetters.push(key);
    }wrongLetters.innerText=incorrectLetters;
    remainingGuesses.innerText=maxGuesses;
}
typingInput.value="";


if(maxGuesses===0){
    alert("GAME OVER:(");
    for(let i=0;word.length;i++){
        answers.querySelectorAll("input")[i].value=word[i];
    }
}
}
resetButton.addEventListener("click",randomWord);
typingInput.addEventListener("input",playing);
document.addEventListener("keydown",()=> typingInput.focus());
