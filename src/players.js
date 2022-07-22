import { shipFactory } from "./ship";

export const players = (() => {

    const player = (() => {
        const ships = [];
        const misses = [];
        const hits = [];

        function checkForLoss(){
            let lossCondition = this.ships.filter(ship => ship.sunk == false);
            
            if(lossCondition.length == 0){
                //loss
            } else if(lossCondition.length !== 0){
                //no loss
            };
        };

        return {
            ships,
            misses,
            hits,
            checkForLoss,
        };
    })();

    const computer = (() => {
        const ships = [];
        const misses = [];
        const hits = [];

        function checkForLoss(){
            let lossCondition = this.ships.filter(ship => ship.sunk == false);
            
            if(lossCondition.length == 0){
                //loss
            } else if(lossCondition.length !== 0){
                //no loss
            };
        };

        return {
            ships,
            misses,
            hits,
            checkForLoss,
        };
    })();

    return {
        player,
        computer,
    }
})();

// module.exports.players = players;