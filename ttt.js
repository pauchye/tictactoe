let game = new Game();
let picX = '<img src="cat.png" width="140" height="120"></img>';
let picY = '<img src="dog.png" width="140" height="140"></img>';


let selector = document.getElementById('selector');
let cat = document.getElementById('cat');
let dog = document.getElementById('dog');
selector.addEventListener('click', event => {
    if (!game.board.isTotEmpty()) {
        return;
    }

    if (event.target.id === 'cat'){
        picX = '<img src="cat.png" width="140" height="120"></img>';
        picY = '<img src="dog.png" width="140" height="140"></img>';
        cat.classList.add("shadow");
        dog.classList.remove("shadow");
    } else {
        picY = '<img src="cat.png" width="140" height="120"></img>';
        picX = '<img src="dog.png" width="140" height="140"></img>';
        dog.classList.add("shadow");
        cat.classList.remove("shadow");
    }

})  



let board = document.getElementById('board');
// // selectXY()
// if(game.board.isTotEmpty()) selectXY();

board.addEventListener('click', event => {

    let pic;
    if (game.currentPlayer === 'x') {
        pic = picX;
    } else {
        pic = picY;
    }
    if (event.target.innerHTML === ''){
        event.target.innerHTML = pic; 
    }
    
    let pos = event.target.id.split("").map((each) => parseInt(each));
    game.playMove(pos);

    var popup = document.getElementById("myPopup")

    if(game.board.isWin()){
        let winner = game.board.isWin();
        // alert("YOU WIN, CONGRATULATIONS!");
        console.log('winner', winner);  
        let winnerpic;
        if (winner === 'x') {
            winnerpic = picX;
        } else {
            winnerpic = picY;
        }
        ;
        popup.innerHTML = `${winnerpic} wins!`
        popup.classList.toggle("show");
    } 

    if (game.board.isFull() && !game.board.isWin()){
        // console.log('tie'); 
        popup.innerHTML = `It is a tie...`
        popup.classList.toggle("show");
    }

})
