function parseDate (date) {
  let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      };
  const time = new Date(date).toLocaleString("ru", options); // Привели дату к виду ХХ месяца ХХХХ г.
  // Далее неоптимальным образом приводим дату к виду ХХ месяца ХХХХ и возвращаем результат.
  let str = time.split(' ');
  let str2 = [];
  str2.push(str[0]);
  str2.push(str[1]);
  let str3 = str2.join(' ');
  let str4 = [];
  str4.push(str3);
  str4.push(str[2]);
  let str5 = str4.join(', ');
  return str5;
}

export class NewsCard {
  constructor (object) {    
    this.object = object;
    this.time = parseDate(this.object.publishedAt);
    this.domElement = this._create();
    this.domElement.addEventListener('click', () => {      
      document.location.href = `${this.object.url}`;
    })
  }

  _create () {
    let element = document.createElement('div');
    element.classList.add('card');
    element.insertAdjacentHTML('afterbegin', `
      <div class = "card__wrapper">
      <img class = "card__image" src = "${this.object.urlToImage}" alt = "${this.object.title}">
      <p class = "card__date text-subtitle_family_source-sans-pro text-subtitle text_color_grey">${this.time}</p>
      <h3 class = "card__title text-title text-title_size_l text_color_dark">${this.object.title}</h3>
      <p class = "card__description text-subtitle text-subtitle_size_l text_color_dark">
      ${this.object.description}
      </p>
      </div>
      <p class = "card__resource text-title text-title_size_s text_color_grey">${this.object.name}</p>`);
      return element;
  }
}

