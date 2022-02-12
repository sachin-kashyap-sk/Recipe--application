const todoArray = ["TodoOne", "TodoTwo", "TodoThree", "TodoFour"];
const todoList = document.querySelector(".todoList");
const newTodo = document.querySelector(".newTodo");
const addBtn = document.querySelector(".fa-plus");

const removeTodo = (index) => {
  todoArray.splice(index, 1);
  todoList.innerHTML = generateValue();
};
const generateValue = () => {
  let value = "";
  for (let i = 0; i < todoArray.length; i++) {
    value =
      value +
      `<li>
  ${todoArray[i]}<span class="icon"onClick=removeTodo(${i})><i class="fas fa-trash"></i> </span>
</li>`;
  }
  return value;
};
todoList.innerHTML = generateValue();

addBtn.addEventListener("click", () => {
  currentValue = newTodo.value;
  if (!currentValue) {
    return;
  }
  todoArray.push(currentValue);
  todoList.innerHTML = generateValue();
  newTodo.value = "";
});
