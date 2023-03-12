const topScreen = document.getElementById("previousResult")
const botScreen = document.getElementById("currentInput")
const deleteBtn = document.getElementById("delete")
const clearBtn = document.getElementById("clear")
const oneBtn = document.getElementById("1")
const twoBtn = document.getElementById("2")
const threeBtn = document.getElementById("3")
const fourBtn = document.getElementById("4")
const fiveBtn = document.getElementById("5")
const sixBtn = document.getElementById("6")
const sevenBtn = document.getElementById("7")
const eightBtn = document.getElementById("8")
const nineBtn = document.getElementById("9")
const zeroBtn = document.getElementById("0")
const decimalBtn = document.getElementById("decimal")
const equalBtn = document.getElementById("equal")
const addBtn = document.getElementById("add")
const substractBtn = document.getElementById("substract")
const multiplyBtn = document.getElementById("multiply")
const divideBtn = document.getElementById("divide")
let factor1 
let factor2 
let factor1Arr = []
let factor2Arr = []

botScreen.textContent = "0"
topScreen.textContent = "0"


function pushToFactor1(n) {
    factor1Arr.push(n)
    updateBotScreen()
}

function updateBotScreen() {
    factor1 = factor1Arr.map(num => num.toString()).join(''); 
    botScreen.textContent = factor1
}

clearBtn.addEventListener('click', () => {
    topScreen.textContent = "0"
    botScreen.textContent = "0"
    factor1Arr = []
    factor2Arr = []
})

deleteBtn.addEventListener('click', () => {
    if(factor1Arr.length === 0) {
        botScreen.textContent = "0"
    } else if (factor1Arr.length > 0) {
        factor1Arr.pop()
        factor1 = factor1Arr.map(num => num.toString()).join('');
        botScreen.textContent = factor1
        if(factor1Arr.length === 0) {
            botScreen.textContent = "0"
        }
    }
})

multiplyBtn.addEventListener('click', () => {
    factor1Arr.push(" ×")
    factor2Arr = factor1Arr
    factor1Arr = []
    factor2 = factor2Arr.map(num => num.toString()).join('');
    botScreen.textContent = "0"
    topScreen.textContent = factor2
})

substractBtn.addEventListener('click', () => {
    factor1Arr.push(" -")
    factor2Arr = factor1Arr
    factor1Arr = []
    factor2 = factor2Arr.map(num => num.toString()).join('');
    botScreen.textContent = "0"
    topScreen.textContent = factor2
})

addBtn.addEventListener('click', () => {
    factor1Arr.push(" +")
    factor2Arr = factor1Arr
    factor1Arr = []
    factor2 = factor2Arr.map(num => num.toString()).join('');
    botScreen.textContent = "0"
    topScreen.textContent = factor2
})

divideBtn.addEventListener('click', () => {
    factor1Arr.push(" ÷")
    factor2Arr = factor1Arr
    factor1Arr = []
    factor2 = factor2Arr.map(num => num.toString()).join('');
    botScreen.textContent = "0"
    topScreen.textContent = factor2
})

oneBtn.addEventListener('click', () => {
    pushToFactor1(1)
})

twoBtn.addEventListener('click', () => {
    pushToFactor1(2)
})

threeBtn.addEventListener('click', () => {
    pushToFactor1(3)
})

fourBtn.addEventListener('click', () => {
    pushToFactor1(4)
})

fiveBtn.addEventListener('click', () => {
    pushToFactor1(5)
})

sixBtn.addEventListener('click', () => {
    pushToFactor1(6)
})

sevenBtn.addEventListener('click', () => {
    pushToFactor1(7)
})

eightBtn.addEventListener('click', () => {
    pushToFactor1(8)
})

nineBtn.addEventListener('click', () => {
    pushToFactor1(9)
})

zeroBtn.addEventListener('click', () => {
    pushToFactor1(0)
})

decimalBtn.addEventListener('click', () => {
    pushToFactor1(".")
})





