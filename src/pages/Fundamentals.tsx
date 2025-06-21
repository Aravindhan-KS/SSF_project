import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Server-Side Fundamentals</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">{topic.title}</h2>
                <p className="text-gray-300 mb-4">{topic.description}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {topic.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Fundamentals;
