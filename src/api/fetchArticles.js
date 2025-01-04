// src/api/fetchArticles.js

import { dummyArticles } from '../data/dummyData'; // Import the dummy data

export const fetchArticles = async () => {
  // Simulating a delay like an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyArticles); // Return the dummy data
    }, 1000); // 1 second delay to simulate network request
  });
};
