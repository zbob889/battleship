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

    return {name, length, boardLocation, sunk, hitNumber, hit, isSunk};
};