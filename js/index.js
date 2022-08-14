$(document).ready(function(){
    console.log("Page is loaded");
    $("#Display").val("0");
    let displayedValue = "0";
    let floatValue = false;
    let lastPressed = null;
    let lastOperation = null;
    let currentResult = 0;

    function updateDisplay(){
        $("#Display").val(displayedValue);
    }

    function insert(value){
        if(displayedValue == "0"){
            displayedValue = value;
            updateDisplay();
        } else {
            displayedValue += value;
            updateDisplay();
        }

        lastPressed = value;
    }

    $("#BTN-Del").click(function(){
        $("#Display").val("0");
        displayedValue = "0";
        floatValue = false;
        lastPressed = "Del";
        currentResult = 0;
        lastOperation = null;
    });

    $("#BTN-0").click(function(){
        insert("0");
    });

    $("#BTN-1").click(function(){
       insert("1");
    });

    $("#BTN-2").click(function(){
        insert("2");
    });

    $("#BTN-3").click(function(){
        insert("3");
    });

    $("#BTN-4").click(function(){
        insert("4");
    });

    $("#BTN-5").click(function(){
        insert("5");
    });

    $("#BTN-6").click(function(){
        insert("6");
    });

    $("#BTN-7").click(function(){
        insert("7");
    });

    $("#BTN-8").click(function(){
        insert("8");
    });

    $("#BTN-9").click(function(){
        insert("9");
    });

    $("#BTN-Float").click(function(){
        if(!floatValue){
            displayedValue += ".";
            floatValue = true;
        }

        lastPressed = ".";
    });

    $("#BTN-Equals").click(function(){
        if(lastPressed == "."){
            displayedValue += "0";
        }

        switch(lastOperation){
            case "+":
                currentResult += Number(displayedValue);
                break;
            case "-":
                currentResult -= Number(displayedValue);
                break;
            case "x":
                currentResult *= Number(displayedValue);
                break;
            case "/":
                currentResult /= Number(displayedValue);
                break;
        }

        displayedValue = currentResult.toString();
        lastOperation = null;
        floatValue = false;
        lastPressed = "=";
        updateDisplay();
    });

    $("#BTN-Plus").click(function(){
        if(lastPressed == "."){
            displayedValue += "0";
        }
        if(lastOperation == null){
            currentResult = Number(displayedValue);
        } else {
            currentResult += Number(displayedValue);
        }
        lastOperation = "+";
        displayedValue = "0";
        floatValue = false;
        lastPressed = "+";
        updateDisplay();
    });

    $("#BTN-Minus").click(function(){
        if(lastPressed == "."){
            displayedValue += "0";
        }
        if(lastOperation == null){
            currentResult = Number(displayedValue);
        } else {
            currentResult -= Number(displayedValue);
        }
        lastOperation = "-";
        displayedValue = "0";
        floatValue = false;
        lastPressed = "-";
        updateDisplay();
    });

    $("#BTN-Times").click(function(){
        if(lastPressed == "."){
            displayedValue += "0";
        }
        if(lastOperation == null){
            currentResult = Number(displayedValue);
        } else {
            currentResult *= Number(displayedValue);
        }
        lastOperation = "x";
        displayedValue = "0";
        floatValue = false;
        lastPressed = "x";
        updateDisplay();
    });

    $("#BTN-Divide").click(function(){
        if(lastPressed == "."){
            displayedValue += "0";
        }
        if(lastOperation == null){
            currentResult = Number(displayedValue);
        } else {
            currentResult /= Number(displayedValue);
        }
        lastOperation = "/";
        displayedValue = "0";
        floatValue = false;
        lastPressed = "/";
        updateDisplay();
    });

    console.log("All functions are active");
});