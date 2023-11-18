const resultEl = document.getElementById('result');
const lengthEL = document.getElementById('length')
const upperEL = document.getElementById('uppercase')
const lowerEL = document.getElementById('lowercase')
const numbersEL = document.getElementById('numbers')
const symbolsEL = document.getElementById('symbols')
const generateBtn = document.getElementById('generate')
const clipboardBtn = document.getElementById('clipboard')

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
}

clipboardBtn.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    const password = resultEl.innerText;
    
    if(!password) {return}
    
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert('Password copied to clipboard!');
})

generateBtn.addEventListener('click', () => {
    const length = +lengthEL.value;
    const hasUpper = upperEL.checked;
    const hasLower = lowerEL.checked;
    const hasNumbers = numbersEL.checked;
    const hasSymbols = symbolsEL.checked;

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length);
});

function generatePassword(upper, lower, numbers, symbols, length) {
    let generatedPassword = ''
    const typesCount = upper + lower + numbers + symbols;
    const typesArr = [{upper}, {lower}, {numbers}, {symbols}].filter(item => Object.values(item)[0])
    if(typesCount === 0) {
        return ''
    }
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    return generatedPassword.slice(0, length);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
