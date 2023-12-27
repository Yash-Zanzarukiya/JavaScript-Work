let MAX = 100, MIN = 0
let num = Math.floor(Math.random() * (MAX - MIN) + MIN)
console.log(num);
let form = document.querySelector('form')
let submit = document.querySelector('#submit')
let previous = document.querySelector('#previous')
let remain = document.querySelector('#remain')
let info = document.querySelector('.info')
let messageBox = document.querySelector('.messageBox')
let PlayAgain = document.createElement('p')

let pre = []
let Pass = 0
let playGame = true


displayMessage(`Guess the Number Between ${MIN} to ${MAX}`)

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        userInput = parseInt(document.querySelector('#userInput').value)
        validateInput(userInput);
    },false)
}

function validateInput(input) {
    if (isNaN(input))
        displayMessage("Please Enter Valid Number")
    else if (input > MAX)
        displayMessage(`Please Guess Number below ${MAX}`)
    else if (input < MIN)
        displayMessage(`Please Guess Number above ${MIN}`)
    else {
        checkInput(input)
    }


}

function checkInput(guess) {
    if (guess === num){
        displayMessage(`You Guessed Correct Number ${num}`)
        endGame();
    }
    else if (guess > num)
        displayMessage(`You Guessed Number is too High`)
    else
        displayMessage(`You Guessed Number is too Low`)

    Pass++;
    pre.push(guess);
    updateValues()
}

function updateValues() {
    document.querySelector('#userInput').value=''
    if(Pass===10){
        displayMessage(`Game Over...Random Number was ${num}`);
        endGame();
    }
    remain.innerHTML=`${10-Pass}`
    previous.innerHTML=`${pre}`
}

function displayMessage(message) {
     messageBox.innerHTML= `${message}`;
}

function endGame(){
    playGame=false
    userInput.value=''
    document.querySelector('#userInput').setAttribute('disabled','')
    submit.setAttribute('disabled','');
    PlayAgain.innerHTML= `<h3 id='playagain' class='btn'>Play Again</h3>`
    info.appendChild(PlayAgain);
    PlayAgain.addEventListener('click',function(e){
        newGame();
    },false)
}

function newGame(){
    playGame=true;
    Pass=0
    pre=[]
    remain.innerHTML=`${10-Pass}`
    previous.innerHTML=`${pre}`
    info.classList.remove()
    displayMessage(`Guess the Number Between ${MIN} to ${MAX}`)
    document.querySelector('#userInput').removeAttribute('disabled')
    submit.removeAttribute('disabled');
    info.removeChild(PlayAgain);
}