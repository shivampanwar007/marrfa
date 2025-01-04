import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ArticleList from '../components/ArticleList';
import PayoutCalculator from '../components/PayoutCalculator';
import { fetchArticles } from '../api/fetchArticles'; // Assuming you put the function in the api folder

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
      setFilteredArticles(fetchedArticles);
    };
    getArticles();
  }, []);

  const handleSearch = (query) => {
    setFilteredArticles(
      articles.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleFilter = ({ author, type, startDate, endDate }) => {
    setFilteredArticles(
      articles.filter((article) => {
        const matchesAuthor = author ? article.author?.toLowerCase().includes(author.toLowerCase()) : true;
        const matchesType = type ? article.type === type : true;
        const matchesDate =
          (!startDate || new Date(article.publishedAt) >= new Date(startDate)) &&
          (!endDate || new Date(article.publishedAt) <= new Date(endDate));
        return matchesAuthor && matchesType && matchesDate;
      })
    );
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className="p-4">
        <Filters onFilter={handleFilter} />
        <ArticleList articles={filteredArticles} />
        <PayoutCalculator articles={filteredArticles} />
      </div>
    </div>
  );
};

export default Home;
