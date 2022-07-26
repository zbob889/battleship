import './style.css';
import createBoard from './createBoard';
import { gameBoard } from './gameBoard.js';
import { players } from './players.js';
import { computerTurn } from './computerTurn';
import playerSetup from './playerSetup';
import computerSetup from './computerSetup';

createBoard();

let computerBoard = document.getElementById('computerBoard');
computerBoard.addEventListener('click', (e) => {
    if(e.target.className == 'computerCell'){
        let location = e.target.id;
        gameBoard.receiveAttack(location);
    };
    // let computerLossStatus = players.computer.lost;
    // if(computerLossStatus == false){
    //     computerTurn.attackPlayer();
    // };
});
computerBoard.addEventListener('mouseup', () => {
    let computerLossStatus = players.computer.lost;
    if(computerLossStatus == false){
        computerTurn.attackPlayer();
    };
});

playerSetup();
computerSetup();