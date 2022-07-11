const axios = require("axios").default;
const countries = require("./countries.json");
require("dotenv").config();

async function getNews(country) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`
    );
    return {
      country: country,
      articles: response.data.articles,
    };
  } catch (error) {
    console.error("Found Error", error);
  }
}

module.exports = async function () {
  console.log('Countries', countries)
  var newsPromises = countries.map(getNews);
  return Promise.all(newsPromises).then((obj) => {
    console.log("News Obj", newsPromises);
    return obj;
  });
};
