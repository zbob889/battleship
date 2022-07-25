export default function selectNeighbors(length){

    let boatLocation = [];

    let direction = 'horizontal';

    rotateButton.addEventListener('click', () => {
        if(direction == 'horizontal'){
            direction = 'vertical';
        } else if(direction == 'vertical'){
            direction = 'horizontal';
        };
    });

    document.querySelector('#placementBoard').addEventListener('mouseover', (e) => {
        if(e.target.className == 'placementCell'){
            let cellId = e.target.id;
            let letter = cellId.charAt(0);
            let number = Number(cellId.slice(1));
            boatLocation.push(cellId);
            if(direction == 'vertical'){
                if(number - 1 > length){
                    number = length + 1;
                };
                for(let i = 0; i < length; i++){
                    let newNumber = number + i;
                    let newCoordinate = `${letter + newNumber}`;
                    document.getElementById(`${newCoordinate}`).className = 'shipCell';
                    boatLocation.push(newCoordinate);
                };
            } else if(direction == 'horizontal'){
                if((Number(letter.charCodeAt(0) - 97)) > length){
                    letter = String.fromCharCode(length + 97);
                };
                for(let i = 0; i < length; i++){
                    let newLetter = String.fromCharCode(letter.charCodeAt(0) + i);
                    let newCoordinate = `${newLetter + number}`;
                    document.getElementById(`${newCoordinate}`).className = 'shipCell';
                    boatLocation.push(newCoordinate);
                };
            };
        };
    });
    document.querySelector('#placementBoard').addEventListener('mouseout', (e) => {
        boatLocation = [];
        if(e.target.className == 'shipCell'){
            let cellId = e.target.id;
            let letter = cellId.charAt(0);
            let number = Number(cellId.slice(1));
            if(direction == 'vertical'){
                if(number - 1 > length){
                    number = length + 1;
                };
                for(let i = 0; i < length; i++){
                    let newNumber = number + i;
                    let newCoordinate = `${letter + newNumber}`;
                    document.getElementById(`${newCoordinate}`).className = 'placementCell';
                };
            } else if(direction == 'horizontal'){
                if((Number(letter.charCodeAt(0) - 97)) > length){
                    letter = String.fromCharCode(length + 97);
                };
                for(let i = 0; i < length; i++){
                    let newLetter = String.fromCharCode(letter.charCodeAt(0) + i);
                    let newCoordinate = `${newLetter + number}`;
                    document.getElementById(`${newCoordinate}`).className = 'placementCell';
                };
            };
        };
    });
};