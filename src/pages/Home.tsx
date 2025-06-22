import '../styles/pages.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <div className="hero-section">
          <h1>Server-Side Engineering</h1>
          <p className="hero-description">
            Explore the fundamentals of server-side engineering, from basic concepts
            to advanced architectures and best practices.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <a href="/fundamentals">
                <h3>Core Concepts</h3>
                <p>
                  Master the essential concepts of server-side engineering and build
                  a strong foundation.
                </p>
              </a>
            </div>
            <div className="feature-card">
              <a href="/architecture">
                <h3>Architecture</h3>
                <p>
                  Learn about different architectural patterns and when to use them.
                </p>
              </a>
            </div>
            <div className="feature-card">
              <a href="/best-practices">
                <h3>Best Practices</h3>
                <p>
                  Discover industry-standard best practices for building robust
                  server-side applications.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
