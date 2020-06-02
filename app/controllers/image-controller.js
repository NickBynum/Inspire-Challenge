import imageService from "../services/image-service.js";
import store from "../store.js";


function _draw() {
  document.body.style.backgroundImage = `url('${store.State.image.url}')`;
}
export default class ImageController {
  constructor() {
    store.subscribe("image", _draw);
    imageService.getImage()
  }
}
