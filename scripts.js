
//Sketchpad
let sketchPad = document.getElementById('sketchPad');
sketchPad.style.gridTemplateColumns = 'repeat(16, 1fr)'
sketchPad.style.gridTemplateRows = 'repeat(16, 1fr)'
// sketchPad.addEventListener('mousedown',createSquare)
// sketchPad.addEventListener('dblclick', )
// sketchPad.addEventListener('mousemove', createSquare)

// Clear Button
let clearBtn = document.getElementById('clearBtn')
clearBtn.disabled = false
clearBtn.addEventListener('click', clearSketchPad)

//CLEAR THE SKETCHPAD WHEN THE RESET BUTTON IS CLICKED  
function clearSketchPad(e){
    console.log(e.target.id)
    let clearSketch = document.getElementById('sketchPad')
    clearSketch.style.backgroundColor = ''
}

//Change Grid Size Button
let gridSizeBtn = document.getElementById('gridSizeBtn')
gridSizeBtn.addEventListener('click', changeSize)

//BLACK BACKGROUND BUTTON
let blackButton = document.getElementById('blackBtn');
blackButton.addEventListener('click', blkBtn)
function blkBtn(e){
    console.log(e.target.id)
    sketchPad.style.backgroundColor = 'black'
    for(let i = 0; i < 256; i++){
        let square = document.createElement('div')
        // square.style.backgroundColor = 'white';
        sketchPad.insertAdjacentElement('beforeend', square)
        square.className = 'squareDiv'
         square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'white'
        })
    }
}


//RANDOM COLOR BUTTON
let randomBtn = document.getElementById('randomBtn')
randomBtn.addEventListener('click', randomColor)
function randomColor(e){
    console.log(e.target.id)
    sketchPad.style.backgroundColor = 'gray'
    for(let i = 0; i < 256; i++){
        let square = document.createElement('div')
        square.style.backgroundColor = 'gray';
        sketchPad.insertAdjacentElement('beforeend', square)
        square.className = 'squareDiv'
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = changeColor()
        })
    }
}




//GENERATE A RANDOM COLOR
function changeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }




//CHANGE THE SIZE OF THE GRID INSIDE THE SKETCH PAD
function changeSize(e){
   e.preventDefault()

    let changeGridSize = document.getElementById('changeGridSize').value;
    console.log(changeGridSize)
    // sketchPad.style.gridTemplateColumns = 'repeat(16, 1fr)'
    // sketchPad.style.gridTemplateRows = 'repeat(16, 1fr)'

    sketchPad.style.gridTemplateColumns = `repeat(${changeGridSize}, 1fr)`
    sketchPad.style.gridTemplateRows = `repeat(${changeGridSize}, 1fr)`

    for(let i = 0; i < changeGridSize.length; i++){
        let square = document.createElement('div')
        square.style.backgroundColor = 'white';
        sketchPad.insertAdjacentElement('beforeend', square)
        square.className = 'squareDiv'
    }

}


function exit(e){
    square.innerText = ''
}