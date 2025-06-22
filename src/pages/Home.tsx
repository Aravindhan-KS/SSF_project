const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="hero-section">
          <h1>Server-Side Engineering</h1>
          <p className="hero-description">
            Explore the fundamentals of server-side engineering, from basic concepts
            to advanced architectures and best practices.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Core Concepts</h3>
              <p>
                Master the essential concepts of server-side engineering and build
                a strong foundation.
              </p>
            </div>
            <div className="feature-card">
              <h3>Architecture</h3>
              <p>
                Learn about different architectural patterns and when to use them.
              </p>
            </div>
            <div className="feature-card">
              <h3>Best Practices</h3>
              <p>
                Discover industry-standard best practices for building robust
                server-side applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
