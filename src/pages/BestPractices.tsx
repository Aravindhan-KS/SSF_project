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
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-4xl font-bold mb-8">Server-Side Best Practices</h1>
          <div className="space-y-12">
            {practices.map((section) => (
              <div
                key={section.category}
              >
                <h2 className="text-3xl font-semibold mb-6 text-blue-400">
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-gray-800 p-6 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="text-gray-400 text-sm">
                        <strong className="text-gray-300">Example: </strong>
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
