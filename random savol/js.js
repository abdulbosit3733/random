let array = [
{emoji:"🤣", txt:"kulgili"},
{emoji:"😊", txt:"tabassum"},
{emoji:"😎", txt:"boy aka"},
{emoji:"😎", txt:"boy uka"},
{emoji:"😊", txt:"dumbul uka"},
{emoji:"😁", txt:"ustozim nurim"},
{emoji:"😎", txt:"dumbul odam"},
{emoji:"🤣", txt:"aaa"},

]
let emoji = document.getElementById("emoji");
let txt = document.getElementById('txt')

function generatorFunc() {
    let random = Math.floor(Math.random() * array.length);


    emoji.innerText = array[random].emoji;
    txt.innerText = array[random].txt
}