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
});
computerBoard.addEventListener('mouseup', (e) => {
    let computerLossStatus = players.computer.lost;
    let lastClick = e.target.className;
    if(computerLossStatus == false && lastClick == 'computerCell'){
        computerTurn.attackPlayer();
    };
});

playerSetup();
computerSetup();