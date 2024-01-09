// /*
//  * Regex
// a set of characters that matches an expression
// looks for patterns in a string
// used for password validation
// Patterns
// [] looks for a range
// [a-z] matches lowercase letters
// [A-Z] matches uppercase letters
// [0-9] matches digits
// \d matches digits; equivalent to [0-9]
// \D matches anything but a digit; equivalent to [^0-9]
// ^ = not
// [^a-z] is the opposite of [a-z]; matches no lowercase letters
// [^A-Z] not an uppercase letter in the range A-Z
// [^0-9] not a digit 0-9, a non-numerical character
// . matches a single character except line terminators, but must have a preceding character if placed before and a following character if placed behind
// \w matches any alphanumeric character; equivalent to [A-Za-z0-9]
// \W opposite of \w; matches special characters and not alphanumeric characters
// \s matches whitespace characters
// \S opposite of \s; matches any non-whitespace characters

// ^ matches the beginning of an input; ex. ^B matches only if first letter is capital B; caret is not inside brackets
// $ matches the end of an input; ex. /.$/ matches only if the last letter is a period
// + matches previous token 
// ? positive look ahead
//  */

// // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/g

// const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/g;
// let string = 'TheStranglersNo7*';

// // .match()
// let result = string.match(regex);
// if (string.match(regex)) {
//     console.log('match'); 
// } else {
//     console.log('no match');
// }

// console.log(result);


//  async/ await promise 
//  server side/ client side

// Promise is an object that represents the eventual completion or failure of an asynchronous operation
// and its resulting value (MDN)

/**
 * Three states of a promise
 * pending: initial state; send something out to do something
 * fulfilled: the operation was completed successfully
 * rejected: the operation failed
 * 
*/
const loginForm = document.getElementById('loginForm');

const verifyPassword =()=> {
    const userInput = document.getElementById('username');
    const username = userInput.value;

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    const lowerTest = /[a-z]/;
    const upperTest = /[A-Z]/;
    const numTest = /\d/;
    const specialTest = /\W/;

    const display = document.getElementById('display');
    const reqList = document.createElement('ul');
    // const reqItem = document.createElement('li');

    if (password.length < 8) {
        const reqItem = document.createElement('li');

        reqItem.innerText = 'Password must be at least 8 characters long';
        reqList.appendChild(reqItem);
    } else if (password.length > 20) {
        const reqItem = document.createElement('li');

        reqItem.innerText = 'Password must be no more than 20 characters long';
        reqList.appendChild(reqItem);
    }

    if (!password.match(lowerTest)) {
        const reqItem = document.createElement('li');

        reqItem.innerText = 'Password must contain at least one lowercase letter';
        reqList.appendChild(reqItem);
    }

    if (!password.match(upperTest)) {
        const reqItem = document.createElement('li');

        reqItem.innerText = 'Password must contain at least one uppercase letter';
        reqList.appendChild(reqItem);
    }

    if (!password.match(numTest)) {
        const reqItem = document.createElement('li');

        reqItem.innerText = 'Password must contain at least one number';
        reqList.appendChild(reqItem);
    }

    if (!password.match(specialTest)) {
        const reqItem = document.createElement('li');

        reqItem.innerText = 'Password must contain at least one special character';
        reqList.appendChild(reqItem);
    }
    
    display.appendChild(reqList);

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,20}$/gm;
    // const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%&*]).{8,20}$/gm;


    username.length == 0 ? alert('Please enter a username') : null;
    
    if (password.match(regex)) {
        display.innerText = 'Account created successfully!';
    } else {
        display.appendChild(reqList);
    }
}

const matchPasswords =()=> {
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPassword = confirmPasswordInput.value;

    const matchDisplay = document.getElementById('matchDisplay');

    if (password != confirmPassword) {
        matchDisplay.innerText = 'Passwords do not match';
    } else {
        verifyPassword();
    }
}

loginForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    matchPasswords();
})







