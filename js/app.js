/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



/*---------------------------- Variables (state) ----------------------------*/

let board
let turn
let winner
let tie

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const boardEl = document.querySelector('.board')
const resetBtnEl = document.querySelector('#reset')
// console.log(squareEls, messageEl);


/*-------------------------------- Functions --------------------------------*/

function render() {
    updateBoard()
    updateMessage()
}



function updateBoard() {
    board.forEach((element, index) => {
        squareEls[index].textContent = element
    });

}

const updateMessage = () => {
    if (!winner && !tie) {
        messageEl.textContent = `it's ${turn} turn`
    } else if (!winner && tie) {
        messageEl.textContent = `it's a tie!`
    } else {
        messageEl.textContent = `${turn} win, congratulation!`
    }
}

function handleClick (event) {
    const squareIndex = Number(event.target.id)
        
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
        return
    }
    if (winner) {
        return
    }
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}

function placePiece(index) {
    board[index] = turn    
}

function checkForWinner() {
    winningCombos.forEach((element) => {
        if (board[element[0]] !== '' && board[element[0]] === board[element[1]] && board[element[1]] === board[element[2]]) {
            winner = true            
        }
    })
}

function checkForTie() {
    if (winner) {
        return
    }
    if (!board.includes('')) {
        tie = true
        console.log(tie);
    }
}

function switchPlayerTurn() {
    if (winner) {
        return
    } else {
        if (turn === 'X') {
            turn = 'O'
        } else {
            turn = 'X'
        }
        console.log(turn);
        
    }
}

const init = () => {
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ]
    turn = 'X'
    winner = false
    tie = false
    render()
}
init()

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)

resetBtnEl.addEventListener('click', init)




//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
