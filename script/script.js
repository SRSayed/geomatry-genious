function calculaTraingleteArea(){
    const base = getValueById('triangle-base');
    const height = getValueById('traingle-height');
    const area = 0.5* base* height ;
    
    const areaValue= document.getElementById('area-value');
    areaValue.innerText= area;
}

function calculateRectangleArea(){
    const width = getValueById('rectangle-width');
    const length = getValueById('rectangle-length');
    const area = width* length ;
    
    const areaValue= document.getElementById('rextangle-area-value');
    areaValue.innerText= area;   
}
function calculateParallelogramArea(){
    const base = getValueById('parallelogram-base');
    const height = getValueById('parallelogram-height');
    const area = base* height ;
    
    const areaValue= document.getElementById('parallelogram-area-value');
    areaValue.innerText= area;   
}

function calculaRhombusArea(){
    const d1 = getValueById('rhombus-d1');
    const d2 = getValueById('rhombus-d2');
    const area = 0.5* d1* d2 ;
    
    const areaValue= document.getElementById('rhombus-area-value');
    areaValue.innerText= area;
}
function calculaPentagonArea(){
    const p = getValueById('pentagon-p');
    const b = getValueById('pentagon-b');
    const area = 0.5* p* b ;
    
    const areaValue= document.getElementById('pentagon-area-value');
    areaValue.innerText= area;
}
function calculaEllipseArea(){
    const a = getValueById('ellipse-a');
    const b = getValueById('ellipse-b');
    const area = 3.1416* a* b ;
    
    const areaValue= document.getElementById('ellipse-area-value');
    areaValue.innerText= area;
}

function getValueById(inputID){
   const inputField= document.getElementById(inputID);
   const inputText = inputField.value;
   const inputValue = parseFloat(inputText);
   return inputValue;
}

