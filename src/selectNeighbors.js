export const selectNeighbors = (length) => {
    let direction = 'horizontal';
    const rotateButton = document.getElementById('rotateButton');
    rotateButton.addEventListener('click', () => {
        if(direction == 'horizontal'){
            direction = 'vertical';
        } else if(direction == 'vertical'){
            direction = 'horizontal';
        };
    });

    const placementBoard = document.getElementById('placementBoard');

    placementBoard.addEventListener('mouseover', changeToShip);
    placementBoard.addEventListener('mouseout', changeToPlacement);
    placementBoard.addEventListener('click', () => {
        placementBoard.removeEventListener('mouseover', changeToShip);
        placementBoard.removeEventListener('mouseout', changeToPlacement);
    });

    function changeToShip(e){
        if(e.target.className == 'placementCell'){
            let cellId = e.target.id;
            let letter = cellId.charAt(0);
            let number = Number(cellId.slice(1));
            if(direction == 'vertical'){
                if(length == 5 && number >= 7){
                    number = 6;
                };
                if(length == 4 && number >= 8){
                    number = 7;
                };
                if(length == 3 && number >= 9){
                    number = 8;
                };
                if(number == 10 && length == 2){
                    number = 9;
                };
                for(let i = 0; i < length; i++){
                    let newNumber = number + i;
                    let newCoordinate = `${letter + newNumber}`;
                    document.getElementById(`${newCoordinate}`).className = 'shipCell';
                };
            } else if(direction == 'horizontal'){
                if((Number(letter.charCodeAt(0) - 96)) >= 7 && length == 5){
                    letter = 'f';
                };
                if((Number(letter.charCodeAt(0) - 96)) >= 8 && length == 4){
                    letter = 'g';
                };
                if((Number(letter.charCodeAt(0) - 96)) >= 9 && length == 3){
                    letter = 'h';
                };
                if((Number(letter.charCodeAt(0) - 96)) == 10 && length == 42){
                    letter = 'i';
                };
                for(let i = 0; i < length; i++){
                    let newLetter = String.fromCharCode(letter.charCodeAt(0) + i);
                    let newCoordinate = `${newLetter + number}`;
                    document.getElementById(`${newCoordinate}`).className = 'shipCell';
                };
            };
        };
    };
    function changeToPlacement(e){
        if(e.target.className == 'shipCell'){
            let cellId = e.target.id;
            let letter = cellId.charAt(0);
            let number = Number(cellId.slice(1));
            if(direction == 'vertical'){
                if(length == 5 && number >= 7){
                    number = 6;
                };
                if(length == 4 && number >= 8){
                    number = 7;
                };
                if(length == 3 && number >= 9){
                    number = 8;
                };
                if(number == 10 && length == 2){
                    number = 9;
                };
                for(let i = 0; i < length; i++){
                    let newNumber = number + i;
                    let newCoordinate = `${letter + newNumber}`;
                    document.getElementById(`${newCoordinate}`).className = 'placementCell';
                };
            } else if(direction == 'horizontal'){
                if((Number(letter.charCodeAt(0) - 96)) >= 7 && length == 5){
                    letter = 'f';
                };
                if((Number(letter.charCodeAt(0) - 96)) >= 8 && length == 4){
                    letter = 'g';
                };
                if((Number(letter.charCodeAt(0) - 96)) >= 9 && length == 3){
                    letter = 'h';
                };
                if((Number(letter.charCodeAt(0) - 96)) == 10 && length == 42){
                    letter = 'i';
                };
                for(let i = 0; i < length; i++){
                    let newLetter = String.fromCharCode(letter.charCodeAt(0) + i);
                    let newCoordinate = `${newLetter + number}`;
                    document.getElementById(`${newCoordinate}`).className = 'placementCell';
                };
            };
        };
    };

    return{changeToPlacement, changeToShip};
};