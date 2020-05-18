import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function **done**
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
    //TODO Remember to register your subscribers **done**
    TodoService.getTodos();
    store.subscribe("todos", _drawTodos)
  }

  addTodo(event) {
    event.preventDefault();
    let formData = event.target;
    let newTodoObj = {
      //TODO build the todo object from the data that comes into this method **done I think might need id etc**
      description: formData.description.value,
    };

    TodoService.addTodoAsync(newTodoObj);
    formData.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}