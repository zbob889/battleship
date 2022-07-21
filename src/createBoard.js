import addElement from "./addElement";
import addText from "./addText";

export default function createBoard(){

    for(let i = 0; i < 121; i++){
        if(i < 1){
            addElement('p', 'textCell', '', 'playerBoard');
            addElement('p', 'textCell', '', 'computerBoard');
        } else if(i < 11){
            let letter = String.fromCharCode(i + 96);
            let upperCaseLetter = letter.toUpperCase();
            addElement('p', 'textCell', `${letter + 1}`, 'playerBoard');
            addText(`${letter + 1}`, `${upperCaseLetter}`);
            addElement('p', 'textCell', `${letter + 2}`, 'computerBoard');
            addText(`${letter + 2}`, `${upperCaseLetter}`);
        } else if(i > 10){
            if(i % 11 == 0){
                let number = i / 11;
                addElement('p', 'textCell', `${number + 'player'}`, 'playerBoard');
                addText(`${number + 'player'}`, `${number}`);
                addElement('p', 'textCell', `${number + 'computer'}`, 'computerBoard');
                addText(`${number + 'computer'}`, `${number}`);
            } else if(i % 11 != 0){
                if(i < 22){
                    let letter = String.fromCharCode(i + 85)
                    addElement('div', 'playerCell', `${letter + 1 + 'Player'}`, 'playerBoard');
                    addElement('div', 'computerCell', `${letter + 1 + 'Computer'}`, 'computerBoard');
                } else if(i < 33){
                    let letter = String.fromCharCode(i + 74)
                    addElement('div', 'playerCell', `${letter + 2 + 'Player'}`, 'playerBoard');
                    addElement('div', 'computerCell', `${letter + 2 + 'Computer'}`, 'computerBoard');
                } else if(i < 44){
                    let letter = String.fromCharCode(i + 63)
                    addElement('div', 'playerCell', `${letter + 3 + 'Player'}`, 'playerBoard');
                    addElement('div', 'computerCell', `${letter + 3 + 'Computer'}`, 'computerBoard');
                } else if(i < 55){
                    let letter = String.fromCharCode(i + 52)
                    addElement('div', 'playerCell', `${letter + 4 + 'Player'}`, 'playerBoard');
                    addElement('div', 'computerCell', `${letter + 4 + 'Computer'}`, 'computerBoard');
                } else if(i < 66){
                    let letter = String.fromCharCode(i + 41)
                    addElement('div', 'playerCell', `${letter + 5 + 'Player'}`, 'playerBoard');
                    addElement('div', 'computerCell', `${letter + 5 + 'Computer'}`, 'computerBoard');
                } else if(i < 77){
                    let letter = String.fromCharCode(i + 30)
                    addElement('div', 'playerCell', `${letter + 6 + 'Player'}`, 'playerBoard');
                    addElement('div', 'computerCell', `${letter + 6 + 'Computer'}`, 'computerBoard');
                } else if(i < 88){
                    let letter = String.fromCharCode(i + 19)
                    addElement('div', 'playerCell', `${letter + 7 + 'Player'}`, 'playerBoard');
                    addElement('div', 'computerCell', `${letter + 7 + 'Computer'}`, 'computerBoard');
                } else if(i < 99){
                    let letter = String.fromCharCode(i + 8)
                    addElement('div', 'playerCell', `${letter + 8 + 'Player'}`, 'playerBoard');
                    addElement('div', 'computerCell', `${letter + 8 + 'Computer'}`, 'computerBoard');
                } else if(i < 110){
                    let letter = String.fromCharCode(i - 3)
                    addElement('div', 'playerCell', `${letter + 9 + 'Player'}`, 'playerBoard');
                    addElement('div', 'computerCell', `${letter + 9 + 'Computer'}`, 'computerBoard');
                } else if(i < 121){
                    let letter = String.fromCharCode(i - 14)
                    addElement('div', 'playerCell', `${letter + 10 + 'Player'}`, 'playerBoard');
                    addElement('div', 'computerCell', `${letter + 10 + 'Computer'}`, 'computerBoard');
                };
            };
        };
    };
};