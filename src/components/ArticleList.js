// src/components/ArticleList.jsx
const ArticleList = ({ articles }) => {
  return (
    <div className="p-4">
      {articles.length > 0 ? (
        <ul className="flex flex-wrap justify-between gap-4">
          {articles.map((article, index) => (
            <li key={index} className="p-4 border rounded shadow w-full md:w-[400px]">
              {/* Add image */}
              {article.urlToImage ? (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-[200px] object-cover rounded-t"
                />
              ) : (
                <div className="w-full h-[200px] bg-gray-300 rounded-t flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}

              <h2 className="text-xl font-semibold mt-4">{article.title}</h2>
              <p className="text-sm text-gray-600">{article.author || 'Unknown'}</p>
              <p className="text-sm">{new Date(article.publishedAt).toLocaleDateString()}</p>
              <p className="text-gray-700">{article.type || 'Article'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No articles found.</p>
      )}
    </div>
  );
};

export default ArticleList;
