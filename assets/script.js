// **** Reference Variable ****
var timeEl=document.querySelector(".time");
var titleEl=document.querySelector("#pageTitle");
var questionEl=document.querySelector("#question");
var qConEl=document.querySelector("#questionContainer");
var scoreEl=document.querySelector(".score");
var endGameEl=document.querySelector("#allDone");
var initialsInputEl=document.querySelector("input[name=initials]");
var hiScrbtnEl=document.querySelector(".highscore");
var hiScrEl=document.querySelector("#hiScCon");
var HighScoreList=document.querySelector("#scoreHist");
var goBackEl=document.querySelector("#gBbtn");
var clearEl=document.querySelector("#clear");
var submitEl=document.querySelector("#submit");
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
var highScore;
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
    question:"Arrays in JavaScript can be used to store ____.",
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
var scoreCard=[];
var highScores=[];
var initials=[];

// **** Functions****


  
function startTimer() {
  timer = setInterval(function() {
    timeCount--;
    timeEl.textContent="Time: "+timeCount;
    if (timeCount >= 0) {
      if (qNum == 5) {
        clearInterval(timer);
        endGame();
      }
    }
    if (timeCount === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function endGame(){
  qConEl.setAttribute("class","noshow");
  endGameEl.removeAttribute("class","noshow");
  // console.log("1",initialsInputEl.value);
  // initialsInputEl.value=("");
  // console.log("2",initialsInputEl.value);
  scoreEl.textContent=timeCount;
  
}

function sub(event){
  scoreCard.push(timeCount);
  localStorage.setItem("ScoreCard",JSON.stringify(scoreCard));
  initialsInputEl.value=("");

  initials.push(initialsInputEl.value);
  localStorage.setItem("Initials", JSON.stringify(initials));
  // i=initials.length
  // s=scoreCard.length
  
  
  // console.log(initials);
  // console.log(initialsInputEl.value);
  // console.log(initialsInputEl.value);
  hiScr();
}

function hiScr(){
  endGameEl.setAttribute("class", "noshow");
  qConEl.setAttribute("class","noshow");
  titleEl.setAttribute("class","noshow");
  hiScrEl.removeAttribute("class","noshow");
  
  let list=document.getElementById("scoreHist");
  highScores=scoreCard;
  highScores.forEach((item) => {
    let li=document.createElement("li");
    li.innerText= item;
    list.appendChild(li);
      }
    );
  console.log("scoreCard");
  }  

function setQuestion(){
  // if (qNum===5){qNum=0}
  for (var i=qNum; i < quizzQuestions.length;){
    questionEl.textContent=(quizzQuestions[i].question),
    b1El.textContent=(quizzQuestions[i].b1),      
    b2El.textContent=(quizzQuestions[i].b2),
    b3El.textContent=(quizzQuestions[i].b3),
    b4El.textContent=(quizzQuestions[i].b4),
    globalAnswer=(quizzQuestions[i].answer)
    qNum++
    return;
  }
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
    correct++;
    console.log("UserGuess Yes",userGuess);
    console.log("Question number", qNum);
    console.log("Correct",correct);
    console.log("Wrong",wrong);
  }else{
    wrong++;
    console.log("UserGuess NO",userGuess);
    console.log("Question number", qNum);
    console.log("Correct",correct);
    console.log("Wrong",wrong);
  }
  if(qNum==5){
    endGame();
  }
  setQuestion();
}

function mainPage(){
  hiScrEl.setAttribute("class","noshow");
  endGameEl.setAttribute("class", "noshow");
  titleEl.removeAttribute("class","noshow");
  initialsInputEl=("");
}

function startGame(event){
  event.preventDefault();
  qNum=0;
  correct=0;
  wrong=0;
  timeCount=700;
  titleEl.setAttribute("class","noshow");
  qConEl.removeAttribute("class","noshow");
  startTimer();
  setQuestion();
  console.log("Question number", qNum);
  console.log(globalAnswer);
  console.log(correct);
  console.log(wrong);
  console.log()
  // console.log("Number of questions",quizzQuestions.length);
  // console.log(questionEl);
  // console.log(b1El);
  // console.log(b2El);
  // console.log(b3El);
  // console.log(b4El);
}

function clear(){
  initials.length=0;
  localStorage.removeItem('Initials');
  localStorage.removeItem('ScoreCard');
  console.log(initials);
  console.log(scoreCard);
  console.log(initialsInputEl.value);
}

// **** Initiators ****

  startEl.addEventListener("click",startGame);
  hiScrbtnEl.addEventListener("click",hiScr);
  b1El.addEventListener("click",log1);
  b2El.addEventListener("click",log2);
  b3El.addEventListener("click",log3);
  b4El.addEventListener("click",log4);
  btnEl.addEventListener("click",checkAnswer);
  submitEl.addEventListener("click",sub);
  clearEl.addEventListener("click",clear);
  goBackEl.addEventListener("click",mainPage);

