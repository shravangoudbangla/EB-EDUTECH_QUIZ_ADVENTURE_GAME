const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const audioElement = document.getElementById("myAudio");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});
function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
   var x = document.getElementById("image").src;
  
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
   
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Play Again';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}



const questions = [
  {
      question: 'This is a long yellow fruit. Monkeys love to eat them!',
      answers: [
      { text: 'prickly pear', correct: false  },
      { text: 'persimmon', correct: false},
      { text: 'orange', correct: false},
      { text: 'banana', correct: true }
     
    ]
  },
  {
    question: 'This is a red, delicious fruit. One a day will keep the doctor away!',
    answers: [
      { text: 'coconut', correct: false },
      { text: 'apple ', correct: true },
      { text: ' papaya', correct: false },
      { text: 'quince', correct: false }
    ]
  },
  {
    question: 'Which of these fruits is not considered a citrus fruit?',
    answers: [
      { text: 'orange', correct: false },
      { text: 'lemon', correct: false },
      { text: 'cranberry ', correct: true},
      { text: 'lime', correct: false }
    ]
  },
  {
    question: 'Which fruit has milk inside it?',
    answers: [
      { text: ' nectarine', correct: false },
      { text: ' peach', correct: false },
      { text: 'coconut', correct: true },
      { text: 'plum', correct: false }
    ]
  }
];

