import '../styles/pages.css';

const Fundamentals = () => {
  const topics = [
    {
      title: 'HTTP Protocol',
      description: 'Understanding HTTP methods, status codes, and headers',
      items: ['GET, POST, PUT, DELETE', 'Status codes (2xx, 3xx, 4xx, 5xx)', 'Common headers']
    },
    {
      title: 'RESTful APIs',
      description: 'Principles and best practices of REST architecture',
      items: ['Resource-based URLs', 'CRUD operations', 'Statelessness']
    },
    {
      title: 'Database Interaction',
      description: 'Working with databases and data persistence',
      items: ['SQL vs NoSQL', 'CRUD operations', 'Connection pooling']
    },
    {
      title: 'Authentication & Authorization',
      description: 'Securing server-side applications',
      items: ['JWT tokens', 'OAuth 2.0', 'Role-based access control']
    }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <div>
          <h1 className="page-title">Server-Side Fundamentals</h1>
          <div className="grid-container two-columns">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="card"
              >
                <h2 className="card-title">{topic.title}</h2>
                <p className="card-description">{topic.description}</p>
                <ul className="list">
                  {topic.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
