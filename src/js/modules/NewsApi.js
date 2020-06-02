// import {KEY_AUTHORIZATION} from '../constants/key-authorization';
import { INTERVAL_TIME } from '../constants/key-authorization';

export class NewsApi {
  constructor (key) {
    this.baseUrl = 'https://praktikum.tk/news/v2/top-headlines?country=us/everything';
    this.key = key;
  }

  getNews (word) {
    const timeNow = new Date().toISOString();
    const timeAgo = new Date(new Date() - INTERVAL_TIME).toISOString();
    return fetch(`${this.baseUrl}?q=${word}&apiKey=${this.key}&from=${timeAgo}&to=${timeNow}&pageSize=100`)
    .then(response => response.json())
    .then(data => {

      localStorage.setItem('news', JSON.stringify(data));
      console.log(data)
    })
    .catch(err => console.log(err));
  }

}