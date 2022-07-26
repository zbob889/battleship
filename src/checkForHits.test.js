const functions = require('./checkForHits.js');

// test('gets letter', () => {
//     expect(functions.checkForHits('')).toBe('b');
// });

// test('gets letter', () => {
//     expect(functions.checkForHits('')).toBe('2');
// });

test('get adjacent cells', () => {
    let array = ['a2Player', 'b10Player', 'a9Player', 'i1Player', 'j2Player', 'i10Player'];
    expect(functions.checkForHits('')).toEqual('');
});