// Quiz Data with emojis for fun
const quizData = [
  {
    question: "🌍 What is the capital of France?",
    options: ["London 🇬🇧", "Berlin 🇩🇪", "Paris 🇫🇷", "Madrid 🇪🇸"],
    answer: "Paris 🇫🇷"
  },
  {
    question: "💻 Which language runs in a web browser?",
    options: ["Java ☕", "C 🅾️", "Python 🐍", "JavaScript 🟨"],
    answer: "JavaScript 🟨"
  },
  {
    question: "🎨 What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    answer: "Cascading Style Sheets"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = "";

  currentQuiz.options.forEach(option => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="radio" name="answer" value="${option}" />
        ${option}
      </label>
    `;
    optionsEl.appendChild(li);
  });
  scoreEl.textContent = "";  // clear score on new question
}

nextBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("😊 Please select an answer to continue!");
    return;
  }

  if (selectedOption.value === quizData[currentQuestionIndex].answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 Quiz Completed! 🎉";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Your Score: ${score} / ${quizData.length} 🏆`;
  }
});

loadQuestion();

// Joke fetching with emoji love ❤️
const jokeEl = document.getElementById("joke");
const newJokeBtn = document.getElementById("newJokeBtn");

async function fetchJoke() {
  jokeEl.textContent = "🤡 Loading joke...";
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeEl.textContent = `😂 ${data.setup} — ${data.punchline}`;
  } catch (error) {
    jokeEl.textContent = "😞 Failed to load joke. Try again!";
  }
}

newJokeBtn.addEventListener("click", fetchJoke);

fetchJoke();
