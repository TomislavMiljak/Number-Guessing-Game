/*function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}*/
function generateRandomNumber(min = 1, max = 100) { //In case of changing limits it prevents bugs 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getPlayerGuess() { //input is resposible to exit the game when user desires
    let guess;
    while (true) {
        const input = prompt("Enter a guess between 1 and 100, or type 'exit' to quit the game");
        if (input === "exit") {
            return "exit";
        }
        guess = parseInt(input);
        if (!isNaN(guess) && guess >= 1 && guess <= 100) {
            return guess;
        } else {
            alert("Invalid input. Please enter a number between 1 and 100, or type 'exit'");
        }
    }
}

function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) {
        return ("Too LOW");
    } else if (playerGuess > correctNumber) {
        return ("Too HIGH");
    } else {
        return ("Correct!");
    }


}

function game() {
    const correctNumber = generateRandomNumber();
    let attemps = 0;
    const maxAttemps = 10;

    while (attemps < maxAttemps) {
        const playerGuess = getPlayerGuess();

        if (playerGuess === "exit") { //IF is resposible to exit the game when user desires
            alert("You have exited the game");
            return; // Leaving game function
        }

        attemps++;
        const result = checkGuess(playerGuess, correctNumber);

        if (result === "Correct!") {
            alert(`CONGRATULATIONS!!!! You got the right number in ${attemps} attemps`);
            return; // Player wins
        } else {
            alert(result);
        }
    }

    alert("THE GAME IS OVER -- You reached all the available attemps")
    alert(`The correct number is ${correctNumber}`);
    return  //player lost
}

//game(); USED WITHOUT startGameLoop
function startGameLoop() { // Using WHILE to avoid the BUG  that keeps function calling itself without exiting,
    let playAgain = true;
    while (playAgain) {
        game();
        playAgain = confirm("Would you like to play again?");
    }
    alert("Thanks for playing!");
}

startGameLoop();

