// Variables globales //
var playerOneTurn = true;

function playerClick(clicked_class, clicked_id)
{
    // Si la caja clickeada está vacía.
    if (document.getElementById(clicked_class).className == "box-empty")
    {
        // Se dibuja el ícono de "X" o "O", según el turno.
        if (playerOneTurn)
        {
            // Se dibuja la imágen X y se cambia de turno.
            document.querySelector("img[name=" + clicked_id + "]").src = "/x.svg";
            playerOneTurn = !playerOneTurn;
        }
        else
        {
            // Se dibuja la imágen O y se cambia de turno.
            document.querySelector("img[name=" + clicked_id + "]").src = "/o.svg";
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
        document.querySelector("img[name=icon" + i  + "]").src = "/void.svg";
    }
}