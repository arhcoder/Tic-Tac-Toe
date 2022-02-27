// VARIABLES GLOBALES //
var playerOneTurn;
var xScore = 0;
var oScore = 0;

const WININGS =
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];
let BOARD = ["", "", "", "", "", "", "", "", ""];
let currentPlayer;
let gameOver = false;
var scoreGived = false;

function playerClick(clicked_class, clicked_id)
{
    // Si la caja clickeada está vacía.
    if (document.getElementById(clicked_class).className == "box-empty" && gameOver == false)
    {
        // Se dibuja el ícono de "X" o "O", según el turno.
        if (playerOneTurn)
        {
            // Se dibuja la imágen X y se cambia de turno.
            document.querySelector("img[name=" + clicked_id + "]").src = "svg/x.svg";
            document.querySelector("img[name=turn]").src = "svg/o.svg";
            playerOneTurn = !playerOneTurn;
            currentPlayer = "x";
        }
        else
        {
            // Se dibuja la imágen O y se cambia de turno.
            document.querySelector("img[name=" + clicked_id + "]").src = "svg/o.svg";
            document.querySelector("img[name=turn]").src = "svg/x.svg";
            playerOneTurn = !playerOneTurn;
            currentPlayer = "o";
        }
        
        // Se actualiza el estado del botón a "clickeado".
        document.getElementById(clicked_class).className = "box-clicked";
    }

    // Se agrega el tiro al vector del tablero.
    var index = clicked_id.substr(clicked_id.length - 1);
    BOARD[parseInt(index - 1)] = currentPlayer;

    // Cambia de turno.
    document.getElementById("turn-text").innerHTML = "Turno de";
    validate();
}

function validate()
{
    let isTheGameOver = false;
    for (var i = 0; i < WININGS.length; i++)
    {
        const winCondition = WININGS[i];
        const tic = BOARD[winCondition[0]];
        const tac = BOARD[winCondition[1]];
        const toe = BOARD[winCondition[2]];
        if (tic === "" || tac === "" || toe === "")
        {
            continue;
        }
        if (tic === tac && tac === toe)
        {
            isTheGameOver = true;
            break;
        }
    }

    // Se ganó el juego //
    if (isTheGameOver)
    {
        // Se colorean todas las casillas de victoria.
        const winningBox = WININGS[i];
        for (let j = 0; j < 3; j++)
        {
            var box = winningBox[j];
            document.getElementById("box" + (box + 1)).className = "box-win";
        }

        // Se actualizan los marcadores.
        document.getElementById("turn-text").innerHTML = "Ganador: ";
        document.querySelector("img[name=turn]").src = "svg/" + currentPlayer.toString() + ".svg";
        document.getElementById("player-turn").style.justifyContent = "center";
        if (currentPlayer == "x" && !scoreGived) xScore++;
        document.getElementById("x-score").innerHTML = xScore;
        if (currentPlayer == "o" && !scoreGived) oScore++;
        scoreGived = true;
        document.getElementById("o-score").innerHTML = oScore;
        gameOver = true;
        return;
    }

    // Se empató el juego //
    if (!BOARD.includes(""))
    {
        document.getElementById("turn-text").innerHTML = "¡Empate!";
        document.getElementById("turn-text").style.marginLeft = "3.44vh";
        document.querySelector("img[name=turn]").src = "svg/void.svg";
        document.getElementById("player-turn").style.justifyContent = "center";
    }
}

function reset()
{
    // Se establece el estado de inicio para el juego //
    // Decide aleatoriamente qué jugador empieza el juego.
    var randomInt = Math.floor(Math.random() * (2) + 1);
    if (randomInt == 1)
    {
        playerOneTurn = true;
        document.querySelector("img[name=turn]").src = "svg/x.svg";
    }
    else
    {
        playerOneTurn = false;
        document.querySelector("img[name=turn]").src = "svg/o.svg";
    }
    document.getElementById("turn-text").innerHTML = "Inicia";

    // Limia las casillas del tablero.
    for (let i = 1; i <= 9; i++)
    {
        document.getElementById("box" + i).className = "box-empty";
        document.querySelector("img[name=icon" + i  + "]").src = "svg/void.svg";
    }

    // Actualiza el tablero //
    BOARD = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("player-turn").style.justifyContent = "flex-start";
    document.getElementById("turn-text").style.marginLeft = "1vh";
    scoreGived = false;
    gameOver = false;
}