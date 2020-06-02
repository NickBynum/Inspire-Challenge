import quoteService from "../services/quote-service.js";
import store from "../store.js"

function _drawQuotes() {
  
  // @ts-ignore
  document.getElementById("quote").innerHTML = `<p>"${store.State.quote.body}"</p>
  <p>-${store.State.quote.author}</p>`
}

export default class QuoteController { 
  constructor() {
    store.subscribe("quote", _drawQuotes)
    quoteService.getQuotes()
  }
}