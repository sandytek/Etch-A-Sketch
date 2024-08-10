const row = 16;
const column = 16;

function createSquaresInRow() {
    for(let i = 0; i < column; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
}

function createRowsOfSquares() {
    for (let i = 0; i < row; i++) {
        createSquaresInRow();
    }
}

createRowsOfSquares();

