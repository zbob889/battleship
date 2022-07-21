export const shipFactory = (name, length) => {

    let hitNumber = 0;
    let sunk = false;
    let boardLocation;

    function hit(){
        hitNumber++;
    };

    function isSunk(){
        if(hitNumber == length){
            sunk = true;
        } else if(hitNumber != length){
            sunk = false;
        };
    };

    return {name, length, boardLocation, hit, isSunk};
};