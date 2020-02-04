const readlineSync = require('readline-sync');

const computerNumber = numberGenerator();
let tries = 0;

function readNumber() {
    const playerNumber = readlineSync.question('Enter your number: ');
    if(playerNumber.length != 4) {
        console.log("Number length must be equal 4! Try again");
        readNumber();
    }
    const playerNumberArr = playerNumber.split('');
    console.log(playerNumberArr);
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
    console.log(number);
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
        console.log(`Try: ${tries}`);
        console.log("Thats right! You win!");
    } else {
        tries++;
        cows -= bulls;
        console.log(`Биків: ${bulls}, cows: ${cows}`);
        console.log(`Try: ${tries}`);
        compareNumbers();
    }
}

compareNumbers();