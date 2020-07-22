class Board {
    constructor(){
        this.grid = Board.makeGrid();
        // this.winnerHelper = this.winnerHelper.bind(this)
    }

    static makeGrid() {
        const grid = [];
        for (let i = 0; i < 3; i++) {
          grid.push([]);
          for (let j = 0; j < 3; j++) {
            grid[i].push(null);
          }
        }
        return grid;
    }

    isEmpty(pos){
        return (this.grid[pos[0]][pos[1]] === null);
    }

    isTotEmpty(){
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++){
                if(this.grid[i][j] !== null){
                    return false;
                }
            }
        }  
        return true          
    }

    placeMark(pos, mark){
        // console.log('this.grid[pos[0]][pos[1]]', this.grid[pos[0]][pos[1]])
        this.grid[pos[0]][pos[1]] = mark;
        // console.log('this.grid[pos[0]][pos[1]]', this.grid[pos[0]][pos[1]])
        // if(this.isEmpty(pos)){
        //     this.grid[pos[0]][pos[1]] = mark;
        // }
    }

    isFull(){
        let count = 0; 
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++){
                if(this.grid[i][j]){
                    count++
                }
            }
        }  
        return (count===9)      
    }

    isWin(){
        const winningArr = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[2, 0], [1, 1], [0, 2]]
        ]

        for (let i = 0; i < winningArr.length; i++){
            let winner = this.winnerHelper(winningArr[i]);
            if (winner!==null) {
                return winner;
            }
        }
        return null;
    }

    winnerHelper(seq){
        for(let j = 0; j < 2; j++){
            let target = Board.marks[j];
            let winner = true;

            for (let i=0; i< 3; i++){
                if (!this.grid[seq[i][0]][seq[i][1]] || this.grid[seq[i][0]][seq[i][1]] !== target){
                    winner = false;
                }
            }
            if (winner) {
                return target;
            }
        }
        return null;
    }
    
}

Board.marks = ['x','o']

class Game {
    constructor() {
        this.board = new Board();
        this.currentPlayer = Board.marks[0];
    }

    playMove(pos){
        // console.log('this.board.isEmpty(pos) 1', this.board.isEmpty(pos))
        if (this.board.isEmpty(pos)){

            this.board.placeMark(pos, this.currentPlayer);
            this.switchTurn(); 
        }
        // console.log('this.board.isEmpty(pos) 2', this.board.isEmpty(pos))
    }

    switchTurn(){
        if (this.currentPlayer === Board.marks[0]) {
            this.currentPlayer = Board.marks[1];
        } else {
            this.currentPlayer = Board.marks[0];
        }
    }
}