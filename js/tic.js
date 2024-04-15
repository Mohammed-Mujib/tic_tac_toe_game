const X_CLASS = "x";
const CIRCEL_CLASS = "circel";
const board = document.getElementById('board');
const winningMessageElement = document.getElementById("winning-message");
const winningMessageTextElement= document.querySelector("[data-winning-message-text]");
const winning_compo = [
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
                            ];
const cellElements = document.querySelectorAll('[data-cell]');
let circelTurn;
const resturtButton = document.getElementById("restart");
const resetButton = document.getElementById("reset");

startGame();

resturtButton.addEventListener("click",startGame);

resetButton.addEventListener("click",startGame);

function startGame(){
    circelTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCEL_CLASS);
        cell.removeEventListener("click",handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove("show");
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circelTurn ? CIRCEL_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)){
        endGame(false);
    } else if(isDraw()){
        endGame(true);
    }else{
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.textContent = "Draw";
    }
    else{
        winningMessageTextElement.textContent = `${circelTurn ? "O's":"X's"} wins`;
        }
    winningMessageElement.classList.add("show");
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCEL_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circelTurn = !circelTurn
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCEL_CLASS)
    if (circelTurn) {
        board.classList.add(CIRCEL_CLASS)
    }
    else{
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass){
    return winning_compo.some(copo =>{
        return copo.every(index =>{
            return cellElements[index].classList.contains(currentClass)
        })
    })
}