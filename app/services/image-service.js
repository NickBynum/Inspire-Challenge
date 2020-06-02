import store from "../store.js";
import Image from "../models/image.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

class ImageService {
  constructor(){
  this.getImage()
}

async getImage() {
  await imgApi
  .get()
  .then(res => {
    console.log(res.data)
    store.commit('image', res.data)
    })
    .catch(err => console.error(err))
}

}
const imageService = new ImageService();
export default imageService;
