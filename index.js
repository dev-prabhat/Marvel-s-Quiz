var readlineSync = require('readline-sync');
var score = 0 ;
var userAnswer = readlineSync.question("Can you tell me your name please? ");

console.log(`Welcome ${userAnswer} in Marvel's Quiz`);

function play(question,answer,...others){
  console.log(question);
  for(let i=0;i<others.length;i++){
    console.log(`${i+1}.  ${others[i]}`)
  }
  userAnswer = readlineSync.question("Your answer ");
  
  if(userAnswer === answer){
    console.log("Congrates it's correct");
    score++;
  }else{
    console.log("NO it's wrong");
    score--;
  }
  console.log(`Score is ${score}`)
  console.log('-------------------')
}

var Marvel = [
  questionOne={
    question: "What is the name of Iron man? ",
    answer: "2",
    a: "Haward Stark",
    b: "Tony Stark",
    c: "Haward Potts",
    d: "None of these"
  },
  questionTwo={
    question: "Where is Avenger Tower? ",
    answer: "1",
    a: "NewYork",
    b: "California",
    c: "Los Angeles",
    d: "None of these"
  },
  questionThree={
    question: "Who is Winter Soldier? ",
    answer: "3",
    a: "Barry Alen",
    b: "Clint Barton",
    c: "James Buchanan Barnes",
    d: "None of these"
  },
  questionFour={
    question: "Who lifted Thor's Hammer in Moive Avenger: Age of Ultron? ",
    answer: "4",
    a: "Tony Stark",
    b: "Bruce Banner",
    c: "Dr. Strange",
    d: "Captain Steve Rogers"
  }
]

for(var i=0;i<Marvel.length;i++){
  var currentQuestion = Marvel[i];
  play(currentQuestion.question,currentQuestion.answer,currentQuestion.a,currentQuestion.b,currentQuestion.c,currentQuestion.d)
}

console.log(`Total score is ${score}`)