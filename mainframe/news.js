// api key 7f59dcc3c46e407096062acd4a0f046d




// var url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&api' +
// 'country=us&' +
// 'apiKey=7f59dcc3c46e407096062acd4a0f046d';
// var req = new Request(url);
// fetch(req)




const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('7f59dcc3c46e407096062acd4a0f046d');

newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      
    }
  */
});

newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
  /*
    {
   
    }
  */
});

newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});