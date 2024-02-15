let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        renderBoard();
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    // Проверка по горизонтали и вертикали
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            alert(`${board[i][0]} выиграл!`);
            return;
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            alert(`${board[0][i]} выиграл!`);
            return;
        }
    }

    // Проверка по диагоналям
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        alert(`${board[0][0]} выиграл!`);
        return;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        alert(`${board[0][2]} выиграл!`);
        return;
    }

    // Проверка на ничью
    let isTie = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                isTie = false;
                break;
            }
        }
    }
    if (isTie) {
        alert('Ничья!');
    }
}


function renderBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.querySelector(`.row:nth-child(${i + 1}) .cell:nth-child(${j + 1})`).textContent = board[i][j];
        }
    }
}
