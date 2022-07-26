export const converter = (() => {
    const numberToLetter = (number) => {
        let letter = String.fromCharCode(number + 97);
        return letter;
    };

    const letterToNumber = (letter) => {
        let number = letter.charCodeAt(0) - 97;
        return number;
    };

    return {
        numberToLetter,
        letterToNumber,
    };
})();

// module.exports.converter = converter;