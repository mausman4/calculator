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

function prep(){
    a_active = false;
    operation_active = false;
    dec_active = false;
    dec_place = 1;
    console.log("a = " + a);
    console.log("b = " + b);
}

function operate(a, b, operation){
    console.log("a = " + a);
    console.log("b = " + b);
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

function reset(disp_msg){
    a = disp_msg;
    console.log("*a = " + a);
    b = 0;
    console.log("*b = " + b);
    a_active = true;
    display.textContent = disp_msg;
    operation_active = false;
    dec_active = false;
    dec_place = 1;
}

const display = document.querySelector('.display');
let a = 0;
let b = 0;
//a_active is whether the current number manipulation is affecting lhs or rhs
//true means changing lhs, false means changing rhs
let a_active = true;
let operation_active = false;
let curr_operation = -1;
let dec_active = false;
let dec_place = 1;

const ac_btn = document.querySelector('.ac');
ac_btn.addEventListener('click', () => {
    reset(0);
});

const dec_btn = document.querySelector('.decimal');
dec_btn.addEventListener('click', () => {
    if (!dec_active){
        display.textContent = display.textContent + ".";
        dec_active = true;
    }
})

const p_m = document.querySelector('.p-m');
p_m.addEventListener('click', () => {
    if (a_active || operation_active){
        a = a * (-1);
        display.textContent = a;
        operation_active = false;
    }
    else{
        b = b * (-1);
        display.textContent = b;
    }
    console.log("a = " + a);
    console.log("b = " + b);
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    let z = 9;
    if (operation_active){
        reset(9);
    }
    else if (a_active){
        if (!dec_active){
            a = (a * 10) + z;
            display.textContent = a;
        }
        else{
            a = a + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        }
    }
    else{
        if (!dec_active){
            b = (b * 10) + z;
            display.textContent = b;
        }
        else{
            b = b + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        } 
    }
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    let z = 8;
    if (operation_active){
        reset(8);
    }
    else if (a_active){
        if (!dec_active){
            a = (a * 10) + z;
            display.textContent = a;
        }
        else{
            a = a + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        }
    }
    else{
        if (!dec_active){
            b = (b * 10) + z;
            display.textContent = b;
        }
        else{
            b = b + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        } 
    }
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    let z = 7;
    if (operation_active){
        reset(7);
    }
    else if (a_active){
        if (!dec_active){
            a = (a * 10) + z;
            display.textContent = a;
        }
        else{
            a = a + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        }
    }
    else{
        if (!dec_active){
            b = (b * 10) + z;
            display.textContent = b;
        }
        else{
            b = b + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        } 
    }
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
    let z = 6;
    if (operation_active){
        reset(6);
    }
    else if (a_active){
        if (!dec_active){
            a = (a * 10) + z;
            display.textContent = a;
        }
        else{
            a = a + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        }
    }
    else{
        if (!dec_active){
            b = (b * 10) + z;
            display.textContent = b;
        }
        else{
            b = b + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        } 
    }
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
    let z = 5;
    if (operation_active){
        reset(5);
    }
    else if (a_active){
        if (!dec_active){
            a = (a * 10) + z;
            display.textContent = a;
        }
        else{
            a = a + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        }
    }
    else{
        if (!dec_active){
            b = (b * 10) + z;
            display.textContent = b;
        }
        else{
            b = b + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        } 
    }
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
    let z = 4;
    if (operation_active){
        reset(4);
    }
    else if (a_active){
        if (!dec_active){
            a = (a * 10) + z;
            display.textContent = a;
        }
        else{
            a = a + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        }
    }
    else{
        if (!dec_active){
            b = (b * 10) + z;
            display.textContent = b;
        }
        else{
            b = b + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        } 
    }
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
    let z = 3;
    if (operation_active){
        reset(3);
    }
    else if (a_active){
        if (!dec_active){
            a = (a * 10) + z;
            display.textContent = a;
        }
        else{
            a = a + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        }
    }
    else{
        if (!dec_active){
            b = (b * 10) + z;
            display.textContent = b;
        }
        else{
            b = b + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        } 
    }
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
    let z = 2;
    if (operation_active){
        reset(2);
    }
    else if (a_active){
        if (!dec_active){
            a = (a * 10) + z;
            display.textContent = a;
        }
        else{
            a = a + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        }
    }
    else{
        if (!dec_active){
            b = (b * 10) + z;
            display.textContent = b;
        }
        else{
            b = b + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        } 
    }
});

const one = document.querySelector('.one');
one.addEventListener('click', () => {
    let z = 1;
    if (operation_active){
        reset(1);
    }
    else if (a_active){
        if (!dec_active){
            a = (a * 10) + z;
            display.textContent = a;
        }
        else{
            a = a + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        }
    }
    else{
        if (!dec_active){
            b = (b * 10) + z;
            display.textContent = b;
        }
        else{
            b = b + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        } 
    }
});

const zero = document.querySelector('.zero-key');
zero.addEventListener('click', () => {
    let z = 0;
    if (operation_active){
        reset(0);
    }
    else if (a_active){
        if (!dec_active){
            a = (a * 10) + z;
            display.textContent = a;
        }
        else{
            a = a + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        }
    }
    else{
        if (!dec_active){
            b = (b * 10) + z;
            display.textContent = b;
        }
        else{
            b = b + z/(10**dec_place);
            dec_place ++;
            display.textContent = display.textContent + z.toString();
        } 
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
        operation_active = true;
        console.log("a = " + a);
        console.log("b = " + b);
    }
});

const plus = document.querySelector('.addition');
plus.addEventListener('click', () => {
    prep();
});

const sub = document.querySelector('.subtract');
sub.addEventListener('click', () => {
    prep();
});

const mult = document.querySelector('.multiply');
mult.addEventListener('click', () => {
    prep();
});

const divide_btn = document.querySelector('.divide');
divide_btn.addEventListener('click', () => {
    prep();
});
