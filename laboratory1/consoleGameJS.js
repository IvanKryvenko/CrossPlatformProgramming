function numberGenerator() {
    let number = [];
    for (let i = 0; i < 4; ++i) {
        let numberElem = (1 + Math.random() * 9 - 1).toFixed(0);
        if (number.indexOf(numberElem)) {
            
        }
    }
    // for (let i = 0; i < 4; i++) {
    //     numberElement = (1 + Math.random() * 9 - 1).toFixed(0);
    //     if (!number.indexOf(numberElement)) {
    //         numberElement = (1 + Math.random() * 9 - 1).toFixed(0);
    //     }
    //     number[i] = numberElement;
    // }
    console.log(number.join(''));
}

numberGenerator();