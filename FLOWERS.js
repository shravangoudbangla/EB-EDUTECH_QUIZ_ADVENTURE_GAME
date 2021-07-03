/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

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
      question: 'which Flower Always Look at the Sun?',
      answers: [
      { text: 'SunFlower', correct: true },
      { text: 'Rose', correct: false },
      { text: 'Lilly', correct: false },
      { text: 'Lotus', correct: false }
     
    ]
  },
  {
    question: 'which Flower plant has Thorns?',
    answers: [
      { text: 'SunFlower', correct: false },
      { text: 'Lilly', correct: false },
      { text: 'Rose', correct: true },
      { text: 'Tulip', correct: false }
    ]
  },
  {
    question: 'which Flower grows all through the year?',
    answers: [
      { text: 'SunFlower', correct: false },
      { text: 'Periwinle', correct: true },
      { text: 'Daisy', correct: false },
      { text: 'Orchid', correct: false }
    ]
  },
  {
    question: 'which flower has the smallest seeds?',
    answers: [
      { text: 'Lilly', correct: false },
      { text: 'Rose', correct: false },
      { text: 'Tulip', correct: false },
      { text: 'Orchid', correct: true }
    ]
  }
];

 
