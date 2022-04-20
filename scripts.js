
//Sketchpad
let sketchPad = document.getElementById('sketchPad');
sketchPad.addEventListener('onmousedown',createSquare)
// sketchPad.addEventListener('mousemove', createSquare)

//Clear Button
let clearBtn = document.getElementById('clearBtn')
clearBtn.disabled = false
clearBtn.addEventListener('click', clearSketchPad)



function createSquare(){
    let square = document.createElement('div');
    square.className = 'squareDiv'
    square.addEventListener('mousedown', function(){
        square.style.backgroundColor = changeColor()
    })
    sketchPad.appendChild(square)
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