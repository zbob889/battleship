import { converter } from "./convertLettersAndNumbers";
import { players } from "./players";

export default function checkForHits(){
    let misses = players.computer.misses;
    let hits = players.computer.hits;
    let cells = [];
    let possibleLocations = [];

    let sunkShips = players.player.ships.filter(ship => ship.sunk == true);
    // let possibleHits = hits.filter((item) => ! sunkShips.boardLocation.includes(item));

    let sunkenLocations = [];

    sunkShips.forEach(e => {
        e.boardLocation.forEach(e => {
            sunkenLocations.push(e);
        });
    });

    let viableTargets = hits.filter((item) => ! sunkenLocations.includes(item));


    for(let i = 0; i < viableTargets.length; i++){
        let letter = viableTargets[i].charAt(0);
        let number = viableTargets[i].replace(/\D/g,'');

        if(letter != 'a'){
            let leftOne = converter.numberToLetter((converter.letterToNumber(letter) - 1)) + number + 'Player';
            cells.push(leftOne);
        };
        if(letter != 'j'){
            let rightOne = converter.numberToLetter((converter.letterToNumber(letter) + 1)) + number + 'Player';
            cells.push(rightOne);
        };
        if(number != 1){
            let upNumber = number - 1;
            let upOne = letter + upNumber + 'Player';
            cells.push(upOne);
        };
        if(number != 10){
            let downNumber = Number(number) + 1;
            let downOne = letter + downNumber + 'Player'; 
            cells.push(downOne);
        };
    };

    let noMiss = cells.filter((item) => ! misses.includes(item));
    let noHit = cells.filter((item) => ! hits.includes(item));

    possibleLocations = noMiss.concat(noHit);


    function randomNumber(amount){
        let number = Math.floor(Math.random() * amount);
        return number;
    };
    let number = randomNumber(possibleLocations.length);
    let target = possibleLocations[number];
    return target;

    
};

// module.exports.checkForHits = checkForHits;