const functions = require('./gameBoard');

test('creates a ship at a particular location', () => {
    const yAxisTestArray = ['a1', 'a2', 'a3'];
    const testShip = {
        name: 'playerDestroyer',
        length: 3,
        boardLocation: yAxisTestArray
    };
    expect(functions.createShipAtLocation('playerDestroyer', 3, yAxisTestArray)).toEqual(testShip);
});

test('places a given ship along y axis', () => {
    const yAxisTestArray = ['a1', 'a2', 'a3'];
    const testShip = {
        name: 'playerDestroyer',
        length: 3,
        boardLocation: yAxisTestArray
    };
    expect(functions.gameBoard.place('playerDestroyer', 'a', 'a', 1, 3)).toEqual(testShip);
});

test('places a given ship along x axis', () => {
    const xAxisTestArray = ['a1', 'b1', 'c1'];
    const testShip = {
        name: 'playerDestroyer',
        length: 3,
        boardLocation: xAxisTestArray
    };
    expect(functions.gameBoard.place('playerDestroyer', 'a', 'c', 1, 1)).toEqual(testShip);
});

test('checks for a given coordinate to attack and misses', () => {
    const missesTest = ['a1'];
    expect(functions.gameBoard.receiveAttack('a1')).toEqual(missesTest);
});

// test('checks for a given coordinate to attack and hits', () => {
//     const hitsTest = ['a1'];
//     expect(functions.gameBoard.receiveAttack('a1')).toEqual(hitsTest);
// });