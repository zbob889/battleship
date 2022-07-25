export const selectNeighbors = (inputLength) => {

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
            let length = inputLength
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
                    document.getElementById(`${newCoordinate}`).className = 'shipCell';
                };
            } else if(direction == 'horizontal'){
                if((Number(letter.charCodeAt(0) - 97)) > length){
                    letter = String.fromCharCode(length + 97);
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
        let length = inputLength
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
    };

    return{changeToPlacement, changeToShip};
};



    // placementBoard.addEventListener('mouseover', (e) => {
    //     if(e.target.className == 'placementCell'){
    //         let length = inputLength
    //         let cellId = e.target.id;
    //         let letter = cellId.charAt(0);
    //         let number = Number(cellId.slice(1));
    //         if(direction == 'vertical'){
    //             if(number - 1 > length){
    //                 number = length + 1;
    //             };
    //             for(let i = 0; i < length; i++){
    //                 let newNumber = number + i;
    //                 let newCoordinate = `${letter + newNumber}`;
    //                 document.getElementById(`${newCoordinate}`).className = 'shipCell';
    //             };
    //         } else if(direction == 'horizontal'){
    //             if((Number(letter.charCodeAt(0) - 97)) > length){
    //                 letter = String.fromCharCode(length + 97);
    //             };
    //             for(let i = 0; i < length; i++){
    //                 let newLetter = String.fromCharCode(letter.charCodeAt(0) + i);
    //                 let newCoordinate = `${newLetter + number}`;
    //                 document.getElementById(`${newCoordinate}`).className = 'shipCell';
    //             };
    //         };
    //     };
    // });
    // placementBoard.addEventListener('mouseout', (e) => {
    //     let length = inputLength
    //     if(e.target.className == 'shipCell'){
    //         let cellId = e.target.id;
    //         let letter = cellId.charAt(0);
    //         let number = Number(cellId.slice(1));
    //         if(direction == 'vertical'){
    //             if(number - 1 > length){
    //                 number = length + 1;
    //             };
    //             for(let i = 0; i < length; i++){
    //                 let newNumber = number + i;
    //                 let newCoordinate = `${letter + newNumber}`;
    //                 document.getElementById(`${newCoordinate}`).className = 'placementCell';
    //             };
    //         } else if(direction == 'horizontal'){
    //             if((Number(letter.charCodeAt(0) - 97)) > length){
    //                 letter = String.fromCharCode(length + 97);
    //             };
    //             for(let i = 0; i < length; i++){
    //                 let newLetter = String.fromCharCode(letter.charCodeAt(0) + i);
    //                 let newCoordinate = `${newLetter + number}`;
    //                 document.getElementById(`${newCoordinate}`).className = 'placementCell';
    //             };
    //         };
    //     };
    // });