import { shipFactory } from "./ship";
import { players } from './players.js'

function createShipAtLocation(name, length, location){
    const ship = shipFactory(`${name}`, length);
    ship.boardLocation = location;
    return ship;
};

export const gameBoard = (() => {

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