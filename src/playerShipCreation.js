import createPlacementBoard from "./createPlacementBoard";
import { selectNeighbors } from "./selectNeighbors";
import { gameBoard } from "./gameBoard";
import { players } from "./players";
import addText from "./addText";

export default function playerShipCreation(){

    let turn = 1;

    const placementBoard = document.getElementById('placementBoard');
    placementBoard.addEventListener('click', createShip);
    placementBoard.addEventListener('mouseover', cellLoop);

    function createShip(){
        let boardLocation = [];
        let locations = document.querySelectorAll('.shipCell');
        locations.forEach(e => {
            boardLocation.push(`${e.id + 'Player'}`);
        });
        if((turn == 1 && locations.length !== 5) ||
            (turn == 2 && locations.length !== 4) ||
            (turn == 3 && locations.length !== 3) ||
            (turn == 4 && locations.length !== 3) ||
            (turn == 5 && locations.length !== 2)){
                locations.forEach(e => {
                    e.className = 'placementCell';
                });
                return;
        };
        if(turn == 1 && locations.length == 5){
            gameBoard.createPlayerShip('playerCarrier', 5, boardLocation);
        } else if(turn == 2 && locations.length == 4){
            gameBoard.createPlayerShip('playerBattleship', 4, boardLocation);
        } else if(turn == 3 && locations.length == 3){
            gameBoard.createPlayerShip('playerDestroyer', 3, boardLocation);
        } else if(turn == 4 && locations.length == 3){
            gameBoard.createPlayerShip('playerSubmarine', 3, boardLocation);
        } else if(turn == 5 && locations.length == 2){
            gameBoard.createPlayerShip('playerPatrolBoat', 2, boardLocation);
            const popupBox = document.getElementById('popup');
            popupBox.style.display = 'none';
            displayShips();
        };
        locations.forEach(e => {
            e.className = 'takenCell';
        });
        turn++;
    };
    function cellLoop(){
        if(turn == 1){
            selectNeighbors(5);
        } else if(turn == 2){
            addText('popupText', 'PLACE YOUR BATTLESHIP');
            selectNeighbors(4);
        } else if(turn == 3){
            addText('popupText', 'PLACE YOUR DESTROYER');
            selectNeighbors(3);
        } else if(turn == 4){
            addText('popupText', 'PLACE YOUR SUBMARINE');
            selectNeighbors(3);
        } else if(turn == 5){
            addText('popupText', 'PLACE YOUR PATROL BOAT');
            selectNeighbors(2);
        };
    };
    function displayShips(){
        let ships = players.player.ships;
        let shipLocations = [];
        ships.forEach(e => {
            for(let i = 0; i < e.boardLocation.length; i++){
                shipLocations.push(e.boardLocation[i]);
            };
        });
        shipLocations.forEach(e => {
            let cell = document.getElementById(`${e}`);
            cell.className = 'playerShipCell';
        });
    };
};
