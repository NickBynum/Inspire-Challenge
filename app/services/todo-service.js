import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/nick/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    await todoApi.get()
      .then(res => {
        let todos = res.data.data.map(rawTodoData => new Todo(rawTodoData));
        store.commit("todos", todos)
      })
      .catch(err => console.error(err));
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
      .then(res => {
        let newTodo = new Todo(res.data.data);
        let todos = [newTodo, ...store.State.todos];
        store.commit("todos", todos);
      })
      .catch(err => console.error(err));
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);

    todoApi.put(todoId, todo).then(res => {
      todo.completed = !todo.completed
      store.commit("todos", todo.completed)
    })

    
  }

  removeTodoAsync(todoId) {
    todoApi.delete(todoId)
      .then(res => {
        console.log(res.data)
        this.getTodos()
      })
      .catch(err => console.error(err))
  }
}

const todoService = new TodoService();
export default todoService;
