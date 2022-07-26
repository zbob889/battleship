import { gameBoard } from "./gameBoard";
import { converter } from "./convertLettersAndNumbers";
import { players } from "./players";

export default function computerSetup(){

    gameBoard.place('computerCarrier', 'computer', 'a', 'a', 1, 5);
    gameBoard.place('computerBattleship', 'computer', 'b', 'e', 1, 1);
    gameBoard.place('computerDestroyer', 'computer', 'g', 'i', 6, 6);
    gameBoard.place('computerSubmarine', 'computer', 'g', 'i', 7, 7);
    gameBoard.place('computerPatrolBoat', 'computer', 'a', 'b', 10, 10);

    // generateShip(5, 'computerCarrier');
    // generateShip(4, 'computerBattleship');
    // generateShip(3, 'computerDestroyer');
    // generateShip(3, 'computerSubmarine');
    // generateShip(2, 'computerPatrolBoat');

    function generateShip(length, name){
        innerGenerateShip(length, name);
    };

    function innerGenerateShip(length, name){
        let direction = Math.floor(Math.random() * 2);
        if(direction == 0){
            // horizontal
            let number = randomNumber(10);
            let startingLetter = randomNumber(10);
            if(startingLetter + length > 10){
                startingLetter = startingLetter - length;
            };
            let endingLetter = startingLetter + length - 1;
            startingLetter = converter.numberToLetter(startingLetter);
            endingLetter = converter.numberToLetter(endingLetter);
            let position = createPosition(direction, number, number, startingLetter, endingLetter);
            let status = checkPositionTaken(position);
            if(status == 'not taken'){
                // make ship
                gameBoard.place(name, 'computer', startingLetter, endingLetter, number, number);
            } else if(status == 'taken'){
                // retry
                generateShip(length, name);
            };
        } else if(direction == 1){
            // vertical
            let letter = converter.numberToLetter(randomNumber(10) - 1);
            let startingNumber = randomNumber(10);
            if(startingNumber + length > 10){
                startingNumber = startingNumber - length;
            };
            let endingNumber = startingNumber + length - 1;
            let position = createPosition(direction, startingNumber, endingNumber, letter, letter);
            let status = checkPositionTaken(position);
            if(status == 'not taken'){
                // make ship
                gameBoard.place(name, 'computer', letter, letter, startingNumber, endingNumber);
            } else if(status == 'taken'){
                // retry
                generateShip(length, name);
            };
        }
    };

    function createPosition(direction, numberStart, numberEnd, letterStart, letterEnd){
        if (direction == 1){
            const position = [];
            for(let i = numberStart - 1; i < numberEnd; i++){
                position.push(letterStart + `${i + 1}` + `Computer`);
            };
            return position;
        } else if (direction == 0){
            let firstNumber = letterStart.charCodeAt(0) - 97;
            let lastNumber = letterEnd.charCodeAt(0) - 97;
            const position = [];
            for(let i = firstNumber; i < lastNumber + 1; i++){
                let newLetter = String.fromCharCode(i + 97);
                position.push(`${newLetter}` + numberStart + 'Computer');
            };
            return position;
        };
    };

    function checkPositionTaken(position){
        let status = 'not taken';
        for(let i = 0; i < position.length + 1; i++){
            let cell = position[i];
            let ship = players.computer.ships.find(object => object.boardLocation.includes(`${cell}`));
            if(ship !== undefined){
                //spot taken
                status = 'taken';
                return status;
            } else if(ship == undefined){
                //spot not taken
                status = 'not taken';
            };
        };
        return status;
    };

    function randomNumber(amount){
        let number = Math.floor(Math.random() * amount) + 1;
        return number;
    };
};