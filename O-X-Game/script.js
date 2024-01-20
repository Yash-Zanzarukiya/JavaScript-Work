let boxes = document.querySelectorAll(".boxes");
let result = document.querySelector(".result");
let container = document.querySelector(".container");

let temp = document.createElement("div");
temp.innerHTML = `<div class="boxes X"><div class="cross1"></div><div class="cross2"></div></div>`;
let SignX = temp.firstChild;
temp.innerHTML = `<div class="boxes O"><div class="innerO"></div></div>`;
let SignO = temp.firstChild;

let Xi = [0, 0, 0];
let Xj = [0, 0, 0];
let Oi = [0, 0, 0];
let Oj = [0, 0, 0];
let OD = [-7, -7, -7];
let XD = [-7, -7, -7];
let pass = 1;
let playGame = true;
let currentPlayer = "X";

function handleClick() {
  if (!playGame) return;

  let row = this.dataset.row;
  let col = this.dataset.col;

  if (pass % 2 == 0) {
    this.appendChild(SignO.cloneNode(true));
    Oi[row]++;
    Oj[col]++;
    if (Math.abs(row - col) == 0 || Math.abs(row - col) == 2) OD[row] = Math.abs(row - col);
    getWinner(Oi, Oj, OD);
  } else {
    this.appendChild(SignX.cloneNode(true));
    Xi[row]++;
    Xj[col]++;
    if (Math.abs(row - col) == 0 || Math.abs(row - col) == 2) XD[row] = Math.abs(row - col);
    getWinner(Xi, Xj, XD);
  }

  currentPlayer = currentPlayer == "X" ? "O" : "X";

  if (++pass > 9) declareResult("None");
}

function getWinner(row, col, dia) {
  for (i = 0; i <= 2; i++) {
    if (row[i] == 3) {
      // drawLine("R" , i);
      declareResult();
    } else if (col[i] == 3) {
      // drawLine("C" , i);
      declareResult();
    }
  }
  let sum = dia.reduce((acc, val) => (acc += val), 0);
  if (sum == 0 || sum == 4) {
    declareResult();
    // drawLine("D" , (sum / 4));
  }
}

function declareResult(res = "") {
  let winnerString;
  if (res.match("None")) winnerString = "Tie!!! No Win!!!";
  else {
    winnerString = `Player ${currentPlayer} Won the Match`;
  }
  result.appendChild(document.createTextNode(winnerString));
  endGame();
}

function drawLine(pos, index) {
  let line = document.createElement("div");
  line.classList.add("win-line");
  if (pos == "R") {
    container.appendChild(line);
  }
}

function endGame() {
  Xi = [0, 0, 0];
  Xj = [0, 0, 0];
  Oi = [0, 0, 0];
  Oj = [0, 0, 0];
  pass = 1;
  playGame = false;
}

boxes.forEach((box) => box.addEventListener("click", handleClick));
