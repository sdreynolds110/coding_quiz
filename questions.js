var questions = [
  {
  title: "Is this coding bootcamp hard?",
  choices: ["this is the hardest thing I've ever done in my life", "no", "yes", "It's a piece of cake!"],
  answer: "this is the hardest thing I've ever done in my life"
  },
  {
  title: "What file do you use to style your website?",
  choices: ["css", "html", "stylesheet", "javascript"],
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
questionNumber = 0;
// for(var i = 0; i < questions.length; i++)

var questionDiv = document.querySelector("#question")
questionDiv.textContent = questions[questionNumber].title

var choiceDiv = document.querySelector("#choicesA")
choiceDiv.textContent = questions[0].choices[0]
// choiceDiv.textContent = questions[1].choices[1]
// choiceDiv.textContent = questions[questionNumber].choices[2]
// choiceDiv.textContent = questions[questionNumber].choices[3]

var choiceDiv = document.querySelector("#choicesB")
choiceDiv.textContent = questions[0].choices[1]
// choiceDiv.textContent = questions[questionNumber].choices[1]
// choiceDiv.textContent = questions[questionNumber].choices[2]
// choiceDiv.textContent = questions[questionNumber].choices[3]

var choiceDiv = document.querySelector("#choicesC")
choiceDiv.textContent = questions[0].choices[2]
// choiceDiv.textContent = questions[questionNumber].choices[1]
// choiceDiv.textContent = questions[questionNumber].choices[2]
// choiceDiv.textContent = questions[questionNumber].choices[3]

var choiceDiv = document.querySelector("#choicesD")
choiceDiv.textContent = questions[0].choices[3]
// choiceDiv.textContent = questions[questionNumber].choices[1]
// choiceDiv.textContent = questions[questionNumber].choices[2]
// choiceDiv.textContent = questions[questionNumber].choices[3]

var nextButton = document.querySelector("#next-btn")
nextButton.addEventListener("click", function() {
  if (questionNumber < questions.length - 1) {
    questionNumber++
  }
  questionDiv.textContent = questions[questionNumber].title
}) 

