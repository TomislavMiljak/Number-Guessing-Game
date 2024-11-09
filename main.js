
function generateRandomNumber(min = 1, max = 100) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getPlayerGuess() { 
    let guess;
    while (true) {
        
        const input = prompt("Enter a guess between 1 and 100, or type 'exit' to quit the game");
        if (input === "exit" || input === null) {
            let continueGame = confirm("Would you like to quit the game now?");
            if (continueGame){
                return "exit";
            } else continue;
            
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
    alert("Welcome to a Number Guessing Game!");
    const correctNumber = generateRandomNumber();
    let attemps = 0;
    const maxAttemps = 10;

    while (attemps < maxAttemps) {
        const playerGuess = getPlayerGuess();

        if (playerGuess === "exit") { 
            alert("You have exited the game!");
            return; 
        }

        attemps++;
        const result = checkGuess(playerGuess, correctNumber);

        if (result === "Correct!") {
            alert(`CONGRATULATIONS!!!! You got the right number in ${attemps} attemps`);
            return; 
        } else {
            alert(result);
        }
    }

    alert("THE GAME IS OVER -- You reached all the available attemps")
    alert(`The correct number is ${correctNumber}`);
    return  
}


function startGameLoop() { 
    let playAgain = true;
    while (playAgain) {
        game();
        playAgain = confirm("Would you like to play again?");
    }
    alert("Thanks for playing!");
}

startGameLoop();

