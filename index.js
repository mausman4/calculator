function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operate(a, b, operation){
    switch (operation){
        case (0):
            return add(a,b);
        case (1):
            return subtract(a,b);
        case (2):
            return multiply(a,b);
        case (3):
            return divide(a, b);
        default:
            return;
    }
}
const display = document.querySelector('.display');
let a = 0;
let b = 0;
//a_active is whether the current number manipulation is affecting lhs or rhs
//true means changing lhs, false means changing rhs
let a_active = true;
let curr_operation = -1;

const ac_btn = document.querySelector('.ac');
ac_btn.addEventListener('click', () => {
    a = 0;
    b = 0;
    a_active = true;
    display.textContent = '0';
});

const p_m = document.querySelector('.p-m');
p_m.addEventListener('click', () => {
    if (a_active){
        a = a * (-1);
    }
    else{
        b = b * (-1);
    }
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    if (a_active){
        a = (a * 10) + 9;
        display.textContent = a;
    }
    else{
        b = (b * 10) + 9;
        display.textContent = b;
    }
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    if (a_active){
        a = (a * 10) + 8;
        display.textContent = a;
    }
    else{
        b = (b * 10) + 8;
        display.textContent = b;
    }
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    if (a_active){
        a = (a * 10) + 7;
        display.textContent = a;
    }
    else{
        b = (b * 10) + 7;
        display.textContent = b;
    }
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
    if (a_active){
        a = (a * 10) + 6;
        display.textContent = a;
    }
    else{
        b = (b * 10) + 6;
        display.textContent = b;
    }
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
    if (a_active){
        a = (a * 10) + 5;
        display.textContent = a;
    }
    else{
        b = (b * 10) + 5;
        display.textContent = b;
    }
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
    if (a_active){
        a = (a * 10) + 4;
        display.textContent = a;
    }
    else{
        b = (b * 10) + 4;
        display.textContent = b;
    }
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
    if (a_active){
        a = (a * 10) + 3;
        display.textContent = a;
    }
    else{
        b = (b * 10) + 3;
        display.textContent = b;
    }
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
    if (a_active){
        a = (a * 10) + 2;
        display.textContent = a;
    }
    else{
        b = (b * 10) + 2;
        display.textContent = b;
    }
});

const one = document.querySelector('.one');
one.addEventListener('click', () => {
    if (a_active){
        a = (a * 10) + 1;
        display.textContent = a;
    }
    else{
        b = (b * 10) + 1;
        display.textContent = b;
    }
});

const zero = document.querySelector('.zero-key');
zero.addEventListener('click', () => {
    if (a_active){
        a = a * 10;
        display.textContent = a;
    }
    else{
        b = b * 10;
        display.textContent = b;
    }
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if (curr_operation != -1){
        let result = operate(a, b, curr_operation);
        display.textContent = result;
        curr_operation = -1; //reset current operation to null

        b = 0;
        a = result; //if we want to chain operations
        a_active = false;

    }
});

const plus = document.querySelector('.addition');
plus.addEventListener('click', () => {
    curr_operation = 0;
    a_active = false;
});
