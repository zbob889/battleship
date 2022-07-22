import createPlacementBoard from "./createPlacementBoard";
import selectNeighbors from "./selectNeighbors";


export default function playerSetup(){
    const popupBox = document.getElementById('popup');
    const rotateButton = document.getElementById('rotateButton');

    popupBox.style.display = 'flex';

    createPlacementBoard();

    let direction = 'horizontal';

    rotateButton.addEventListener('click', () => {
        if(direction == 'horizontal'){
            direction = 'vertical';
        } else if(direction == 'vertical'){
            direction = 'horizontal';
        };
    });

    document.querySelector('#placementBoard').addEventListener('mouseover', (e) => {
        let carrier = [];
        selectNeighbors(5, direction);
    });
};