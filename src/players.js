import { shipFactory } from "./ship";

export const players = (() => {

    const player = (() => {
        const ships = [];
        const misses = [];
        const hits = [];
        let lost = false;

        function checkForLoss(){
            let lossCondition = this.ships.filter(ship => ship.sunk == false);
            
            if(lossCondition.length == 0){
                
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
            let lossCondition = this.ships.filter(ship => ship.sunk == false);
            
            if(lossCondition.length == 0){
                //loss
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

    return {
        player,
        computer,
    }
})();

// module.exports.players = players;