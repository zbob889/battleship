import { shipFactory } from "./ship";

const gameBoard = (() => {

    shipFactory('playerCarrier', 5);
    shipFactory('playerBattleship', 4);
    shipFactory('playerDestroyer', 3);
    shipFactory('playerSubmarine', 3);
    shipFactory('playerPatrolBoat', 2);

    shipFactory('computerCarrier', 5);
    shipFactory('computerBattleship', 4);
    shipFactory('computerDestroyer', 3);
    shipFactory('compputerSubmarine', 3);
    shipFactory('computerPatrolBoat', 2);

    // Gameboards should be able to place ships at specific coordinates by calling the ship factory function.

    const place = (name, letterStart, letterEnd, numberStart, numberEnd) => {
        
    };


    return {place};

})();

module.exports.gameBoard = gameBoard;