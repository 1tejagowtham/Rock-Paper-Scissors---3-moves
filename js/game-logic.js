// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;


//validating move type 
function isValidMoveType(moveType) {

    return (moveType == 'rock') || (moveType == 'paper') || (moveType == 'scissors');

}

//validating value type
function isValidMoveValue(moveValue) {

    return (moveValue >= 1) && (moveValue <= 99);

}




function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {


    /*
        if (moveOneType == undefined || moveTwoType == undefined || moveThreeType == undefined || moveOneValue == undefined ||
            moveTwoValue == undefined || moveThreeValue == undefined) {

            playerOneMoveOneType = undefined;
            playerOneMoveTwoType = undefined;
            playerOneMoveThreeType = undefined;
            playerTwoMoveOneType = undefined;
            playerTwoMoveTwoType = undefined;
            playerTwoMoveThreeType = undefined;
            playerOneMoveOneValue = undefined;
            playerOneMoveTwoValue = undefined;
            playerOneMoveThreeValue = undefined;
            playerTwoMoveOneValue = undefined;
            playerTwoMoveTwoValue = undefined;
            playerTwoMoveThreeValue = undefined;
        }

        if (isValidMoveType(moveOneType) || isValidMoveType(moveTwoType) || isValidMoveType(moveThreeType)) {
            playerOneMoveOneType = undefined;
            playerOneMoveTwoType = undefined;
            playerOneMoveThreeType = undefined;
            playerTwoMoveOneType = undefined;
            playerTwoMoveTwoType = undefined;
            playerTwoMoveThreeType = undefined;
            playerOneMoveOneValue = undefined;
            playerOneMoveTwoValue = undefined;
            playerOneMoveThreeValue = undefined;
            playerTwoMoveOneValue = undefined;
            playerTwoMoveTwoValue = undefined;
            playerTwoMoveThreeValue = undefined;
        }
        */
    // SOMEHOW THIS BELOW CODE DIDN'T WORK

    if (!moveOneType || !moveTwoType || !moveThreeType || !moveOneValue || !moveTwoValue || !moveThreeValue) {

        return;
    }
    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;

    }
    if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return;

    }


    if (moveOneValue + moveTwoValue + moveThreeValue > 99)
        return;


    if (player == 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;



    } else if (player == 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}
