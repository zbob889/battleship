import { converter } from "./convertLettersAndNumbers";
import { players } from "./players";

export default function checkForHits(){
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

    if(viableTargets.length > 1){

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
    }else if(!(viableTargets.length > 1)){
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
    };

    cells.forEach(cell => {
        if(!(misses.includes(cell) || hits.includes(cell))){
            possibleLocations.push(cell);
        };
    });

    function randomNumber(amount){
        let number = Math.floor(Math.random() * amount);
        return number;
    };

    if(checkForBundling(possibleLocations.length, viableTargets.length) == false){
        let number = randomNumber(possibleLocations.length);
        let target = possibleLocations[number];
        return target;
    }else if(checkForBundling(possibleLocations.length, viableTargets.length) == true){
        console.log("There's bundling!");
        
    };
};

function containsDuplicate(array){
    return array.length != new Set(array).size;
};

function checkForBundling(possibleLocationsLength, viableTargetsLength){
    if(possibleLocationsLength == 0 && viableTargetsLength != 0){
        return true;
    }else if(!(possibleLocationsLength == 0 && viableTargetsLength != 0)){
        return false;
    };
};



    // bundled up edge case

    // let number;
    // let target;

    // if(possibleLocations.length == 0 && viableTargets.length != 0){
    //     // pick random hit from viableTargets

    //     let newTargetNumber = randomNumber(viableTargets.length);
    //     let newTarget = viableTargets[newTargetNumber];

    //     // put random hit through one direction

    //     let lettersOnly = newTarget.map(cell => {
    //         return cell.charAt(0);
    //     });

    //     let numbersOnly = newTarget.map(cell => {
    //         return cell.replace(/\D/g, '');
    //     });

    //     if(containsDuplicate(lettersOnly) == true){
    //         //boat is vertical

    //         for(let i = 0; i < numbersOnly.length; i++){
    //             let letter = lettersOnly[0];
    //             let number = numbersOnly[i];
    //             if(number != 1){
    //                 let upNumber = number - 1;
    //                 let upOne = letter + upNumber + 'Player';
    //                 cells.push(upOne);
    //             };
    //             if(number != 10){
    //                 let downNumber = Number(number) + 1;
    //                 let downOne = letter + downNumber + 'Player'; 
    //                 cells.push(downOne);
    //             };
    //         };

    //     }else if(containsDuplicate(numbersOnly) == true){
    //         //boat is horizontal

    //         for(let i = 0; i < lettersOnly.length; i++){
    //             let number = numbersOnly[0];
    //             let letter = lettersOnly[i];
    //             if(letter != 'a'){
    //                 let leftOne = converter.numberToLetter((converter.letterToNumber(letter) - 1)) + number + 'Player';
    //                 cells.push(leftOne);
    //             };
    //             if(letter != 'j'){
    //                 let rightOne = converter.numberToLetter((converter.letterToNumber(letter) + 1)) + number + 'Player';
    //                 cells.push(rightOne);
    //             };
    //         };
    //     cells.forEach(cell => {
    //         if(!(misses.includes(cell) || hits.includes(cell))){
    //             possibleLocations.push(cell);
    //         };
    //     });
    //     number = randomNumber(possibleLocations.length);
    //     target = possibleLocations[number];

    // }else{
    //     console.log("It's not the edge case");
    //     number = randomNumber(possibleLocations.length);
    //     target = possibleLocations[number];
    // };