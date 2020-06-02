import './blocks/index.css';
import { TEMPLATE_CARD } from './js/constants/template-card';
import SearchInput from './js/components/SearchInput';
import { NewsApi } from './js/modules/NewsApi';
import { KEY_AUTHORIZATION } from './js/constants/key-authorization';
import { INTERVAL_TIME } from './js/constants/key-authorization';
import { parseJSONLabel, arrayFromObject, makeObjectNews, makeArrayNews } from './js/utils/functions';
import { NewsCard } from './js/components/NewsCard';
import { NewsCardList } from './js/components/NewsCardList';

const input = document.querySelector('.search-field');
const newsApi = new NewsApi(KEY_AUTHORIZATION);
const search = new SearchInput(input);
search.attachInput();
search.attachButton();
newsApi.getNews(localStorage.word);

let list = makeArrayNews(localStorage.news, 'articles');

let listOfCards = getArrayCards(list);

const cardList = new NewsCardList(document.querySelector('.results'), document.querySelector('.not-found'), listOfCards);

  export function getArrayCards (arrayOfObjects) {
    let list = [];
    arrayOfObjects.forEach(function(item, i) {
      list[i] = new NewsCard (item);
    });
    return list;
  }

// console.log(localStorage.word);