export default class Todo {

  constructor(data) {
    this.id = data.id || data._id;
    this.description = data.description;
    this.completed = data.completed;
  }

  get Template() {
    return /*html*/ `
  <dd>
  <div class="row">
    <div class="col-12 d-flex">
      <input onclick="app.todoController.toggleTodoStatus('${this.id}')" name="completed" type="checkbox" class="bg-success align-self-center">
      <span class="ml-2">${this.description}</span>
      <button class="btn fa fa-trash-o text-danger ml-auto"
        onclick="app.todoController.removeTodo('${this.id}')">
      </>
</dd>
  `
  }

}