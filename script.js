const container = document.querySelector(".container");
const button = document.querySelector("#btn");

function makeRow(rowNum) {

    for (let i = 1; i <= rowNum; i++) {
        let row = document.createElement("div");
        row.classList.add("rows");
        container.appendChild(row);
    }
}

function makeCol(colNum) {
    let rows = document.querySelectorAll(".rows");
    let colWidth = 600 / colNum;

    for (let i = 0; i < rows.length; i++) {
        for (let j = 1; j <= colNum; j++) {
            let cols = document.createElement("div");
            cols.classList.add("cols");
            cols.style.width = `${colWidth}px`;
            cols.style.height = `${colWidth}px`;
            rows[i].appendChild(cols);
            cols.addEventListener("mouseover", sketch);
        }
    }
}

function sketch(e) {
    e.target.style.backgroundColor = "#e1f531";
}

function makeRowCol(cellNum) {
    makeRow(cellNum);
    makeCol(cellNum);
}

window.onload = () => {makeRowCol(99)};

button.addEventListener("click", () => {
    let userInput = prompt("How many squares do you want the grid to have?");

    if (userInput < 0 || userInput > 100) {
        prompt("Please choose a number between 1-100!");
    } else {
        makeRowCol(userInput);
    }
});