fetch("data.json")
  .then((response) => response.json())
  // .then((data) => console.log(data));
  .then((data) => displayQuestions(data));

// fetchData();

function displayQuestions(data) {
  const container = document.getElementById("questions-container");
  data.forEach((item) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    questionDiv.innerHTML = `
            <h3>${item.category}</h3>
            <p>Question: ${item.question}</p>
            <p>Options:</p>
            <ul>
                ${item.options.map((option) => `<li>${option}</li>`).join("")}
            </ul>
            <p>Answer: ${item.answer}</p>
        `;

    container.appendChild(questionDiv);
  });
}

function sendOff() {
  window.location.href = "index.html";
}
