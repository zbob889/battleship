import createPlacementBoard from "./createPlacementBoard";
import { selectNeighbors } from "./selectNeighbors";
import { gameBoard } from "./gameBoard";
import { players } from "./players";

export default function playerShipCreation(){

    let turn = 1;

    function makePlayerShip(length){
        selectNeighbors(length);
        placementBoard.addEventListener('click', () => {
            let boardLocation = [];
            let locations = document.querySelectorAll('.shipCell');
            locations.forEach(e => {
                boardLocation.push(`${e.id + 'Player'}`);
            });
            if(turn == 1){
                gameBoard.createPlayerShip('playerCarrier', length, boardLocation);
            } else if(turn == 2){
                gameBoard.createPlayerShip('playerBattleship', length, boardLocation);
            } else if(turn == 3){
                gameBoard.createPlayerShip('playerDestroyer', length, boardLocation);
            } else if(turn == 4){
                gameBoard.createPlayerShip('playerSubmarine', length, boardLocation);
            } else if(turn == 5){
                gameBoard.createPlayerShip('playerPatrolBoat', length, boardLocation);
            };
            locations.forEach(e => {
                e.className = 'placementCell';
            });
            turn++;
            placeShip();
        });
    };

    function placeShip(){
        if(turn == 1){
            makePlayerShip(5);
        } else if(turn == 2){
            makePlayerShip(4);
        } else if(turn == 3){
            makePlayerShip(3)
        } else if(turn == 4){
            makePlayerShip(3)
        } else if(turn == 5){
            makePlayerShip(2)
            // exit popup
        }
    };

    placeShip();
};


// if(turn == 1){
//     selectNeighbors(5);
// } else if(turn == 2){
//     selectNeighbors(4);
// } else if(turn == 3){
//     selectNeighbors(3);
// } else if(turn == 4){
//     selectNeighbors(2);
// } else if(turn == 5){
//     selectNeighbors(1);
// };