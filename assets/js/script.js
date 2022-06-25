var hourArray = document.querySelectorAll(".hour")
var timeArray = document.querySelectorAll(".time-block")
var currentTime = moment().format("H")
var saveBtn = document.querySelectorAll(".saveBtn")
var input = document.getElementsByTagName("input")

var currentDay = moment().format("dddd, MMMM Do")
$("#currentDay").text(currentDay);




for (let i = 0; i < timeArray.length; i++) {
    var time_block = timeArray[i];
    console.log(time_block)
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

      var save = saveBtn[i];
      console.log(save)
      var inputText = input[i].value
      console.log(inputText)

      save.addEventListener("click", saveInput(inputText))
}; 


function saveInput (text) {
    time_block.textContent = text; 
    localStorage.setItem("input1", text)

}

var userInput = localStorage.getItem("input1")
time_block.textContent = userInput; 

 