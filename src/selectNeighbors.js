export default function selectNeighbors(length, direction){

    let boatLocation = [];

    document.querySelector('#placementBoard').addEventListener('mouseover', (e) => {
        if(e.target.className == 'placementCell'){
            let cellId = e.target.id;
            let letter = cellId.charAt(0);
            let number = Number(cellId.slice(1));
            boatLocation.push(cellId);

            //f = 102 in ascii -97=5
            //g = 103 in ascii -97=6

            if((Number(letter.charCodeAt(0) - 97)) > length){
                letter = String.fromCharCode(length + 97);
            };

            if(direction == 'vertical'){
                for(let i = 0; i < length; i++){
                    let newNumber = number + i;
                    let newCoordinate = `${letter + newNumber}`;
                    document.getElementById(`${newCoordinate}`).className = 'shipCell';
                    boatLocation.push(newCoordinate);
                };
            } else if(direction == 'horizontal'){
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
            if((Number(letter.charCodeAt(0) - 97)) > length){
                letter = String.fromCharCode(length + 97);
            };
            if(direction == 'vertical'){
                for(let i = 0; i < length; i++){
                    let newNumber = number + i;
                    let newCoordinate = `${letter + newNumber}`;
                    document.getElementById(`${newCoordinate}`).className = 'placementCell';
                };
            } else if(direction == 'horizontal'){
                for(let i = 0; i < length; i++){
                    let newLetter = String.fromCharCode(letter.charCodeAt(0) + i);
                    let newCoordinate = `${newLetter + number}`;
                    document.getElementById(`${newCoordinate}`).className = 'placementCell';
                };
            };
        };
    });
};