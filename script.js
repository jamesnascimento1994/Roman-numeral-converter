let btn = document.querySelector('.convert-btn');
btn.addEventListener('click', () => {
    // convert roman numeral to number
    const romanNums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let s = document.getElementById('num-input').value;
    let conversion = document.querySelector('.conversion');
    let convertedNum = 0;
    for (let i = 0; i < s.length; i++) {
        if (typeof s !== 'number' && romanNums[s[i]]) {
            const current = romanNums[s[i]];
            const next = romanNums[s[i+1]];
            (current < next) ? (convertedNum -= current) : (convertedNum += current);
            conversion.innerHTML = convertedNum;
        // convert number to roman numeral 
        } else if (parseFloat(s)) {
            let convertedRoman = "";
            parsedInput = parseFloat(s);
            while (parsedInput) {
                if (parsedInput >= 1000) {
                    convertedRoman += "M";
                    parsedInput -= 1000;
                } else if (parsedInput >= 500) {
                    if (parsedInput >= 900) {
                        convertedRoman += "CM";
                        parsedInput -= 900;
                    } else {
                        convertedRoman += "D";
                        parsedInput -= 500;
                    }
                } else if (parsedInput >= 100) {
                    if (parsedInput >= 400) {
                        convertedRoman += "CD";
                        parsedInput -= 400;
                    } else {
                        convertedRoman += "C";
                        parsedInput -= 100;
                    }
                } else if (parsedInput >= 50) {
                    if (parsedInput >= 90) {
                        convertedRoman += "XC";
                        parsedInput -= 90;
                    } else {
                        convertedRoman += "L";
                        parsedInput -= 50;
                    }
                } else if (parsedInput >= 10) {
                    if (parsedInput >= 40) {
                        convertedRoman += "XL";
                        parsedInput -= 40;
                    } else {
                        convertedRoman += "X";
                        parsedInput -= 10;
                    }
                } else if (parsedInput >= 5) {
                    if (parsedInput >= 9) {
                        convertedRoman += "IX";
                        parsedInput -= 9;
                    } else {
                        convertedRoman += "V";
                        parsedInput -= 5;
                    }
                } else {
                    if (parsedInput >= 4) {
                        convertedRoman += "IV";
                        parsedInput -= 4;
                    } else {
                        convertedRoman += "I";
                        parsedInput -= 1;
                    }
                }
            }
            conversion.innerHTML = convertedRoman;
        } else {
            conversion.innerHTML = "Please enter a roman numeral or a number that is greater than 0.";
        }
    }
});
