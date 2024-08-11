const button = document.querySelector("#userInput");


let input = 0;
let row = 0;
let column = 0;



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


// add event listener is wrong,
// you are adding the return value 
// of promptUserInput() as the callback to 
// the event listener instaed of the function call itself
// promptUserInput() is calling the function
// () => promptUserInput() is an arrow function that calls
//       the prompt function when the arrow function
//       is called
// i.e. you should pass to the addEventListener a function
// for it to call
button.addEventListener("click", () => promptUserInput());
    
function createSquaresInRow() {
    for(let i = 0; i < column; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.opacity = 0.0;
        container.appendChild(div);

        // adding single mouseover event listener 
        // to the single square

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

    /*
    // not good to loop 3 times
    // (1x create squares, 1x set size, 1x add listeners) 
    // (means triple the work, takes longer to execute)
    // just add the event listeners every time a square is created
    
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        gridSize(input,square);
    });

    // just call multiple functions per event,
    // no need to add multiple event listeners
    // if they all happen when the same event
    // is triggered
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            highlight(square);
            increaseOpacity(square);
        });   
    });
    */

    // squares.forEach(square => increaseOpacity(square));
}


function highlight(target) {
    const bgColor = Math.floor(Math.random()*16777215).toString(16);
    target.style.backgroundColor= "#" + bgColor;
}

function increaseOpacity (target) {
    // https://stackoverflow.com/questions/27166007/how-to-change-the-opacity-on-an-element-dynamically-using-javascript
    
    let currentOpacity = target.style.opacity;

    if(currentOpacity < 1.0) {
        target.style.opacity = currentOpacity + 0.1;
    }
}

function gridSize(input,target) {
    let currentFlexBasis = 100/row;
    target.style.flexBasis = `${currentFlexBasis}%`;
}

