let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answer");
let questionMode = 'none';

for (let index = 0; index < questions.length; index++) {
  questions[index].onclick = () => {
    if (questionMode === 'none' || questionMode === 'block' && index !== questionIndex) {
      // Show the answer and change the question style
      toggleQuestion(index);
      questionIndex = index;
      questions[index].style.color = '#000';
      questions[index].style.background = '#fff';
    } else {
      // Hide the answer and change the question style
      answers[index].style.display = 'none';
      questionMode = 'none';
      questions[index].style.color = '#a699a6';
      questions[index].style.background = '#fff';
    }
  }
}

function toggleQuestion(index) {
  // Hide all answers and set question styles
  for (let i = 0; i < answers.length; i++) {
    answers[i].style.display = 'none';
    questions[i].style.color = '#a699a6';
    questions[i].style.background = '#fff';
  }

  // Show the clicked answer and set question style
  answers[index].style.display = 'block';
  questionMode = 'block';
  questions[index].style.color = '#000';
  questions[index].style.background = '#eff1fe';
}
