import imageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _draw() {
  // document.body.style.backgroundImage = "url(`${this.url}`)";
}
export default class ImageController {
  constructor() {
    store.subscribe("image", imageService.getImage);
  }
}
