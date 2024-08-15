const button = document.querySelector("#userInput");


let input = 0;
let row = 16;
let column = 16;


function promptUserInput () {
    while(container.children.length > 0) {
        container.removeChild(container.children[0]);
    }
    
    input = prompt("Enter number for grid", "");
    if (input > 100 || input < 0) {
        alert("Please enter a number between 0 and 100");
    } else {
        row = parseInt(input);
        column = parseInt(input);
        createRowsOfSquares();
        
    }
};

button.addEventListener("click", () => promptUserInput());
    
function createSquaresInRow() {
    for(let i = 0; i < column; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
        div.style.opacity = 0.1;

        gridSize(input, div);
        div.addEventListener("mouseover", () => {
            highlight(div);
            increaseOpacity(div);
        });   
    }
}

function createRowsOfSquares() {
    for (let i = 0; i < row; i++) {
        createSquaresInRow();
    }
}

createRowsOfSquares();


function highlight(target) {
    const bgColor = Math.floor(Math.random()*16777215).toString(16);
    target.style.backgroundColor= "#" + bgColor;
}

function increaseOpacity (target) {
  if (target.style.opacity < 1) {
    target.style.opacity = +target.style.opacity + 0.1; 
  };

}

function gridSize(input,target) {
    let currentFlexBasis = 100/row;
    target.style.flexBasis = `${currentFlexBasis}%`;
    target.style.paddingTop = `${currentFlexBasis}%`;
}

