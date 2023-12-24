function showCalculator() {
    document.getElementById('calculator-container').style.display = 'block';
  }

  function hideCalculator() {
    document.getElementById('calculator-container').style.display = 'none';
  }

  function calculate() {
    var input = document.getElementById('calculator-input').value;
    var result = evaluateExpression(input);

    // Display the result
    document.getElementById('result').textContent = 'Result: ' + result;
  }

  function evaluateExpression(expression) { 
    return new Function('return ' + expression)();
  }

  const quizData = [
    {
        question:"THIS IS A PLASEHOLDER(NR.1)",
        a:"ANSWER 1.1",
        b:"ANSWER 1.2",
        c:"ANSWER 1.3",
        d:"ANSWER 1.4",
        correct:"d"
    },
    {
        question:"THIS IS A PLASEHOLDER(NR.2)",
        a:"ANSWER 2.1",
        b:"ANSWER 2.2",
        c:"ANSWER 2.3",
        d:"ANSWER 2.4",
        correct:"a"
    },
    {
        question:"THIS IS A PLASEHOLDER(NR.3)",
        a:"ANSWER 3.1",
        b:"ANSWER 3.2",
        c:"ANSWER 3.3",
        d:"ANSWER 3.4",
        correct:"c"
    },
    {
        question:"THIS IS A PLASEHOLDER(NR.4)",
        a:"ANSWER 4.1",
        b:"ANSWER 4.2",
        c:"ANSWER 4.3",
        d:"ANSWER 4.4",
        correct:"b"
    },
    {
      question:"THIS IS A PLASEHOLDER(NR.1)",
      a:"ANSWER 1.1",
      b:"ANSWER 1.2",
      c:"ANSWER 1.3",
      d:"ANSWER 1.4",
      correct:"d"
  },
  {
      question:"THIS IS A PLASEHOLDER(NR.2)",
      a:"ANSWER 2.1",
      b:"ANSWER 2.2",
      c:"ANSWER 2.3",
      d:"ANSWER 2.4",
      correct:"a"
  },
  {
      question:"THIS IS A PLASEHOLDER(NR.3)",
      a:"ANSWER 3.1",
      b:"ANSWER 3.2",
      c:"ANSWER 3.3",
      d:"ANSWER 3.4",
      correct:"c"
  },
  {
      question:"THIS IS A PLASEHOLDER(NR.4)",
      a:"ANSWER 4.1",
      b:"ANSWER 4.2",
      c:"ANSWER 4.3",
      d:"ANSWER 4.4",
      correct:"b"
  },
  {
    question:"THIS IS A PLASEHOLDER(NR.1)",
    a:"ANSWER 1.1",
    b:"ANSWER 1.2",
    c:"ANSWER 1.3",
    d:"ANSWER 1.4",
    correct:"d"
},
{
    question:"THIS IS A PLASEHOLDER(NR.2)",
    a:"ANSWER 2.1",
    b:"ANSWER 2.2",
    c:"ANSWER 2.3",
    d:"ANSWER 2.4",
    correct:"a"
},
{
    question:"THIS IS A PLASEHOLDER(NR.3)",
    a:"ANSWER 3.1",
    b:"ANSWER 3.2",
    c:"ANSWER 3.3",
    d:"ANSWER 3.4",
    correct:"c"
},
{
    question:"THIS IS A PLASEHOLDER(NR.4)",
    a:"ANSWER 4.1",
    b:"ANSWER 4.2",
    c:"ANSWER 4.3",
    d:"ANSWER 4.4",
    correct:"b"
}
];
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("quesiton")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit");

let currentQuiz = 0
let score = 0

loadQuiz()

function  loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question 
    a_text.innerText = currentQuizData.a 
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c 
    d_text.innerText = currentQuizData.d 
}
function deselectAnswers(){
  answerEls.forEach(answerEls => answerEls.checked = false)
}
function getSelected(){
  let answerEls
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id;
      
    }
  })
  return answer;
}

submitBtn.addEventListener("click" , ()=> {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct){
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length){
      loadQuiz()
    }else{}
  }
})