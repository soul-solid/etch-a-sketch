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

function makeRowCol() {
    makeRow(16);
    makeCol(16);
}

makeRowCol();

    