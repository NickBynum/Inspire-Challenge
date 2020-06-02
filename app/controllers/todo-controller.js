import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
  let template = "";
  let todos = store.State.todos;

  todos.forEach(todo => (template += todo.Template));
  document.getElementById("todos").innerHTML = template;
  document.getElementById("numTodos").innerHTML = `<p>Chores Left: ${todos.length}<p>`  
}

function drawTime() {
  let time = new Date()
  document.getElementById("clock").innerHTML = time.toLocaleTimeString(); 
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    let formData = event.target;
    let newTodoObj = {
      description: formData.description.value,
    };

    TodoService.addTodoAsync(newTodoObj);
    formData.reset();
  }

  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}