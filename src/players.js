import { shipFactory } from "./ship";
import addText from "./addText";

export const players = (() => {

    const gameOver = document.getElementById('gameOver');

    const player = (() => {
        const ships = [];
        const misses = [];
        const hits = [];
        let lost = false;

        function checkForLoss(){
            let lossCondition = this.ships.filter(ship => ship.sunk == false);
            if(lossCondition.length == 0){
                gameOver.style.display = 'flex';
                addText('gameOverText', "Player has lost the game!")
                lost = true;
            } else if(lossCondition.length !== 0){
                //no loss
                lost = false;
            };
        };

        return {
            ships,
            misses,
            hits,
            lost,
            checkForLoss,
        };
    })();

    const computer = (() => {
        const ships = [];
        const misses = [];
        const hits = [];
        let lost = false;

        function checkForLoss(){
            let lossCondition = this.ships.filter(ship => ship.sunk == true);
            console.log(lossCondition);
            if(lossCondition.length == 5){
                //loss
                gameOver.style.display = 'flex';
                addText('gameOverText', "Player has won the game!")
                lost = true;
            } else if(lossCondition.length !== 5){
                //no loss
                lost = false;
            };
        };

        return {
            ships,
            misses,
            hits,
            lost,
            checkForLoss,
        };
    })();

    return {
        player,
        computer,
    }
})();

// module.exports.players = players;