import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import quoteController from "./controllers/quote-controller.js";
import imageController from "./controllers/image-controller.js";

//TODO Dont forget to register all your controllers **done**
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new quoteController();
    this.imageController = new imageController();
  }
}

window["app"] = new App();
