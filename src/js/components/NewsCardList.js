export class NewsCardList {
  constructor (domElement, domElementEmpty, getArray) {
    this.domElement = domElement;
    this.domElementEmpty = domElementEmpty;
    this.listCard = getArray;
    this.container = document.querySelector('.results__list');
    this.button = this.domElement.querySelector('.results__button');
    this.isEmpty = true;
    this.isEnd = false;
    this.listRender = [];
    this.render();
    this.button.addEventListener('click', () => {
      this.render();
    })
  }

  threeCardsOpen () {
    let listThree = [];
    if ((this.isEmpty) && (this.listCard.length !== 0)) {
      this.isEmpty = false;
    }
      
    // Сначала отрежем от массива this.listCard три элемента (или меньше, если осталось меньше) во временный массив listThree
    if (this.listCard.length >= 3) {
      listThree = this.listCard.splice(0, 3);
    }

    if (this.listCard.length < 3) {
      let count = 0
      this.listCard.forEach((element, i) => {
        listThree[i] = element;
        count++;
      }); 
      this.isEnd = true;
      this.listCard.length = 0;
      listThree.splice(count, 3 - count);
    }
    // Затем отправим элементы из временного массива listThree в массив, из которого будем брать данные для аналитики
      listThree.forEach((element, i) => {
        this.listRender[this.listRender.length] = element;
      });

    return listThree;
  }

  render () {
    this.threeCardsOpen().forEach(element => {
      this.container.append(element.domElement);
    });
    if (this.isEmpty) {     
      this.domElement.classList.add('results_hidden');
      this.domElementEmpty.classList.remove('not-found_hidden');
      return;
    }
    if (this.isEnd) {
      this.button.classList.add('results__button_hidden');
    }    
  }
  
}