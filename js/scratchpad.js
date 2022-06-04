function runGame() {

let username = '';
let userQuestion = '';
let guess = '';
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

    username = prompt('What is your name?');

    if (username === null) {
        return;
    }

    username ? alert(`Hello, ${username}!`) : alert('Hello!');
    userQuestion = prompt('What do you wish to ask the Magic Eight Ball?');

    if (userQuestion === null) {
        return;
    }

    alert(`${username}, asked: "${userQuestion}?"`);

    switch (randomNumber) {

    case 0:
        alert('It is decidedly so');
        break;

    case 1:
        alert('Reply hazy try again');
        break;

    case 2:
        alert('Cannot predict now');
        break;

    case 3:
        alert('Do not count on it');
        break;

    case 4:
        alert('My sources say no');
        break;

    case 5:
        alert('Outlook not so good');
        break;

    case 6:
        alert('Signs point to yes');
        break;

    case 7:
        alert('It is certain');
        break;
    }
}
