import store from "../store.js";
import Quote from "../models/quote.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 15000
});

class QuoteService {
  constructor() {
    this.getQuotes()
  }
  async getQuotes() {
    await _quoteApi.get()
      .then(res => {
        store.commit('quote', res.data.quote)
      })
      .catch(err => console.error(err))
  }

}
const quoteService = new QuoteService();
export default quoteService;
