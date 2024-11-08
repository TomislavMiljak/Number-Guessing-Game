

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

