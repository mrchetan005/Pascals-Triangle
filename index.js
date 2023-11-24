

const container = document.getElementById('container');
const form = document.getElementById('form');
const numberInput = document.getElementById('number');

const pascalsTriangle = (rows = 3) => {
    if (rows < 3) rows = 3;
    const stackArray = [];
    for (let i = 0; i < rows; i++) {
        const rowArray = [];
        for (let j = 0; j <= i; j++) {
            let rowValue = 1;
            if (j && j != i) {
                rowValue = stackArray[i - 1][j] + stackArray[i - 1][j - 1];
            }
            rowArray.push(rowValue);
        }
        stackArray.push(rowArray);
    }
    return stackArray;
}

const renderRow = (rowArray) => {
    const rowElement = document.createElement('div');
    rowElement.className = 'row';
    rowArray.forEach(el => {
        const element = document.createElement('div');
        element.className = 'square';
        element.textContent = el;
        rowElement.appendChild(element);
    })
    container.appendChild(rowElement);
}

const renderPascalsTriangle = (array) => {
    container.textContent = '';
    array.forEach((rowArray) => {
        renderRow(rowArray);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numberOfRows = numberInput.value;
    const pascalsTriangleArray = pascalsTriangle(numberOfRows);
    renderPascalsTriangle(pascalsTriangleArray);
});