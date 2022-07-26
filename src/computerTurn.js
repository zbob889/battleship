import { gameBoard } from "./gameBoard";
import { players } from "./players";
import { converter } from "./convertLettersAndNumbers";
import checkForHits from './checkForHits';

export const computerTurn = (() =>{

    let misses = players.computer.misses;
    let hits = players.computer.hits;

    let location;

    function createLocation(){
        let letter = String.fromCharCode(Math.floor(Math.random() * 10) + 97);
        let number = Math.floor(Math.random() * 10) + 1;
        location = letter + number + 'Player';
    };

    function attackPlayer(){
        let target = checkForHits();
        if(target == undefined){
            let playedLocations = misses.concat(hits);
            //random attack
            createLocation();
            let successCondition = playedLocations.find(e => e == location);
            if(successCondition !== undefined){
                // try again
                attackPlayer();
            } else if(successCondition == undefined){
                // attack
                gameBoard.receiveAttack(location);
            };
        }else if(target != undefined){
            let playedLocations = misses.concat(hits);
            //target attack
            let successCondition = playedLocations.find(e => e == target);
            if(successCondition !== undefined){
                // try again
                attackPlayer();
            } else if(successCondition == undefined){
                // attack
                gameBoard.receiveAttack(target);
            };
        };

    };

    return {
        attackPlayer,
    };
})();

// module.exports.computerTurn = computerTurn;