const readlineSync = require('readline-sync');

function readNumber() {
    const playerNumber = readlineSync.question('Enter your number: ');
    const playerNumberArr = playerNumber.split('');
    return playerNumberArr;
}

function numberGenerator() {
    let number = [];
    number[0] = (1 + Math.random() * 9 - 1).toFixed(0);
    for(let i = 1; i < 4; i++) {
        let newElement = (1 + Math.random() * 9 - 1).toFixed(0);
        while (newElement == number[i - 1] || newElement == number[i - 2] || newElement == number[i - 3]) {
            newElement = (1 + Math.random() * 9 - 1).toFixed(0);
        }
        number[i] = newElement;
    }
    return number;
}