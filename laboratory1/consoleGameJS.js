const readlineSync = require('readline-sync');

const computerNumber = numberGenerator();
let tries = 0;

function readNumber() {
    const playerNumber = readlineSync.question('Введіть ваше число: ');
    if(playerNumber.length != 4) {
        console.log("Довжина числа має дорівнювати 4! Введіть число знову!");
        readNumber();
    }
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

function compareNumbers() {
    let cows = 0, bulls = 0;
    const playerNumber = readNumber();
    for (let i = 0; i < computerNumber.length; i++) {
        if (computerNumber[i] == playerNumber[i]) {
            bulls++;
        }
    }
    for(let i = 0; i < computerNumber.length; ++i) {
        for(let j = 0; j < playerNumber.length; ++j) {
            if (computerNumber[i] == playerNumber[j]) {
                cows++;
                break;
            }
        }
    }
    if (bulls == 4) {
        tries++;
        console.log(`Спроб: ${tries}`);
        console.log("Правильно! Ви виграли!");
    } else {
        tries++;
        cows -= bulls;
        console.log(`Биків: ${bulls}, Корів: ${cows}`);
        console.log(`Спроб: ${tries}`);
        compareNumbers();
    }
}

compareNumbers();
tries = 0;