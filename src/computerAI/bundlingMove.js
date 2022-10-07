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


    let lettersOnly = viableTargets.map(cell => {
        return cell.charAt(0);
    });

    let numbersOnly = viableTargets.map(cell => {
        return cell.replace(/\D/g, '');
    });


    if(containsDuplicate(numbersOnly) == true && containsDuplicate(lettersOnly) == false){
        //bundle is vertical

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
    }else if(containsDuplicate(lettersOnly) == true && containsDuplicate(numbersOnly) == false){
        //bundle is horizontal

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
    }else if(containsDuplicate(numbersOnly) == true && containsDuplicate(lettersOnly) == true){
        
        let newTarget = viableTargets[randomNumber(viableTargets.length)];

        let letter = newTarget.charAt(0);
        let number = newTarget.replace(/\D/g,'');

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

    cells.forEach(cell => {
        if(!(misses.includes(cell) || hits.includes(cell))){
            possibleLocations.push(cell);
        };
    });

    let number = randomNumber(possibleLocations.length);
    let target = possibleLocations[number];

    if(target == undefined){
        bundlingMove();
    };

    gameBoard.receiveAttack(target);


};

function randomNumber(amount){
    let number = Math.floor(Math.random() * amount);
    return number;
};

function containsDuplicate(array){
    return array.length != new Set(array).size;
};