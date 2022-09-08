// const newVal = 
let prevVal = "";
let newVal = "";
let resultVal = "";
let math0perator = "";
let decimalClicked = false;
let valMemStored = "";

function numButPress(num){
    // Check if a number has been already clicked
    if(resultVal){
        // Start a new new number
        newVal = num;
        // Reset to create a new result
        resultVal = "";
    } else {
        // Used to block using multiple decimals
        if(num === '.'){
            if(decimalClicked != true){
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    };
        
    // Update value in entry input tag
    document.getElementById("entry").value = newVal;
};
function mathButPress(operator){
    if(!resultVal){
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    } 
    newVal ="";
    decimalClicked = false;
    math0perator = operator;
    document.getElementById("entry").value = ""
};

function equalButPress(){
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch(math0perator){
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

    prevVal = resultVal;
    document.getElementById("entry").value = resultVal;
};

function clearButPress(num){
    prevVal = "";
    newVal = "";
    resultVal = "";
    math0perator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";  
};

function copyButPress(){
    valMemStored = document.getElementById("entry").value;
};

function pasteButPress(num){
    if(valMemStored){
        document.getElementById("entry").value = valMemStored;
        newVal = valMemStored;
    }
};