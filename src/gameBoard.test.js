const functions = require('./gameBoard');

test('places a given ship along y axis', () => {
    const xAxisTestArray = ['a1', 'a2', 'a3'];
    expect(functions.gameBoard.place('playerDestroyer', 'a', 'a', 1, 3)).toBe(xAxisTestArray);
});

test('places a given ship along x axis', () => {
    const yAxisTestArray = ['a1', 'b1', 'c1'];
    expect(functions.gameBoard.place('playerDestroyer', 'a', 'c', 1, 1)).toBe(yAxisTestArray);
});