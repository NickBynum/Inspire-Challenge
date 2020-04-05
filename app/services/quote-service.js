import store from "../store.js";
import Quote from "../models/quote.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

class QuoteService {
  constructor() {
    this.getQuotes()
  }
  //TODO create methods to retrieve data trigger the update window when it is complete
  getQuotes() {
    _quoteApi.get()
      .then(res => {
        store.commit('quote', res.data.quote.body)
      })
      .catch(err => console.error(err))
  }

}
const quoteService = new QuoteService();
export default quoteService;