/*
let getRoundWinner = round => {
    
        if (!playerOnemoveOneType || !playerOnemoveTwoType || !playerOnemoveThreeType || !playerOnemoveOneValue ||
            !playerOnemoveTwoValue || !playerOnemoveThreeValue || !playerTwomoveOneType || !playerTwomoveTwoType ||
            !playerTwomoveThreeType || !playerTwomoveOneValue ||
            !playerTwomoveTwoValue || !playerTwomoveThreeValue) {

            return null;

        }
    
    switch (round) {
        case 1:
            {

                if (playerOneMoveOneType == 'rock') {
                    if (playerTwoMoveOneType == 'scissors')
                        return 'Player One';
                    else if (playerTwoMoveOneType == 'paper')
                        return 'Player Two';
                    else {
                        if (playerOneMoveOneValue > playerTwoMoveOneValue)
                            return 'Player One';
                        else if (playerOneMoveOneValue < playerTwoMoveOneValue)
                            return 'Player Two';
                        else
                            return 'Tie';
                    }
                } else if (playerOneMoveOneType == 'scissors') {
                    if (playerTwoMoveOneType == 'rock')
                        return 'Player Two';
                    else if (playerTwoMoveOneType == 'paper')
                        return 'Player One';
                    else {
                        if (playerOneMoveOneValue > playerTwoMoveOneValue)
                            return 'Player One';
                        else if (playerOneMoveOneValue < playerTwoMoveOneValue)
                            return 'Player Two';
                        else
                            return 'Tie';
                    }
                } else if (playerOneMoveOneType == 'paper') {
                    if (playerTwoMoveOneType == 'rock')
                        return 'Player One';
                    else if (playerTwoMoveOneType == 'scissors')
                        return 'Player Two';
                    else {
                        if (playerOneMoveOneValue > playerTwoMoveOneValue)
                            return 'Player One';
                        else if (playerOneMoveOneValue < playerTwoMoveOneValue)
                            return 'Player Two';
                        else
                            return 'Tie';
                    }
                }

            }
        case 2:
            {

                if (playerOneMoveTwoType == 'rock') {
                    if (playerTwoMoveTwoType == 'scissors')
                        return 'Player One';
                    else if (playerTwoMoveTwoType == 'paper')
                        return 'Player Two';
                    else {
                        if (playerOneMoveTwoValue > playerTwoMoveTwoValue)
                            return 'Player One';
                        else if (playerOneMoveTwoValue < playerTwoMoveTwoValue)
                            return 'Player Two';
                        else
                            return 'Tie';
                    }
                } else if (playerOneMoveTwoType == 'scissors') {
                    if (playerTwoMoveTwoType == 'rock')
                        return 'Player Two';
                    else if (playerTwoMoveTwoType == 'paper')
                        return 'Player One';
                    else {
                        if (playerOneMoveTwoValue > playerTwoMoveTwoValue)
                            return 'Player One';
                        else if (playerOneMoveTwoValue < playerTwoMoveTwoValue)
                            return 'Player Two';
                        else
                            return 'Tie';
                    }
                } else if (playerOneMoveTwoType == 'paper') {
                    if (playerTwoMoveTwoType == 'rock')
                        return 'Player One';
                    else if (playerTwoMoveTwoType == 'scissors')
                        return 'Player Two';
                    else {
                        if (playerOneMoveTwoValue > playerTwoMoveTwoValue)
                            return 'Player One';
                        else if (playerOneMoveTwoValue < playerTwoMoveTwoValue)
                            return 'Player Two';
                        else
                            return 'Tie';
                    }
                }

            }
        case 3:
            {

                if (playerOneMoveThreeType == 'rock') {
                    if (playerTwoMoveThreeType == 'scissors')
                        return 'Player One';
                    else if (playerTwoMoveThreeType == 'paper')
                        return 'Player Two';
                    else {
                        if (playerOneMoveThreeValue > playerTwoMoveThreeValue)
                            return 'Player One';
                        else if (playerOneMoveThreeValue < playerTwoMoveThreeValue)
                            return 'Player Two';
                        else
                            return 'Tie';
                    }
                } else if (playerOneMoveThreeType == 'scissors') {
                    if (playerTwoMoveThreeType == 'rock')
                        return 'Player Two';
                    else if (playerTwoMoveThreeType == 'paper')
                        return 'Player One';
                    else {
                        if (playerOneMoveThreeValue > playerTwoMoveThreeValue)
                            return 'Player One';
                        else if (playerOneMoveThreeValue < playerTwoMoveThreeValue)
                            return 'Player Two';
                        else
                            return 'Tie';
                    }
                } else if (playerOneMoveTwoType == 'paper') {
                    if (playerTwoMoveTwoType == 'rock')
                        return 'Player One';
                    else if (playerTwoMoveTwoType == 'scissors')
                        return 'Player Two';
                    else {
                        if (playerOneMoveTwoValue > playerTwoMoveTwoValue)
                            return 'Player One';
                        else if (playerOneMoveTwoValue < playerTwoMoveTwoValue)
                            return 'Player Two';
                        else
                            return 'Tie';
                    }
                }
            }
        default:
            return null;

    }



}

*/
function getRoundWinner(roundNumber) {
    switch (roundNumber) {
        case 1:
            return getMoveWinner(playerOneMoveOneType,
                playerOneMoveOneValue,
                playerTwoMoveOneType,
                playerTwoMoveOneValue);
        case 2:
            return getMoveWinner(playerOneMoveTwoType,
                playerOneMoveTwoValue,
                playerTwoMoveTwoType,
                playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType,
                playerOneMoveThreeValue,
                playerTwoMoveThreeType,
                playerTwoMoveThreeValue);
        default:
            return null;
    }
}

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType,
    playerTwoMoveValue) {
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType ||
        !playerTwoMoveValue) {
        return null;
    }

    if (playerOneMoveType === playerTwoMoveType) {
        if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else if (playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    }
    if (playerOneMoveType === 'rock') {
        if (playerTwoMoveType === 'scissors') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    } else if (playerOneMoveType === 'paper') {
        if (playerTwoMoveType === 'rock') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    } else {
        if (playerTwoMoveType === 'paper') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    }
}
/*
let getGameWinner = () => {
    if (getRoundWinner(1) && getRoundWinner(2) == 'Player One' || getRoundWinner(1) && getRoundWinner(3) == 'Player One' || getRoundWinner(2) && getRoundWinner(3) == 'Player One')

        return 'Player One';

    else
        return 'Player Two';
}

let setComputerMoves = () => {

}
*/

function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveTwoType ||
        !playerOneMoveThreeType || !playerOneMoveOneValue ||
        !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType ||
        !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
        !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
        return null;
    }
    playerOneWins = 0;
    playerTwoWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addWin(roundThreeWinner);
    if (playerOneWins > playerTwoWins) {
        return 'Player One';
    } else if (playerOneWins < playerTwoWins) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
}

function addWin(winner) {
    if (winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1;
    } else if (winner === 'Player Two') {
        playerTwoWins = (playerTwoWins + 1) || 1;
    }
}


function setComputerMoves() {
    const moves = ['rock', 'paper', 'scissors'];
    const moveOneType = moves[Math.floor(Math.random() * 3)];
    const moveTwoType = moves[Math.floor(Math.random() * 3)];
    const moveThreeType = moves[Math.floor(Math.random() * 3)];
    const moveOneValue = Math.floor(Math.random() * 96) + 1;
    const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
    const moveThreeValue = 99 - moveOneValue - moveTwoValue;
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType,
        moveTwoValue, moveThreeType, moveThreeValue);
}