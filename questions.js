var timeEl = document.querySelector(".time");
var secondsLeft = 76;


function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time left: " + secondsLeft;

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
    
  }
setTime();

var questions = [
    {
    title: "Is this coding bootcamp hard?",
    choices: ["no", "yes", "this is the hardest thing I've ever done in my life"],
    answer: "this is the hardest thing I've ever done in my life"
    },
    {
    title: "What file do you use to style your website?",
    choices: ["html", "css", "stylesheet", "javascript"],
    answer: "css"
    },
    {
    title: "What date is this class over?",
    choices: ["April 25", "April Fools Day", "Never", "Tomorrow"],
    answer: "April 25"
    },
    {
    title: "Who is the most disappointing NFL team this season?",
    choices: ["Philadelphia Eagles", "DC United", "Clemson Tigers", "Calgary Stampede"],
    answer: "Philadelphia Eagles"
    }
]
var score = 0;

// for(var i = 0; i < questions.length; i++)