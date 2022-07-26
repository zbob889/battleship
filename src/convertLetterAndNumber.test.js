const functions = require('./convertLettersAndNumbers.js');

test('Converts a number into a letter', () => {
    expect(functions.converter.numberToLetter(0)).toBe('a');
});

test('Converts a letter into a number', () => {
    expect(functions.converter.letterToNumber('a')).toBe(0);
});