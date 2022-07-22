import addElement from "./addElement";
import addText from "./addText";

export default function createPlacementBoard(){
    for(let i = 0; i < 121; i++){
        if(i < 1){
            addElement('p', 'textCell', '', 'placementBoard');
        } else if(i < 11){
            let letter = String.fromCharCode(i + 96);
            let upperCaseLetter = letter.toUpperCase();
            addElement('p', 'textCell', `${letter}`, 'placementBoard');
            addText(`${letter}`, `${upperCaseLetter}`);
        } else if(i > 10){
            if(i % 11 == 0){
                let number = i / 11;
                addElement('p', 'textCell', `${number + 'placement'}`, 'placementBoard');
                addText(`${number + 'placement'}`, `${number}`);
            } else if(i % 11 != 0){
                if(i < 22){
                    let letter = String.fromCharCode(i + 85)
                    addElement('div', 'placementCell', `${letter + 1}`, 'placementBoard');
                } else if(i < 33){
                    let letter = String.fromCharCode(i + 74)
                    addElement('div', 'placementCell', `${letter + 2}`, 'placementBoard');
                } else if(i < 44){
                    let letter = String.fromCharCode(i + 63)
                    addElement('div', 'placementCell', `${letter + 3}`, 'placementBoard');
                } else if(i < 55){
                    let letter = String.fromCharCode(i + 52)
                    addElement('div', 'placementCell', `${letter + 4}`, 'placementBoard');
                } else if(i < 66){
                    let letter = String.fromCharCode(i + 41)
                    addElement('div', 'placementCell', `${letter + 5}`, 'placementBoard');
                } else if(i < 77){
                    let letter = String.fromCharCode(i + 30)
                    addElement('div', 'placementCell', `${letter + 6}`, 'placementBoard');
                } else if(i < 88){
                    let letter = String.fromCharCode(i + 19)
                    addElement('div', 'placementCell', `${letter + 7}`, 'placementBoard');
                } else if(i < 99){
                    let letter = String.fromCharCode(i + 8)
                    addElement('div', 'placementCell', `${letter + 8}`, 'placementBoard');
                } else if(i < 110){
                    let letter = String.fromCharCode(i - 3)
                    addElement('div', 'placementCell', `${letter + 9}`, 'placementBoard');
                } else if(i < 121){
                    let letter = String.fromCharCode(i - 14)
                    addElement('div', 'placementCell', `${letter + 10}`, 'placementBoard');
                };
            };
        };
    };
};