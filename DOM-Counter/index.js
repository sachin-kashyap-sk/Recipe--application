const countElement = document.querySelector("#count");
const countUpBtn = document.querySelector("#countUp");
const countDownBtn = document.querySelector("#countDown");
const learningTodoElement = document.querySelector("#learningTodo");
const nameInput = document.querySelector("#name");
const showNameInputBtn = document.querySelector("#showInputValue");
const firstNameInp = document.querySelector("#firstName");
const lastNameInp = document.querySelector("#lastName");
const userForm = document.querySelector("#userForm");
const instantInpElement = document.querySelector("#instantValue");
const displayInstantValue = document.querySelector("#displayValue");
const learningTodoArray = [
  "Learn Javascript",
  "Lear Nodejs",
  "Learn React-js",
  "Learn Typescript",
];

let initialCount = 1;

countElement.innerText = initialCount;

let todoList = "";

for (let i = 0; i < learningTodoArray.length; i++) {
  todoList = todoList + `<li>${learningTodoArray[i]}</li>`;
}

learningTodoElement.innerHTML = todoList;

countUpBtn.addEventListener("click", () => {
  initialCount += 1;
  countElement.innerText = initialCount;
});

countDownBtn.addEventListener("click", () => {
  if (initialCount > 1) {
    initialCount -= 1;
  }
  countElement.innerText = initialCount;
});

showNameInputBtn.addEventListener("click", () => {
  const value = nameInput.value;
  if (value) {
    alert(`My name is: ${value}`);
  }
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (firstNameInp.value && lastNameInp.value) {
    console.log({ firstName: firstNameInp.value, lastName: lastNameInp.value });
  }
});

instantInpElement.addEventListener("input", (event) => {
  displayInstantValue.innerText = event.target.value;
});
