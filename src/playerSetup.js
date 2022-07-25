import createPlacementBoard from "./createPlacementBoard";
import playerShipCreation from "./playerShipCreation";

// carrier 5
// battleship 4
// destroyer 3
// submarine 3
// patrol boat 2


export default function playerSetup(){
    const popupBox = document.getElementById('popup');
    popupBox.style.display = 'flex';

    createPlacementBoard();
    const placementBoard = document.getElementById('placementBoard');

    playerShipCreation();
};