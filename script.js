// Зберігання інформації про систему
const info = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language
};
localStorage.setItem("systemInfo", JSON.stringify(info));

const footer = document.getElementById("footer-info");
const savedInfo = JSON.parse(localStorage.getItem("systemInfo"));
footer.innerText = `Браузер: ${savedInfo.userAgent}, Платформа: ${savedInfo.platform}, Мова: ${savedInfo.language}`;

// Показ форми через 60 секунд
setTimeout(() => {
  document.getElementById("feedback-modal").style.display = "block";
}, 60000);

// Темна тема вручну + автоматично вночі
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

const hour = new Date().getHours();
if (hour >= 21 || hour < 7) {
  document.body.classList.add("dark-theme");
}

// Отримання коментарів з JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/posts/8/comments")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("comments-container");
    container.innerHTML = "<h3>Employer Comments</h3>";
    data.forEach((comment) => {
      container.innerHTML += `
        <div class="comment">
          <strong>${comment.name}</strong>
          <p>${comment.body}</p>
          <small>${comment.email}</small>
        </div>
      `;
    });
  })
  .catch((err) =>
    console.error("Помилка завантаження коментарів:", err)
  );

const yaryna = {
  name: "Yaryna",
  age: 19
  
  }