import { shipFactory } from "./ship";

export const players = (() => {

    const player = (() => {
        const ships = [];
        const misses = [];
        const hits = [];

        return {
            ships,
            misses,
            hits
        }
    })();

    const computer = (() => {
        const ships = [];
        const misses = [];
        const hits = [];

        return {
            ships,
            misses,
            hits
        }
    })();

    return {
        player,
        computer
    }
})();

// module.exports.players = players;