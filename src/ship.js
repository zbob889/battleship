const shipFactory = (length) => {

    let hitNumber;
    let sunk;

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

    return {length, hitNumber, sunk, hit, isSunk};
};