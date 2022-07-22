import { gameBoard } from "./gameBoard";
import { players } from "./players";

export const computerTurn = (() =>{

    let misses = players.player.misses;
    let hits = players.player.hits;
    let playedLocations = misses.concat(hits);

    let location;

    function createLocation(){
        let letter = String.fromCharCode(Math.floor(Math.random() * 10) + 97);
        let number = Math.floor(Math.random() * 10) + 1;
        location = letter + number + 'Player';
    };

    function attackPlayer(){
        createLocation();
        let successCondition = playedLocations.find(e => e == location);

        if(successCondition !== undefined){
            // try again
            attackPlayer();
        } else if(successCondition == undefined){
            // attack
            console.log(location);
            gameBoard.receiveAttack(location);
        };

    };

    return {
        attackPlayer,
    };
})();