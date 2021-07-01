
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. ‹div› tag can be used to provide layout of the web page. State True Or False.",
      answers: {
        a: "True",
        b: "False"        
      },
      correctAnswer: "a"
    },

    {
      question: "Q2. Div tag is used to the group of various tags.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },

    {
      question: "Q3. Select the correct attribute of ‹div› tag for changing the percentage of background color.",
      answers: {
        a: "transparency",
        b: "opacity",
        c: "percentage",
        d: "None of the above"       
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q4. Div tag is also known as.",
      answers: {
        a: "Divisor tag",
        b: "Division tag",
        c: "Both",
        d: "None of the above"      
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q5. How can we add multiple tags in ‹div› tag.",
      answers: {
        a: "style=tag1;tag2;",
        b: "set=tag1tag2;",
        c: "Both(a)&(b)",
        d: "None of the above"
      },
      correctAnswer: "d"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
