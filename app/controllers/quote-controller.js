import quoteService from "../services/quote-service.js";
import store from "../store.js"

function _drawQuotes() {
  console.log(store.State.quote);
  
  document.getElementById("quote").innerHTML = `<p>${store.State.quote}<p>`
}
//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

export default class QuoteController { 
  constructor() {
    store.subscribe("quote", _drawQuotes)
  }
}