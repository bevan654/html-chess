const board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],

]


const Player1 = true // always be white
const Player2 = false // always be black



board[0][7] = new Pawn("Player1")
board[7][3]= new Bishop("Player1")


console.log(JSON.stringify(board[7][3].getMoves(board,3,7)))