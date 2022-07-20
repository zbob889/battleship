import { shipFactory } from "./ship";

function createShipAtLocation(name, length, location){
    const ship = shipFactory(`${name}`, length);
    ship.boardLocation = location;
    return ship;
};

module.exports.createShipAtLocation = createShipAtLocation;

const gameBoard = (() => {
    // shipFactory('playerCarrier', 5);
    // shipFactory('playerBattleship', 4);
    // shipFactory('playerDestroyer', 3);
    // shipFactory('playerSubmarine', 3);
    // shipFactory('playerPatrolBoat', 2);

    // shipFactory('computerCarrier', 5);
    // shipFactory('computerBattleship', 4);
    // shipFactory('computerDestroyer', 3);
    // shipFactory('compputerSubmarine', 3);
    // shipFactory('computerPatrolBoat', 2);

    // Gameboards should be able to place ships at specific coordinates by calling the ship factory function.

    const place = (name, letterStart, letterEnd, numberStart, numberEnd) => {
        if (letterStart == letterEnd){
            // do number stuff
            const length = numberEnd - numberStart + 1;
            const position = [];
            for(let i = numberStart - 1; i < numberEnd; i++){
                position.push(letterStart + `${i + 1}`);
            }
            return createShipAtLocation(name, length, position);
        } else if (numberStart == numberEnd){
            // do letter stuff
            let firstNumber = letterStart.charCodeAt(0) - 97;
            let lastNumber = letterEnd.charCodeAt(0) - 97;

            let length = lastNumber + 1 - firstNumber;
        
            const position = [];
        
            for(let i = firstNumber; i < lastNumber + 1; i++){
                let newLetter = String.fromCharCode(i + 97);
                position.push(`${newLetter}` + numberStart);
            };

            return createShipAtLocation(name, length, position);
        }
    };


    return {place};

})();

module.exports.gameBoard = gameBoard;