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
      question: 'which is the smallest bird in the world?',
      answers: [
      { text: 'Finch', correct: false },
      { text: 'Bee hummingbird', correct: true },
      { text: 'Robin', correct: false },
      { text: 'Sparrow', correct: false}
     
    ]
  },
  {
    question: 'Which is The Fastest Flying bird in the World?',
    answers: [
      { text: 'Bald Eagle', correct: false },
      { text: 'Ostrich ', correct: false },
      { text: ' Peregrine Falcon', correct: true },
      { text: 'Swallow', correct: false }
    ]
  },
  {
    question: 'Which Bird is used as aSymbol of Peace?',
    answers: [
      { text: 'Dove ', correct: true },
      { text: 'Swan', correct: false },
      { text: 'Peacock ', correct: false},
      { text: 'Crane', correct: false }
    ]
  },
  {
    question: 'Which bird does not make a nest of its Own?',
    answers: [
      { text: ' Pigeon', correct: false },
      { text: ' Kingfisher', correct: false },
      { text: 'Raven', correct: false },
      { text: 'Cuckoo', correct: true }
    ]
  }
];


