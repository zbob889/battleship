import { shipFactory } from "./ship";
import { players } from './players.js'

// function createShipAtLocation(name, length, location){
//     const ship = shipFactory(`${name}`, length);
//     ship.boardLocation = location;
//     return ship;
// };

export const gameBoard = (() => {

    const createShipAtLocation = (name, length, location) => {
        const ship = shipFactory(`${name}`, length);
        ship.boardLocation = location;
        return ship;
    };

    const createPlayerShip = (name, length, location) => {
        const ship = shipFactory(`${name}`, length);
        ship.boardLocation = location;
        players.player.ships.push(ship);
    };

    const place = (boatName, playerName, letterStart, letterEnd, numberStart, numberEnd) => {
        if (letterStart == letterEnd){
            let length = numberEnd + 1 - numberStart;
            const position = [];
            if(`${playerName}` == 'player'){
                for(let i = numberStart - 1; i < numberEnd; i++){
                    position.push(letterStart + `${i + 1}` + `Player`);
                };
                players.player.ships.push(createShipAtLocation(boatName, length, position));
                return players.player.ships;
            } else if(`${playerName}` == 'computer'){
                for(let i = numberStart - 1; i < numberEnd; i++){
                    position.push(letterStart + `${i + 1}` + `Computer`);
                };
                players.computer.ships.push(createShipAtLocation(boatName, length, position));
            };
        } else if (numberStart == numberEnd){
            let firstNumber = letterStart.charCodeAt(0) - 97;
            let lastNumber = letterEnd.charCodeAt(0) - 97;
            let length = lastNumber + 1 - firstNumber;
            const position = [];
            if(`${playerName}` == 'player'){
                for(let i = firstNumber; i < lastNumber + 1; i++){
                    let newLetter = String.fromCharCode(i + 97);
                    position.push(`${newLetter}` + numberStart + 'Player');
                };
                players.player.ships.push(createShipAtLocation(boatName, length, position));
            } else if(`${playerName}` == 'computer'){
                for(let i = firstNumber; i < lastNumber + 1; i++){
                    let newLetter = String.fromCharCode(i + 97);
                    position.push(`${newLetter}` + numberStart + 'Computer');
                };
                players.computer.ships.push(createShipAtLocation(boatName, length, position));
            };
        };
    };

    const receiveAttack = (location) => {
        if(location.includes('Player') == true){
            let ship = players.player.ships.find(object => object.boardLocation.includes(`${location}`));
            if(ship !== undefined){
                //attack ship
                ship.hit();
                ship.isSunk();
                players.player.checkForLoss();
                players.computer.hits.push(`${location}`);
                document.getElementById(`${location}`).className = 'cellHit';
            } else if(ship == undefined){
                //miss ship
                players.computer.misses.push(`${location}`);
                document.getElementById(`${location}`).className = 'cellMiss';
            };
        } else if(location.includes('Computer') == true){
            let ship = players.computer.ships.find(object => object.boardLocation.includes(`${location}`));
            if(ship !== undefined){
                //attack ship
                ship.hit();
                ship.isSunk();
                players.computer.checkForLoss();
                ship.sunkCells();
                players.computer.hits.push(`${location}`);
                document.getElementById(`${location}`).className = 'cellHit';
            } else if(ship == undefined){
                //miss ship
                players.computer.misses.push(`${location}`);
                document.getElementById(`${location}`).className = 'cellMiss';
            };
        };
    };

    return {createShipAtLocation, createPlayerShip, place, receiveAttack};

})();