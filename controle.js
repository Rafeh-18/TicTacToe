start = "X";
i = 0;
function VerifInput(start) {
    let c1 = document.getElementById("C1").value;
    let c2 = document.getElementById("C2").value;
    let c3 = document.getElementById("C3").value;
    let c4 = document.getElementById("C4").value;
    let c5 = document.getElementById("C5").value;
    let c6 = document.getElementById("C6").value;
    let c7 = document.getElementById("C7").value;
    let c8 = document.getElementById("C8").value;
    let c9 = document.getElementById("C9").value;

    if ((c1 == c2 && c2 == c3 && c1 == start) || // Row 1
        (c4 == c5 && c5 == c6 && c4 == start) || // Row 2
        (c7 == c8 && c8 == c9 && c7 == start) || // Row 3
        (c1 == c4 && c4 == c7 && c1 == start) || // Column 1
        (c2 == c5 && c5 == c8 && c2 == start) || // Column 2
        (c3 == c6 && c6 == c9 && c3 == start) || // Column 3
        (c1 == c5 && c5 == c9 && c1 == start) || // Diagonal 1
        (c3 == c5 && c5 == c7 && c3 == start)) { // Diagonal 2
        return true;
    }
    return false;
}
function TicTacToe(input) {

    input.value = start;
    input.disabled = true;
    i++;
    if (VerifInput(start)) {
        alert("Player " + start + " won!");
        resetBoard();
        return;
        
    } else if (i == 7) {
        alert("game draw");
        resetBoard();
    }

    if (start == "X") {
        start = "O";
    } else {
        start = "X";
    }


}



function resetBoard() {
    let cells = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"];
    for (let c of cells) {
        let input = document.getElementById(c);
        input.value = "";
        input.disabled = false;
    }
    start = "X";
    i=0;
}
