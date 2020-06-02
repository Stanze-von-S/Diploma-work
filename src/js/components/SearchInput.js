export default class SearchInput {
  constructor (block) {
    this.block = block;
    this.validation = this.validation.bind(this);
  }

  borderUpdate () {
    this.block.querySelector('.search-field__input').style.borderColor = '#347EFF';
    this.block.querySelector('.search-field__input').style.borderWidth = '3px';
  }

  borderError () {
    this.block.querySelector('.search-field__input').style.borderColor = '#ffc0c0';
    this.block.querySelector('.search-field__input').style.borderWidth = '3px';
  }

  emptyError () {
    this.block.querySelector('.search-field__input').placeholder = 'Нужно ввести ключевое слово';
  }

  attachInput () {    
    this.block.querySelector('.search-field__input').addEventListener('input', this.validation);
  }

  attachButton () {
    this.block.querySelector('.search-field__button').addEventListener('click', (event) => {
      event.preventDefault();
        if (this.validation()) {
          localStorage.setItem('word', this.block.querySelector('.search-field__input').value);
          console.log(this.block.querySelector('.search-field__input').value);
          
          console.log(localStorage);
        }
        if (this.block.querySelector('.search-field__input').validity.tooShort) {
          this.borderError();
          alert('В запросе должно быть более одного символа');
        }

        if (this.block.querySelector('.search-field__input').validity.valueMissing) {
          // this.borderError();
          alert('Нужно ввести ключевое слово');
        }

    })
  }

  validation () {
    if (this.block.querySelector('.search-field__input').validity.valid) {
      this.borderUpdate();
      return true;
    }

    if (this.block.querySelector('.search-field__input').validity.valueMissing) {
      this.borderError();
      this.emptyError();
    }
  }
}