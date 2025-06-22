import '../styles/pages.css';

const BestPractices = () => {
  const practices = [
    {
      category: 'Security',
      items: [
        {
          title: 'Input Validation',
          description: 'Always validate and sanitize user input to prevent injection attacks',
          example: 'Use validation libraries and escape special characters'
        },
        {
          title: 'Authentication & Authorization',
          description: 'Implement proper user authentication and role-based access control',
          example: 'Use JWT tokens and implement OAuth 2.0 where appropriate'
        },
        {
          title: 'Data Encryption',
          description: 'Encrypt sensitive data both in transit and at rest',
          example: 'Use HTTPS and encrypt passwords with strong hashing algorithms'
        }
      ]
    },
    {
      category: 'Performance',
      items: [
        {
          title: 'Caching',
          description: 'Implement appropriate caching strategies',
          example: 'Use Redis for session storage and frequently accessed data'
        },
        {
          title: 'Database Optimization',
          description: 'Optimize database queries and implement proper indexing',
          example: 'Use database indexing and query optimization techniques'
        },
        {
          title: 'Load Balancing',
          description: 'Distribute traffic across multiple servers',
          example: 'Use load balancers and implement horizontal scaling'
        }
      ]
    },
    {
      category: 'Code Quality',
      items: [
        {
          title: 'Error Handling',
          description: 'Implement proper error handling and logging',
          example: 'Use try-catch blocks and implement a logging strategy'
        },
        {
          title: 'Code Organization',
          description: 'Follow clean code principles and design patterns',
          example: 'Use dependency injection and follow SOLID principles'
        },
        {
          title: 'Testing',
          description: 'Write comprehensive tests for your code',
          example: 'Implement unit tests, integration tests, and end-to-end tests'
        }
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <div>
          <h1 className="page-title">Server-Side Best Practices</h1>
          <div className="section-container">
            {practices.map((section) => (
              <div
                key={section.category}
              >
                <h2 className="section-title">
                  {section.category}
                </h2>
                <div className="grid-container three-columns">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="card"
                    >
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-description">{item.description}</p>
                      <div className="example-text">
                        <strong>Example: </strong>
                        {item.example}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
