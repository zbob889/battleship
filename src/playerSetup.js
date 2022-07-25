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

    

    // function placeShip(){
    //     console.log(currentShip);
    //     if(currentShip == 'playerCarrier'){
    //         carrier();
    //     } else if(currentShip == 'batttleship'){
    //         battleship();
    //     } else if(currentShip ==  'destroyer'){
    //         destroyer();
    //         currentShip = 'submarine';
    //         placeShip();
    //     } else if(currentShip == 'submarine'){
    //         submarine();
    //         currentShip == 'patrol boat';
    //         placeShip();
    //     } else if(currentShip == 'patrol boat'){
    //         patrolBoat();
    //         // exit popup
    //     }
    // };

    // // carrier 5
    // function carrier(){
    //     console.log('carrier running');
    //     placementBoard.addEventListener('mouseover', () => {
    //         selectNeighbors(5);
    //     });
    //     placementBoard.addEventListener('click', () => {
    //         let boardLocation = [];
    //         let locations = document.querySelectorAll('.shipCell');
    //         locations.forEach(e => {
    //             boardLocation.push(`${e.id + 'Player'}`);
    //         });
    //         gameBoard.createPlayerShip('playerCarrier', 5, boardLocation);
    //         currentShip = 'battleship';
    //         placeShip();
    //     });
    // };

    // // battleship 4
    // function battleship(){
    //     console.log('battleship running');
    //     placementBoard.addEventListener('mouseover', () => {
    //         selectNeighbors(4);
    //     });
    //     placementBoard.addEventListener('click', () => {
    //         let boardLocation = [];
    //         let locations = document.querySelectorAll('.shipCell');
    //         locations.forEach(e => {
    //             boardLocation.push(`${e.id + 'Player'}`);
    //         });
    //         gameBoard.createPlayerShip('playerCarrier', 4, boardLocation);
    //         currentShip = 'destroyer';
    //         placeShip();
    //     });
    // };



    // placementBoard.addEventListener('mouseover', () => {
    //     let carrier = [];
    //     selectNeighbors(5);
    // });

    // placementBoard.addEventListener('click', () => {
    //     let boardLocation = [];
    //     let locations = document.querySelectorAll('.shipCell');
    //     locations.forEach(e => {
    //         boardLocation.push(`${e.id + 'Player'}`);
    //     });
    // });
};