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
let factor1 = 0
let factor2 = 0
let operator
let result 
let factor1Arr = []
let factor2Arr = []

botScreen.textContent = factor1
topScreen.textContent = ""

function operate (a, b) {
    if (operator === "-") {
        result = a - b
        result = parseFloat(result.toFixed(2))
    } else if (operator === "+") {
        result = a + b
        result = parseFloat(result.toFixed(2))
    } else if (operator === "÷") {
        if (b === 0) {
            result = "Error"
        } else {
            result = a / b
            result = parseFloat(result.toFixed(2))
        }
    } else if (operator === "×") {
        result = a * b
        result = parseFloat(result.toFixed(2))
    }
    factor1 = 0
    factor2 = 0
}


function pushToFactor1(n) {
    factor1Arr.push(n)
    updateBotScreen()
}

function updateBotScreen() {
    factor1 = factor1Arr.map(num => num.toString()).join(''); 
    botScreen.textContent = factor1
    factor1 = parseFloat(factor1)
    
}

clearBtn.addEventListener('click', () => {
    factor1 = 0
    factor2 = 0
    result = 0
    topScreen.textContent = ""
    botScreen.textContent = factor1
    factor1Arr = []
    factor2Arr = []
})

deleteBtn.addEventListener('click', () => {
    if(factor1Arr.length === 0) {
        factor1 = 0
        botScreen.textContent = factor1
    } else if (factor1Arr.length > 0) {
        factor1Arr.pop()
        factor1 = factor1Arr.map(num => num.toString()).join('');
        factor1 = parseFloat(factor1)
        botScreen.textContent = factor1
        if(factor1Arr.length === 0) {
            factor1 = 0
            botScreen.textContent = factor1
        }
    }
})

multiplyBtn.addEventListener('click', () => {
    if (factor2 === 0) {
        factor2Arr = factor1Arr
        factor1Arr = []
        factor2 = factor2Arr.map(num => num.toString()).join('');
        factor1 = 0
        factor2 = parseFloat(factor2)
        operator = "×"
        botScreen.textContent = factor1
        topScreen.textContent = factor2 + " ×"
    } else if (factor2 != 0) {
        operate(factor2, factor1)
        factor2 = result
        operator = "×"
        topScreen.textContent = factor2 + " ×"
        factor1 = 0
        factor1Arr = []
        botScreen.textContent = factor1
        console.log(factor1)
    }
})

substractBtn.addEventListener('click', () => {
    if (factor2 === 0) {
        factor2Arr = factor1Arr
        factor1Arr = []
        factor2 = factor2Arr.map(num => num.toString()).join('');
        factor1 = 0
        factor2 = parseFloat(factor2)
        operator = "-"
        botScreen.textContent = factor1
        topScreen.textContent = factor2 + " -"
    } else if (factor2 != 0) {
        operate(factor2, factor1)
        factor2 = result
        operator = "-"
        topScreen.textContent = factor2 + " -"
        factor1 = 0
        factor1Arr = []
        botScreen.textContent = factor1
        console.log(factor1)
    }
})

addBtn.addEventListener('click', () => {
    if (factor2 === 0) {
        factor2Arr = factor1Arr
        factor1Arr = []
        factor2 = factor2Arr.map(num => num.toString()).join('');
        factor1 = 0
        factor2 = parseFloat(factor2)
        operator = "+"
        botScreen.textContent = factor1
        topScreen.textContent = factor2 + " +"
    } else if (factor2 != 0) {
        operate(factor2, factor1)
        factor2 = result
        operator = "+"
        topScreen.textContent = factor2 + " +"
        factor1 = 0
        factor1Arr = []
        botScreen.textContent = factor1
        console.log(factor1)
    }
})

divideBtn.addEventListener('click', () => {
    if (factor2 === 0) {
        factor2Arr = factor1Arr
        factor1Arr = []
        factor2 = factor2Arr.map(num => num.toString()).join('');
        factor1 = 0
        factor2 = parseFloat(factor2)
        operator = "÷"
        botScreen.textContent = factor1
        topScreen.textContent = factor2 + " ÷"
    } else if (factor2 != 0) {
        operate(factor2, factor1)
        factor2 = result
        operator = "÷"
        topScreen.textContent = factor2 + " ÷"
        factor1 = 0
        factor1Arr = []
        botScreen.textContent = factor1
        console.log(factor1) 
    }
})

equalBtn.addEventListener('click', () => {
    operate(factor2, factor1)
    factor2 = 0
    factor1 = result
    botScreen.textContent = factor1
    topScreen.textContent = factor2
})

oneBtn.addEventListener('click', () => {
    if (factor1Arr.length > 9) {
    } else {
        pushToFactor1(1) 
    }
})

twoBtn.addEventListener('click', () => {
    if (factor1Arr.length > 9) {
    } else {
        pushToFactor1(2) 
    }
})

threeBtn.addEventListener('click', () => {
    if (factor1Arr.length > 9) {
    } else {
        pushToFactor1(3) 
    }
})

fourBtn.addEventListener('click', () => {
    if (factor1Arr.length > 9) {
    } else {
        pushToFactor1(4) 
    }
})

fiveBtn.addEventListener('click', () => {
    if (factor1Arr.length > 9) {
    } else {
        pushToFactor1(5) 
    }
})

sixBtn.addEventListener('click', () => {
    if (factor1Arr.length > 9) {
    } else {
        pushToFactor1(6) 
    }
})

sevenBtn.addEventListener('click', () => {
    if (factor1Arr.length > 9) {
    } else {
        pushToFactor1(7) 
    }
})

eightBtn.addEventListener('click', () => {
    if (factor1Arr.length > 9) {
    } else {
        pushToFactor1(8) 
    }
})

nineBtn.addEventListener('click', () => {
    if (factor1Arr.length > 9) {
    } else {
        pushToFactor1(9) 
    }
})

zeroBtn.addEventListener('click', () => {
    if (factor1Arr.length > 9) {
    } else {
        pushToFactor1(0) 
    }
})

decimalBtn.addEventListener('click', () => {  
    if (factor1Arr.length > 9){
    } else if (factor1Arr.includes(".")) {
    } else {
        pushToFactor1(".")
    }
})