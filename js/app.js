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
    if (winner) {
        messageEl.textContent = `${winner} wins! congratulations! 🥳`
    } else if (tie) {
        messageEl.textContent = `it's a tie! 🤝`
    } else {
        messageEl.textContent = `it's ${turn}'s turn 🎯`
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
    for (const combo of winningCombos) {
        if (board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
            winner = board[combo[0]];
            return;
        }
    }
}

function checkForTie() {
    if (winner) return;
    
    if (!board.includes('')) {
        tie = true
    }
}

function switchPlayerTurn() {
    if (winner) return;
    turn = turn === 'X' ? 'O' : 'X'
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
