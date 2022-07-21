import './style.css';
import createBoard from './createBoard';
import { gameBoard } from './gameBoard.js';
import { players } from './players.js';

createBoard();

gameBoard.place('playerCarrier', 'player', 'a', 'a', 1, 5);
gameBoard.place('playerBattleship', 'player', 'b', 'e', 1, 1);
gameBoard.place('playerDestroyer', 'player', 'g', 'i', 6, 6);
gameBoard.place('playerSubmarine', 'player', 'g', 'i', 7, 7);
gameBoard.place('playerPatrolBoat', 'player', 'a', 'b', 10, 10);

gameBoard.place('computerCarrier', 'computer', 'a', 'a', 1, 5);
gameBoard.place('computerBattleship', 'computer', 'b', 'e', 1, 1);
gameBoard.place('computerDestroyer', 'computer', 'g', 'i', 6, 6);
gameBoard.place('computerSubmarine', 'computer', 'g', 'i', 7, 7);
gameBoard.place('computerPatrolBoat', 'computer', 'a', 'b', 10, 10);


