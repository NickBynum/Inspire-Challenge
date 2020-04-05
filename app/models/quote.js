export default class Quote {
  constructor(data) {
    this.id = data.id || ''
    this.quote = data.body || ''
  }
}