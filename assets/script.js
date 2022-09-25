// **** Reference Variable ****
var timeEl=document.querySelector(".time");
var titleEl=document.querySelector("#pageTitle");
var questionEl=document.querySelector("#question");
var qConEl=document.querySelector("#questionContainer");
var scoreEl=document.querySelector(".score")
var endGameEl=document.querySelector("#allDone");
var hiScrbtnEl=document.querySelector(".highscore");
var hiScrEl=document.querySelector("#hiScCon")
var HighScoreList=document.querySelector("#scoreHist")
var startEl=document.querySelector("#start");
var btnEl=document.querySelector("#btn");
var b1El=document.querySelector("#b1");
var b2El=document.querySelector("#b2");
var b3El=document.querySelector("#b3");
var b4El=document.querySelector("#b4");

// **** Global Variable ****
var globalAnswer;
var userGuess;
var question;
var b1;
var b2;
var b3;
var b4;
var highScore=0;
var initials;
var score=0;
var qNum=0;
var correct=0;
var wrong=0; 
var timer;
var timeCount;

// **** Arrays ****

var quizzQuestions= [
  {
    question:"Commonly used data types DO Not Include:",
    b1: "1. strings",
    b2: "2. booleans",
    b3: "3. alerts",
    b4: "4. numbers",
    answer: "3. alerts",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    b1: "1. numbers and strings",
    b2: "2. other arrays",
    b3: "3. booleans",
    b4:"4. all of the above",
    answer: "4. all of the above",
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    b1: "1. commas",
    b2: "2. curly brackets",
    b3: "3. quotes",
    b4: "4. parenthesis",
    answer: "3. quotes",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    b1: "1. JavaScript",
    b2: "2. terminal/bash",
    b3:"3. for loops",
    b4: "4. console.log",
    answer: "4. console.log",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    b1: "1. numbers and strings",
    b2: "2. other arrays",
    b3: "3. booleans",
    b4: "4. all of the above",
    answer: "4. all of the above",
  }
];

var highScores= [];

// **** Functions****


  
function startTimer() {
  timer = setInterval(function() {
    timeCount--;
    timeEl.textContent="Time: "+timeCount;
    if (timeCount >= 0) {
      if (qNum > 5) {
        clearInterval(timer);
        endGame();
      }
    }
    if (timeCount === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 10000);
}

function endGame(){
  qConEl.setAttribute("class","noshow");
  endGameEl.removeAttribute("class","noshow");
  scoreEl.textContent=score;
  localStorage.setItem("timeScore",timer)
}

function hiScr(){
  endGameEl.setAttribute("class", "noshow");
  qConEl.setAttribute("class","noshow");
  titleEl.setAttribute("class","noshow");
  hiScrEl.removeAttribute("class","noshow");
  let list=document.getElementById("scoreHist");
  highScores.forEach((item) => {
    let li=document.createElement("li");
    li.innerText= item;
    list.appendChild(li);
      }
    );
  }  

function setQuestion(){
  if (qNum===5){qNum=0}
  for (var i=qNum; i < quizzQuestions.length;){
    questionEl.textContent=(quizzQuestions[i].question),
    b1El.textContent=(quizzQuestions[i].b1),      
    b2El.textContent=(quizzQuestions[i].b2),
    b3El.textContent=(quizzQuestions[i].b3),
    b4El.textContent=(quizzQuestions[i].b4),
    globalAnswer=(quizzQuestions[i].answer)
    qNum++
    ;
  }return
}

  function log1(){console.log(b1El.textContent);
  userGuess=b1El.textContent}
  function log2(){console.log(b2El.textContent);
  userGuess=b2El.textContent}
  function log3(){console.log(b3El.textContent);
  userGuess=b3El.textContent}
  function log4(){console.log(b4El.textContent);
  userGuess=b4El.textContent}

function checkAnswer(){
  if(globalAnswer===userGuess){
    console.log("yes")
    console.log("UserGuess Yes",userGuess)
  }else{
    console.log("no")
    console.log("UserGuess NO",userGuess)
  }
  // setQuestion()
}

function startGame(event){
  event.preventDefault();
  qNum=0;
  correct=0;
  wrong=0;
  timeCount=30;
  titleEl.setAttribute("class","noshow");
  qConEl.removeAttribute("class","noshow");
  startTimer();
  setQuestion();
  checkAnswer();
  console.log("Number of questions",quizzQuestions.length);
  console.log("What Number is on", qNum);
  console.log(questionEl);
  console.log(b1El);
  console.log(b2El);
  console.log(b3El);
  console.log(b4El);
  console.log(globalAnswer);
  console.log(userGuess);
  console.log(correct);
  console.log(wrong);
}

// **** Initiators ****

  startEl.addEventListener("click",startGame);
  hiScrbtnEl.addEventListener("click",hiScr);
  b1El.addEventListener("click",log1);
  b2El.addEventListener("click",log2);
  b3El.addEventListener("click",log3);
  b4El.addEventListener("click",log4);
  btnEl.addEventListener("click",checkAnswer)
