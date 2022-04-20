
//Sketchpad
let sketchPad = document.getElementById('sketchPad');
sketchPad.style.gridTemplateColumns = 'repeat(16, 1fr)'
sketchPad.style.gridTemplateRows = 'repeat(16, 1fr)'
sketchPad.addEventListener('mousedown',createSquare)
// sketchPad.addEventListener('dblclick', )
// sketchPad.addEventListener('mousemove', createSquare)

// Clear Button
let clearBtn = document.getElementById('clearBtn')
clearBtn.disabled = false
clearBtn.addEventListener('click', clearSketchPad)

//Change Grid Size Button
let gridSizeBtn = document.getElementById('gridSizeBtn')
gridSizeBtn.addEventListener('click', changeSize)

function createSquare(){
    for(let i = 0; i < 256; i++){
        let square = document.createElement('div')
        square.style.backgroundColor = 'white';
        sketchPad.insertAdjacentElement('beforeend', square)
        square.className = 'squareDiv'
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = changeColor()
        })
        // square.addEventListener('dblclick', function(){
        //     square.innerText = exit()
        // })
    }
    // sketchPad.appendChild(square)

    
}

function exit(e){
    square.innerText = ''
}


function changeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function clearSketchPad(e){
    console.log(e.target.id)
    let clearSketch = document.getElementById('sketchPad')
    clearSketch.innerText = ''
}

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