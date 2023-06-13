const chooseSize = document.querySelector('#grid-prompt');
const gridContainer = document.querySelector('#grid-container');
const ranColour = document.querySelector('#random-colour');
const blkColour = document.querySelector('#black-colour');
const prog = document.querySelector('#progressive');
const eraser = document.querySelector('#eraser');
const eraseAll = document.querySelector('#erase-all');

let gridNumber = 0;
let comboNumber = 0;
let id = 0;
let randomColour = "false";
let blackColour = "true";
let whiteColour = "false";
let progress = "false";
let r = 0;
let g = 0;
let b = 0;

chooseSize.addEventListener('click', () => 
{let promptNumber = prompt("Choose Grid Size From 1 - 100");
resetGrid();
gridNumber = 0;
comboNumber = 0;
validateNumber(promptNumber);
ranColour.style.backgroundColor ='crimson'
blkColour.style.backgroundColor ='crimson'
eraser.style.backgroundColor ='crimson'
blkColour.style.backgroundColor ='grey'
}); 

blkColour.addEventListener('click', () =>
{ randomColour = "false";
  blackColour = "true";
  whiteColour = "false"
  ranColour.style.backgroundColor ='crimson'
  blkColour.style.backgroundColor ='grey'
  eraser.style.backgroundColor ='crimson'
  prog.style.backgroundColor ='crimson'
  r = 0;
  g = 0;
  b = 0;
})

prog.addEventListener('click', () =>
{   randomColour = "false";
    blackColour = "false";
    whiteColour = "false";
    progress = "true";
    ranColour.style.backgroundColor ='crimson'
    blkColour.style.backgroundColor ='crimson'
    eraser.style.backgroundColor ='crimson'
    prog.style.backgroundColor ='grey'
    progressive();
})

ranColour.addEventListener('click', () =>
{ randomColour = "true";
  blackColour = "false";
  whiteColour = "false";
  ranColour.style.backgroundColor ='grey'
  blkColour.style.backgroundColor ='crimson'
  eraser.style.backgroundColor ='crimson'
  prog.style.backgroundColor ='crimson'
  colourSelect();
})

eraser.addEventListener('click', () =>
{ randomColour = "false";
  blackColour = "false";
  whiteColour = "true"
  ranColour.style.backgroundColor ='crimson'
  blkColour.style.backgroundColor ='crimson'
  eraser.style.backgroundColor ='grey'
  prog.style.backgroundColor ='crimson'
  r = 255;
  g = 255;
  b = 255;
})

eraseAll.addEventListener('click', () =>
{ for (let i=0; i < comboNumber; i++){
    const erase = document.getElementById(i)
    r = 255;
    g = 255;
    b = 255;
    erase.style.backgroundColor = "rgb("+r+","+g+","+b+")"
    }
})

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
        newDiv.style.width = boxSize+'px';
        newDiv.style.height =boxSize+'px';
        newDiv.style.backgroundColor = "rgb(255,255,255)"
        gridContainer.append(newDiv);
    }
}

function resetGrid() {
    for (let i=0; i < comboNumber; i++){
    const removeGrid = document.getElementById(i)
    removeGrid.remove()
    }  
}

const onHover = (event) => {
    let selectId = event.srcElement.id
    id = selectId
    if (selectId > -1) {
        const reFormat = document.getElementById(selectId);
        if (randomColour === "true"){
            reFormat.style.backgroundColor = "rgb("+r+","+g+","+b+")"
            colourSelect();
        } else if(blackColour === "true"){
            reFormat.style.backgroundColor = "rgb("+r+","+g+","+b+")"
        } else if(whiteColour ==="true"){
            reFormat.style.backgroundColor = "rgb("+r+","+g+","+b+")"
        } else if(progress ==="true"){
            progressive()
            r -= 25.5
            g -= 25.5
            b -= 25.5
            reFormat.style.backgroundColor = "rgb("+r+","+g+","+b+")"
        }
    }
  }


function colourSelect(){
    r = Math.floor(Math.random()*255)+1;
    g = Math.floor(Math.random()*255)+1;
    b = Math.floor(Math.random()*255)+1;
    return;
}

function progressive(event){
    let element = document.getElementById(id)
    let color = element.style.getPropertyValue("background-color")
    let rgbColors=new Object();

    //if RGB scheme
    if (color[0]=='r'){
    color=color.substring(color.indexOf('(')+1, color.indexOf(')'));
    rgbColors=color.split(',', 3);
    // Convert redValue to integer
    rgbColors[0]=parseInt(rgbColors[0]);
    // Convert greenValue to integer
    rgbColors[1]=parseInt(rgbColors[1]);
    // Convert blueValue to integer
    rgbColors[2]=parseInt(rgbColors[2]);		
  }
    //if # format
    else if (color.substring(0,1)=="#")
    {
        rgbColors[0]=color.substring(1, 3);  // redValue
        rgbColors[1]=color.substring(3, 5);  // greenValue
        rgbColors[2]=color.substring(5, 7);  // blueValue
        
        //convert to integer
        rgbColors[0]=parseInt(rgbColors[0], 16);
        rgbColors[1]=parseInt(rgbColors[1], 16);
        rgbColors[2]=parseInt(rgbColors[2], 16);
	}
    r = rgbColors[0]
    g = rgbColors[1]
    b = rgbColors[2]
}

gridContainer.addEventListener('mouseover', onHover);