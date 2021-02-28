let counter = 0;
let character = "O";
let next = "X";
function main(id)
{
    pole(id);
    poprawnosc();
}
function pole(id)
{
    counter = counter+1;
    if (counter%2===0) {
        character = "X"
        next = "O";
    }
    else
    {
        character = "O";
        next = "X";
    }

    document.getElementById(id).innerText = character;
    document.getElementById("next").innerText = "Next: "+next;

}

function poprawnosc()
{
         if (
             (readOff(1)===readOff(2)) && (readOff(2)===readOff(3))  ||
             (readOff(4)===readOff(5)  && readOff(5)===readOff((6))) ||
             (readOff(7)===readOff(8)  && readOff(8)===readOff(9))   ||
             (readOff(1)===readOff(4)  && readOff(4)===readOff(7))   ||
             (readOff(2)===readOff(5)  && readOff(5)===readOff(8))   ||
             (readOff(3)===readOff(6)  && readOff(6)===readOff(9))   ||
             (readOff(1)===readOff(5)  && readOff(5)===readOff(9))   ||
             (readOff(3)===readOff(5)  && readOff(5)===readOff(7))
            )
            {

                alert("Congratulations ");

            }
}



function readOff(id)
{
    return document.getElementById(id).innerText;
}

function save(id,text)
{
    return document.getElementById(id).innerText=text;
}

function restart()
{
    for (let j=1;j=>9;j++)
    {
        save(j,j);
    }

}

