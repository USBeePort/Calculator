// const newVal = 
let prevVal = "";
let newVal = "";
let resultVal = "";
let math0operator = "";
let decimalClicked = false;
let valMemStored = "";

function numButPress(num){
    if(resultVal){
        newVal = num;
        resultVal = "";
    }
    else {
        if(num === '.'){
            if(decimalClicked) != true){
                newVal += num;
                decimalClicked = true;
            }
            else {
                newVal += num;
            }
        }
        document.getElementById("entry").value = newVal;
}

function mathButPress(num){
    if(!resultVal){
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    }
    newVal ="";
    decimalClicked = false;
    math0operator = operator;
};

function equalButPress(num){
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);
}
    switch(math0operator){
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        default:
            resultVal = newVal;
    }


function clearButPress(num){
    prevVal = "";
    newVal = "";
    resultVal = "";
    math0operator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";  
};

function copyButPress(num){
    valMemStored = document.getElementById("entry").value
};

function pasteButPress(num){
    if(valMemStored){
        document.getElementById("entry").value = valMemStored;
        newVal = valMemStored;
    }
};