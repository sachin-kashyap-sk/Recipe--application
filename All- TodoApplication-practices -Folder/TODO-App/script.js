const todoArray = [
  { id: 0, title: "TodoOne", isCompleted: false },
  { id: 1, title: "TodoTwo", isCompleted: false },
  { id: 2, title: "TodoThree", isCompleted: false },
];
const todoList = document.querySelector(".todoList");
const newTodo = document.querySelector(".newTodo");
const addBtn = document.querySelector(".fa-plus");
const updateTodo = (index) => {
  todoArray[index].isCompleted = !todoArray[index].isCompleted;
  todoList.innerHTML = generateValue();
};
const removeTodo = (index) => {
  todoArray.splice(index, 1);
  todoList.innerHTML = generateValue();
};

const generateValue = () => {
  let value = "";
  for (let i = 0; i < todoArray.length; i++) {
    const className = todoArray[i].isCompleted ? "complete" : "";
    value =
      value +
      `<li class="${className}" ondblClick=updateTodo(${i})>
          ${todoArray[i].title}<span class="icon"onClick=removeTodo(${i})><i class="fas fa-trash"></i> </span>
        </li>`;
  }
  return value;
};
todoList.innerHTML = generateValue();

addBtn.addEventListener("click", () => {
  const currentValue = newTodo.value;
  if (!currentValue) {
    return;
  }
  todoArray.push({
    id: todoArray.length,
    title: currentValue,  
    isCompleted: false,
  });
  todoList.innerHTML = generateValue();
  newTodo.value = "";
});
