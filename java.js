const chooseSize = document.querySelector('#grid-prompt');
const gridContainer = document.querySelector('#grid-container');
chooseSize.addEventListener('click', () => 
{let promptNumber = prompt("Choose Grid Size From 1 - 100");
resetGrid();
gridNumber = 0;
validateNumber(promptNumber);

}); 

let gridNumber = 0
let comboNumber = 0

function validateNumber(promptNumber){
    if (isNaN(+promptNumber)){
        alert("Value entered was not a number");
        return;
    }
    else if (+promptNumber < 1 | +promptNumber > 100){
    alert("Number should be between 1 and 100"); 
    return;
    }
    else {
        gridNumber = promptNumber
        comboNumber = promptNumber * promptNumber;
        createGrid();
        return;
    }
}

function createGrid() {
    for (let i=0; i < comboNumber; i++){
        const newDiv = document.createElement('div');
        const boxSize = 500 / gridNumber;
        newDiv.setAttribute('id', i);
        newDiv.classList.add('grid-box');
        newDiv.textContent = (i);
        newDiv.style.width = boxSize+'px';
        newDiv.style.height =boxSize+'px';
        gridContainer.append(newDiv);
    }
}

function resetGrid() {
    for (let i=0; i < comboNumber; i++){
    const removeGrid = document.getElementById(i)
    removeGrid.remove()
    }  
    
}
        
    
