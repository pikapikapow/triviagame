fetch("data.json")
  .then((response) => response.json())
  // .then((data) => console.log(data));
  .then((data) => displayQuestions(data));

// fetchData();

function displayQuestions(data) {
  const randomquestion = Math.floor(Math.random() * data.length);
  const container = document.getElementById("questions-container");

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  questionDiv.innerHTML = `
            <h3 class= "title">${data[randomquestion].category}</h3>
            <p class = "txt" >Question: ${data[randomquestion].question}</p> 
                ${data[randomquestion].options
                  .map((option) => `<button class= "button">${option}</button>`)
                  .join("")}
            <button> Next Question </button>
        `;

  container.appendChild(questionDiv);
}

function sendOff() {
  window.location.href = "index.html";
}
