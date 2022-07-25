import createPlacementBoard from "./createPlacementBoard";
import { selectNeighbors } from "./selectNeighbors";
import { gameBoard } from "./gameBoard";
import { players } from "./players";

export default function playerShipCreation(){

    let turn = 1;

    const placementBoard = document.getElementById('placementBoard');
    placementBoard.addEventListener('click', createShip);
    placementBoard.addEventListener('mouseover', cellLoop);

    function createShip(){
        console.log(turn)
        let boardLocation = [];
        let locations = document.querySelectorAll('.shipCell');
        locations.forEach(e => {
            boardLocation.push(`${e.id + 'Player'}`);
        });
        if(turn == 1){
            gameBoard.createPlayerShip('playerCarrier', 5, boardLocation);
        } else if(turn == 2){
            gameBoard.createPlayerShip('playerBattleship', 4, boardLocation);
        } else if(turn == 3){
            gameBoard.createPlayerShip('playerDestroyer', 3, boardLocation);
        } else if(turn == 4){
            gameBoard.createPlayerShip('playerSubmarine', 3, boardLocation);
        } else if(turn == 5){
            gameBoard.createPlayerShip('playerPatrolBoat', 2, boardLocation);
            const popupBox = document.getElementById('popup');
            popupBox.style.display = 'none';
        };
        locations.forEach(e => {
            e.className = 'placementCell';
        });
        turn++;
    };
    function cellLoop(){
        if(turn == 1){
            selectNeighbors(5);
        } else if(turn == 2){
            selectNeighbors(4);
        } else if(turn == 3){
            selectNeighbors(3);
        } else if(turn == 4){
            selectNeighbors(3);
        } else if(turn == 5){
            selectNeighbors(2);
        };
    };
};