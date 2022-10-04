import { converter } from "../convertLettersAndNumbers";
import { players } from "../players";

export const moveTests = (() => {

    function randomTest(){
        let hits = players.computer.hits;
    
        let sunkShips = players.player.ships.filter(ship => ship.sunk == true);
    
        let sunkenLocations = [];
    
        sunkShips.forEach(e => {
            e.boardLocation.forEach(e => {
                sunkenLocations.push(e);
            });
        });
    
        let viableTargets = hits.filter((item) => ! sunkenLocations.includes(item));
    
        if(viableTargets.length == 0){
            return true;
        }else if(viableTargets.length != 0){
            return false;
        };
    };

    function adjacentTest(){
        let hits = players.computer.hits;
    
        let sunkShips = players.player.ships.filter(ship => ship.sunk == true);
    
        let sunkenLocations = [];
    
        sunkShips.forEach(e => {
            e.boardLocation.forEach(e => {
                sunkenLocations.push(e);
            });
        });
    
        let viableTargets = hits.filter((item) => ! sunkenLocations.includes(item));
    
        if(viableTargets.length == 1){
            return true;
        }else if(viableTargets.length != 1){
            return false;
        };
    };

    function inARowTest(){
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
    
        if(viableTargets.length > 1  && bundlingTest() == false){
            return true;
        }else if(viableTargets.length > 1 && bundlingTest() != false){
            return false;
        };
    };

    function bundlingTest(){
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

        let lettersOnly = viableTargets.map(cell => {
            return cell.charAt(0);
        });
    
        let numbersOnly = viableTargets.map(cell => {
            return cell.replace(/\D/g, '');
        });
    
        if(containsDuplicate(lettersOnly) == true){
            //boat is vertical
    
            for(let i = 0; i < numbersOnly.length; i++){
                let letter = lettersOnly[0];
                let number = numbersOnly[i];
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
        }else if(containsDuplicate(numbersOnly) == true){
            //boat is horizontal
    
            for(let i = 0; i < lettersOnly.length; i++){
                let number = numbersOnly[0];
                let letter = lettersOnly[i];
                if(letter != 'a'){
                    let leftOne = converter.numberToLetter((converter.letterToNumber(letter) - 1)) + number + 'Player';
                    cells.push(leftOne);
                };
                if(letter != 'j'){
                    let rightOne = converter.numberToLetter((converter.letterToNumber(letter) + 1)) + number + 'Player';
                    cells.push(rightOne);
                };
            };
        };
    
        cells.forEach(cell => {
            if(!(misses.includes(cell) || hits.includes(cell))){
                possibleLocations.push(cell);
            };
        });

        if(possibleLocations.length == 0 && viableTargets.length != 0){
            return true;
        }else if(!(possibleLocations.length == 0 && viableTargets.length != 0)){
            return false;
        };
    };

    return {
        randomTest,
        adjacentTest,
        inARowTest,
        bundlingTest
    };

})();

function containsDuplicate(array){
    return array.length != new Set(array).size;
};