import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/xhr');

const API_KEY = 'ef6caf707a394c6ba46cf8736692d8cb';

export const fetchArticles = async () => {
  const response = await axios.get(' https://newsapi.org/v2/everything?q=Apple&from=2025-01-04&sortBy=popularity&apiKey=API_KEY', {
    params: { apiKey: API_KEY, country: 'us' },
  });
  return response.data.articles;
};

