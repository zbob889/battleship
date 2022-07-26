import addText from "./addText";
import { players } from "./players";

export const shipFactory = (name, length) => {

    let hitNumber = 0;
    let sunk = false;
    let boardLocation;

    function hit(){
        this.hitNumber++;
    };

    function isSunk(){
        if(this.hitNumber == this.length){
            this.sunk = true;
            console.log('Ship sunk');
        } else if(hitNumber != length){
            this.sunk = false;
        };
    };

    function sunkCells(){
        if(this.sunk == true){
            const shipCells = this.boardLocation;
            for(let i = 0; i < shipCells.length + 1; i++){
                document.getElementById(`${shipCells[i]}`).className = 'diag';
            };
        };
    };

    return {name, length, boardLocation, sunk, hitNumber, hit, isSunk, sunkCells};
};