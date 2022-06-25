var hourArray = document.querySelectorAll(".hour");
var timeArray = document.querySelectorAll(".time-block");
var currentTime = moment().format("H");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var eleven = document.getElementById("eleven");
var twelve = document.getElementById("twelve");
var thirteen = document.getElementById("thirteen");
var fourteen = document.getElementById("fourteen");
var fifteen = document.getElementById("fifteen");
var sixteen = document.getElementById("sixteen");
var seventeen = document.getElementById("seventeen");

var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var userInput = localStorage.getItem("input1");
timeArray[0].value = userInput;

var userInput = localStorage.getItem("input2");
timeArray[1].value = userInput; 

var userInput = localStorage.getItem("input3");
timeArray[2].value = userInput; 

var userInput = localStorage.getItem("input4");
timeArray[3].value = userInput; 

var userInput = localStorage.getItem("input5");
timeArray[4].value = userInput; 

var userInput = localStorage.getItem("input6");
timeArray[5].value = userInput; 

var userInput = localStorage.getItem("input7");
timeArray[6].value = userInput; 

var userInput = localStorage.getItem("input8");
timeArray[7].value = userInput; 

var userInput = localStorage.getItem("input9");
timeArray[8].value = userInput; 

var userInput = localStorage.getItem("input10");
timeArray[9].value = userInput; 


for (let i = 0; i < timeArray.length; i++) {
    var time_block = timeArray[i];

    var hour = hourArray[i];
    var blockTime = hour.outerText;
    var militaryHours = moment(blockTime, "h:mma").format("H");
    
    if (currentTime > militaryHours) {
    
        time_block.classList.add("past")
    } else if (currentTime < militaryHours) {
  
        time_block.classList.add("future")
    } else {
        time_block.classList.add("present")         
      }
}; 

function saveInput () {
    localStorage.setItem("input1", timeArray[0].value)
};

function saveInput_1 () {
    localStorage.setItem("input2", timeArray[1].value)
};

function saveInput_2 () {
    localStorage.setItem("input3", timeArray[2].value)
};

function saveInput_3 () {
    localStorage.setItem("input4", timeArray[3].value)
};

function saveInput_4 () {
    localStorage.setItem("input5", timeArray[4].value)
};

function saveInput_5 () {
    localStorage.setItem("input6", timeArray[5].value)
};

function saveInput_6 () {
    localStorage.setItem("input7", timeArray[6].value)
};

function saveInput_7 () {
    localStorage.setItem("input8", timeArray[7].value)
};

function saveInput_8 () {
    localStorage.setItem("input9", timeArray[8].value)
};

function saveInput_9 () {
    localStorage.setItem("input10", timeArray[9].value)
};


eight.addEventListener("click", saveInput);
nine.addEventListener("click", saveInput_1);
ten.addEventListener("click", saveInput_2);
eleven.addEventListener("click", saveInput_3);
twelve.addEventListener("click", saveInput_4);
thirteen.addEventListener("click", saveInput_5);
fourteen.addEventListener("click", saveInput_6);
fifteen.addEventListener("click", saveInput_7);
sixteen.addEventListener("click", saveInput_8);
seventeen.addEventListener("click", saveInput_9);