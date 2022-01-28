export default class Quote {
  constructor(data) {
    this.id = data.id || ''
    this.quote = data.content || '“The greatest glory in living lies not in never falling, but in rising every time we fall.”'
    this.author = data.author || 'Nelson Mandela'
  }
}
