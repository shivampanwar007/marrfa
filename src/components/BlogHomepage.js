import React, { useState } from "react";

const blogs = [
    {
      id: 1,
  
      title: "I Left My Heart in the Mountains",
      description:
        "I’m a self-professed mountain girl/mountain lover/ mountain climber. Except that here’s the thing: I don’t even live in the mountains – not even close!. Years ago I traded in my mountain lifestyle  opportunity on the other side of the country – and I wouldn’t change that decision for the world!",
      author: "Steph",
      date: "December 6, 2023   ",
      image:"https://www.hostelworld.com/blog/wp-content/uploads/2019/01/mount-everest-1313x875.jpg",
      link:" https://www.thepinkbackpack.com/ileftmyheartinthemountains/"
    },
    {
      id: 2,
      title: "The Gold Coast",
      description:
        "For many of us, the Gold Coast is the jewel in Australia's glittering crown. It has an incredible 300 days of sunshine per year and endless natural beauty. Set along the Pacific Ocean, this iconic region spans 57 kilometers of sun-kissed coastline. Famous for its wide sandy beaches.",
      author: "Jane Smith",
      date: "December 9, 2024",
       image:"https://green-travel-blog.com/wp-content/uploads/2018/05/Zeavola-Resort-Beach-sustainable-travel-1.jpg",
      link:" https://thebeachlifeblog.com/2023/08/03/the-gold-coast/"
    },
    {
      id: 3,
      title: "The Best Dog Food in India",
      description: "After all, you are what you eat and the same goes for our canine companions.But let's be real, navigating the world of dog food can be overwhelming. With so many different brands and labels to choose from, how do you know which one is the best fit for your furry friend? That's where we come in.",
      author: "Tarun Verma ",
      date: "December 7, 2024",
       image:"https://www.bellaandduke.com/wp-content/uploads/2021/07/Cat-and-dog-55-tips-for-pet-friendly-summer-blog-scaled.jpeg.webp",
      link:" https://pawsindia.com/blogs/news/heres-what-you-might-not-know-about-the-best-dog-food-in-india"
    },
    {
      id: 4,
  
      title: "9 challenges facing the EV industry today",
      description:
        "The electric vehicle (EV) industry is experiencing unprecedented growth, but it faces several hurdles that could slow its adoption. From high costs to charging infrastructure issues, these challenges require innovative solutions to ensure EVs become the norm. Below are some of the key challenges facing the EV industry.",
      author: "Shivam Panwar",
      date: "july 12, 2023   ",
      image:"https://blog.feedspot.com/wp-content/uploads/2017/07/Environmental-Blogs.jpg",
      link:" https://www.theenvironmentalblog.org/2024/12/9-challenges-facing-the-ev-industry-today/"
    },
    {
      id: 5,
      title: "The Gold Coast",
      description:
        "For many of us, the Gold Coast is the jewel in Australia's glittering crown. It has an incredible 300 days of sunshine per year and endless natural beauty. Set along the Pacific Ocean, this iconic region spans 57 kilometers of sun-kissed coastline. Famous for its wide sandy beaches.",
      author: "Mayank",
      date: "june 7, 2024",
       image:"https://green-travel-blog.com/wp-content/uploads/2018/05/Zeavola-Resort-Beach-sustainable-travel-1.jpg",
      link:" https://thebeachlifeblog.com/2023/08/03/the-gold-coast/"
    },
    {
      id: 6,
      title: "The Best Dog Food in India",
      description: "After all, you are what you eat and the same goes for our canine companions.But let's be real, navigating the world of dog food can be overwhelming. With so many different brands and labels to choose from, how do you know which one is the best fit for your furry friend? That's where we come in.",
      author: "Mukesh ",
      date: "march 23, 2024",
       image:"https://www.bellaandduke.com/wp-content/uploads/2021/07/Cat-and-dog-55-tips-for-pet-friendly-summer-blog-scaled.jpeg.webp",
      link:" https://pawsindia.com/blogs/news/heres-what-you-might-not-know-about-the-best-dog-food-in-india"
    },
  ];

const BlogHomepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // Default to 'newest'

  // Filter blogs based on search query
  const filteredBlogs = blogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest"
        ? dateB - dateA // Newest first
        : dateA - dateB; // Oldest first
    });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">My Blog</h1>
        </div>
      </header>

      {/* Search and Sort Controls */}
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <input
          type="text"
          placeholder="Search blogs by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="sm:w-[400px] w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
        </select>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
              >
                <div className="image mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <span>By {blog.author}</span>
                  <span className="ml-2">•</span>
                  <span className="ml-2">{blog.date}</span>
                </div>
                <div>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No blogs found.</p>
        )}
      </main>
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4  w-full">
        <div className="container mx-auto px-4 ">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogHomepage;
