import { converter } from "../convertLettersAndNumbers";
import { gameBoard } from "../gameBoard";
import { players } from "../players";

export default function bundlingMove(){

    console.log('Bundling move');

    let misses = players.computer.misses;
    let hits = players.computer.hits;
    let cells = [];
    let possibleLocations = [];

    let sunkShips = players.player.ships.filter(ship => ship.sunk == true);

    let sunkenLocations = [];

    sunkShips.forEach(e => {
        e.boardLocation.forEach(e => {
            sunkenLocations.push(e);
        });
    });

    let viableTargets = hits.filter((item) => ! sunkenLocations.includes(item));

    // pick random hit from viableTargets

    let newTarget = viableTargets[randomNumber(viableTargets.length)];

    // determine bundle direction

    //

    cells.forEach(cell => {
        if(!(misses.includes(cell) || hits.includes(cell))){
            possibleLocations.push(cell);
        };
    });

    let number = randomNumber(possibleLocations.length);
    let target = possibleLocations[number];

    console.log(target);

    gameBoard.receiveAttack(target);


};

function randomNumber(amount){
    let number = Math.floor(Math.random() * amount);
    return number;
};

function containsDuplicate(array){
    return array.length != new Set(array).size;
};