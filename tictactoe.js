// Variables globales //
var playerOneTurn = true;
const xIconPath = "https://img.icons8.com/stickers/50/000000/x.png";
const oIconPath = "https://img.icons8.com/stickers/50/000000/o.png";
const emptySpace = "";

function playerClick(clicked_class, clicked_id)
{
    // Si la caja clickeada está vacía.
    if (document.getElementById(clicked_class).className == "box-empty")
    {
        // Se dibuja el ícono de "X" o "O", según el turno.
        if (playerOneTurn)
        {
            // Se dibuja la imágen X y se cambia de turno.
            document.querySelector("img[name=" + clicked_id + "]").src = xIconPath;
            playerOneTurn = !playerOneTurn;
        }
        else
        {
            // Se dibuja la imágen O y se cambia de turno.
            document.querySelector("img[name=" + clicked_id + "]").src = oIconPath;
            playerOneTurn = !playerOneTurn;
        }
        
        // Se actualiza el estado del botón a "clickeado".
        document.getElementById(clicked_class).className = "box-clicked";
    }
}

function reset()
{
    for (let i = 1; i <= 9; i++)
    {
        document.getElementById("box" + i).className = "box-empty";
        document.querySelector("img[name=icon" + i  + "]").src = "";
    }
}