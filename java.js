const chooseSize = document.querySelector('#grid-prompt');
const gridContainer = document.querySelector('#grid-container');
const ranColour = document.querySelector('#random-colour');
const blkColour = document.querySelector('#black-colour');
const eraser = document.querySelector('#eraser');
let gridNumber = 0;
let comboNumber = 0;
let id = 0;
let randomColour = "false";
let blackColour = "true";
let whiteColour = "false";
let r = 0;
let g = 0;
let b = 0;

ranColour.addEventListener('click', () =>
{ randomColour = "true";
  blackColour = "false";
  whiteColour = "false";
  ranColour.style.backgroundColor ='blue'
  blkColour.style.backgroundColor ='white'
  eraser.style.backgroundColor ='white'
  colourSelect();
})

blkColour.addEventListener('click', () =>
{ randomColour = "false";
  blackColour = "true";
  whiteColour = "false"
  ranColour.style.backgroundColor ='white'
  blkColour.style.backgroundColor ='blue'
  eraser.style.backgroundColor ='white'
  r = 0;
  g = 0;
  b = 0;
})

eraser.addEventListener('click', () =>
{ randomColour = "false";
  blackColour = "false";
  whiteColour = "true"
  ranColour.style.backgroundColor ='white'
  blkColour.style.backgroundColor ='white'
  eraser.style.backgroundColor ='blue'
  r = 255;
  g = 255;
  b = 255;
})

chooseSize.addEventListener('click', () => 
{let promptNumber = prompt("Choose Grid Size From 1 - 100");
resetGrid();
gridNumber = 0;
comboNumber = 0;
ranColour.style.backgroundColor ='white'
blkColour.style.backgroundColor ='white'
eraser.style.backgroundColor ='white'
validateNumber(promptNumber);
}); 




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
        const boxSize = 400 / gridNumber;
        newDiv.setAttribute('id', i);
        newDiv.classList.add('grid-box');
        //newDiv.textContent = (i);
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

const onClick = (event) => {
    let selectId = event.srcElement.id
    if (selectId > -1) {
    const reFormat = document.getElementById(selectId);
    if (randomColour === "true"){
        reFormat.style.backgroundColor = "rgb("+r+","+g+","+b+")"
        colourSelect();
    } else if(blackColour === "true"){
        reFormat.style.backgroundColor = "rgb("+r+","+g+","+b+")"
    } else if(whiteColour ==="true"){
        reFormat.style.backgroundColor = "rgb("+r+","+g+","+b+")"
    }
    }
    console.log(event.srcElement.id);
  }
  window.addEventListener('mouseover', onClick);

function colourSelect(){
    r = Math.floor(Math.random()*255)+1;
    g = Math.floor(Math.random()*255)+1;
    b = Math.floor(Math.random()*255)+1;
    return;
}