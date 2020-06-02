import { NewsCard } from "../components/NewsCard";

export function parseJSONLabel (JSONObject, label) {
  const objectLabel = JSON.parse(JSONObject)[label];
  return objectLabel;
}

export function arrayFromObject (object) {
  const list = [];
    for (let key in object) {
      list[key] = object[key];
    }
  return list;
}

export function makeObjectNews(article) {
  let objectNew = {};
  objectNew.name = article.source.name;
  objectNew.description = article.description;
  objectNew.urlToImage = article.urlToImage;
  objectNew.url = article.url;
  objectNew.title = article.title;
  objectNew.publishedAt = article.publishedAt;
  return objectNew;
}

export function makeArrayNews (JSONObject, label) {
  let listNews = [];
  listNews = arrayFromObject(parseJSONLabel(JSONObject, label));

    listNews.forEach(function(item, i) {
        listNews[i] = makeObjectNews(item);
    });

  return listNews;
}

export function makeArrayResults (JSONObject, label) {
  let listResults = [];
}

