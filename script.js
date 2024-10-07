const container = document.querySelector(".container");

function makeRow(rowNum) {
    for (let i = 1; i <= rowNum; i++) {
        let row = document.createElement("div");
        row.className = "rows"
        container.appendChild(row);
    }
}

function makeCol(colNum) {
    let rows = document.querySelectorAll(".rows");

    for (let i = 0; i < rows.length; i++) {
        for (let j = 1; j <= colNum; j++) {
            let cols = document.createElement("div");
            cols.className = "cols";
            rows[i].appendChild(cols);
        }
    }
}

function makeRowCol(row, col) {
    makeRow(row);
    makeCol(col);
}

makeRowCol(16, 16);

/* const cols = document.querySelector(".cols");
cols.addEventListener("mouseover", () => {
    cols.style.backgroundColor = "#e1f531";
});

function sketch(e) {
    for (let i = 0; i <= e; i++) {

    }
} */