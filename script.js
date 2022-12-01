console.log('Hello')

let btn = document.querySelector('.convert-btn');
btn.addEventListener('click', () => {
    let romanNums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let s = document.getElementById('num-input').value;
    let conversion = document.querySelector('.conversion');
    let convertedNum = 0;
    let convertedRoman = "";

    for (let i = 0; i < s.length; i++) {
        const current = romanNums[s[i]];
        const next = romanNums[s[i+1]];
        (current < next) ? (convertedNum -= current) : (convertedNum += current);
    }
    conversion.innerHTML = convertedNum;
})