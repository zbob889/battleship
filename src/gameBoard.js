import { shipFactory } from "./ship";

function createShipAtLocation(name, length, location){
    const ship = shipFactory(`${name}`, length);
    ship.boardLocation = location;
    return ship;
};

module.exports.createShipAtLocation = createShipAtLocation;

export const gameBoard = (() => {
    // shipFactory('playerCarrier', 5);
    // shipFactory('playerBattleship', 4);
    // shipFactory('playerDestroyer', 3);
    // shipFactory('playerSubmarine', 3);
    // shipFactory('playerPatrolBoat', 2);

    const ships = [];
    const misses = [];
    const hits = [];

    const place = (name, letterStart, letterEnd, numberStart, numberEnd) => {
        if (letterStart == letterEnd){
            const length = numberEnd - numberStart + 1;
            const position = [];
            for(let i = numberStart - 1; i < numberEnd; i++){
                position.push(letterStart + `${i + 1}`);
            };
            ships.push(createShipAtLocation(name, length, position));
            return createShipAtLocation(name, length, position);
        } else if (numberStart == numberEnd){
            let firstNumber = letterStart.charCodeAt(0) - 97;
            let lastNumber = letterEnd.charCodeAt(0) - 97;
            let length = lastNumber + 1 - firstNumber;
            const position = [];
            for(let i = firstNumber; i < lastNumber + 1; i++){
                let newLetter = String.fromCharCode(i + 97);
                position.push(`${newLetter}` + numberStart);
            };
            ships.push(createShipAtLocation(name, length, position));
            return createShipAtLocation(name, length, position);
        };
    };

    const receiveAttack = (location) => {
        if(ships.includes(`${location}`) == false){
            misses.push(`${location}`);
            return misses;
        } else if(ships.includes(`${location}`) == true){
            hits.push(`${location}`);
            return hits;
        }
    };

    return {place, receiveAttack};

})();

module.exports.gameBoard = gameBoard;