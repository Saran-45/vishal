import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Invenzen Blog</h1>
      </header>
      <main className="blog-content">
        <article className="blog-post">
          <h2 className="post-title">Post Title 1</h2>
          <p className="post-date">July 30, 2024</p>
          <div className="post-content">
            <p>Content of the first blog post. This is where you can share updates, tips, and insights about your inventory management system.</p>
          </div>
        </article>
        <article className="blog-post">
          <h2 className="post-title">Post Title 2</h2>
          <p className="post-date">July 29, 2024</p>
          <div className="post-content">
            <p>Content of the second blog post. Share more detailed information or stories related to your inventory app here.</p>
          </div>
        </article>
        {/* Add more blog posts as needed */}
      </main>
    </div>
  );
}

export default Blog;
