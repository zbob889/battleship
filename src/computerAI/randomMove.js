import { converter } from "../convertLettersAndNumbers";
import { players } from "../players";
import { gameBoard } from "../gameBoard";

export default function randomMove(){
    let misses = players.computer.misses;
    let hits = players.computer.hits;

    let playedLocations = misses.concat(hits);
    

    let location = createLocation();

    let successCondition = playedLocations.find(e => e == location);

    if(successCondition !== undefined){
        // try again
        randomMove();
    } else if(successCondition == undefined){
        // attack
        gameBoard.receiveAttack(location);
    };

    console.log('randomMove');


};

function createLocation(){
    let letter = String.fromCharCode(Math.floor(Math.random() * 10) + 97);
    let number = Math.floor(Math.random() * 10) + 1;
    return letter + number + 'Player';
};