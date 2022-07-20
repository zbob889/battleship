export const shipFactory = (name, length) => {

    let hitNumber = 0;
    let sunk = false;

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

    return {name, length, hitNumber, sunk, hit, isSunk};
};