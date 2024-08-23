
let Displayer = document.getElementById("Display");

function AddDisplay(input){
    Displayer.value += input;
}

function DisplayResult(){
    try{
        Displayer.value = eval(Displayer.value);
    }
    catch(error){
        Displayer.value = "Error";
    }
}

function ClearDisplay(){
    Displayer.value = " ";
}