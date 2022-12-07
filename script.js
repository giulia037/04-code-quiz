var btnStart = document.getElementById("Start")

var index = 0;

var intro = document.getElementById("intro")

var questions = document.getElementById("questions")

var timerCount = 60;






var questionArray = [{
  question: "Commonly used data types DO Not include", 
  options: ["1. Strings", "2. Booleans","3. Alerts", "4. Numbers"],
  answer: "1. Strings",
        
},{
  question: "The condition in an if / else statement is enclosed with __________.", 
  options: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
  answer: "4. Square Brackets",
},{
  question: "Arrays in JavaScript can be used to store ______.", 
  options: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the above"],
  answer: "3. Booleans",
},{
  question: "Strings values must be enclosed within ______ when being assigned to variables.", 
  options: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
  answer: "3. Quotes",
},{
  question: "A very useful tool used during development and debugging for printing content to the debugger is: ", 
  options: ["1. JavaScript", "2. Terminal/Bash", "3. For loops", "4. Console.log"],
  answer: "1. JavaScript",

}]




btnStart.addEventListener("click", startQuiz)


function startQuiz() {
  intro.classList.add("hide")
  questions.classList.remove("hide")
  displayQuestions()
  startTimer()
}



function displayQuestions(){
  if (index === questionArray.length){
    var name = window.prompt ('Your Score is ' + timerCount + " Please enter your name")
    var scores = JSON.parse (localStorage.getItem('scores')) || []
    scores.push ({name,score: timerCount})
    localStorage.setItem("scores",JSON.stringify(scores))
    window.location.reload()
    return;
  }
  questions.innerHTML = `
  <h1>${questionArray[index].question}</h1>
            <h2 class = "options">${questionArray[index].options[0]}</h2>
            <h2 class = "options">${questionArray[index].options[1]}</h2>
            <h2 class = "options">${questionArray[index].options[2]}</h2>
            <h2 class = "options">${questionArray[index].options[3]}</h2>
  `

 

    




  var options = document.querySelectorAll ('.options')
  for (let i = 0; i < options.length; i++) {
    options [i].addEventListener('click', nextQuestion);
  }
}







function nextQuestion (event) {
  console.log(event.target.innerText)
  var userChoice = event.target.innerText
  var correctAnswer = questionArray[index].answer
  if(userChoice !== correctAnswer){
    alert("Your answer was incorrect")
    timerCount -= 10
  }
  index++
  displayQuestions()
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
      timerCount--;
      timeEl.textContent = "Time left: " + timerCount;
      
      // Tests if time has run out
      if (timerCount === 0) {
          // Clears interval
          clearInterval(timer);
          h4.textContent = "You lost"
          presentResults();
      } 
  }, 1000);
}


var scores = JSON.parse (localStorage.getItem('scores')) || []
for(var i =0; i<scores.length; i++ ){
  var score = document.createElement ("p")
  score.innerText = scores [i].name + " " + scores [i].score
  document.querySelector ("#Scores").appendChild (score)
}