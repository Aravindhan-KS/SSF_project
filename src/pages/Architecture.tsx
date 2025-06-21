import { motion } from 'framer-motion';

const Architecture = () => {
  const architecturePatterns = [
    {
      title: 'Monolithic Architecture',
      description: 'Traditional unified application structure',
      pros: ['Simple to develop', 'Easy to deploy', 'Good for small applications'],
      cons: ['Harder to scale', 'Limited technology choices', 'Complex maintenance']
    },
    {
      title: 'Microservices Architecture',
      description: 'Distributed system of independent services',
      pros: ['Independent scaling', 'Technology flexibility', 'Better fault isolation'],
      cons: ['Complex deployment', 'Network latency', 'Data consistency challenges']
    },
    {
      title: 'Serverless Architecture',
      description: 'Event-driven, cloud-based architecture',
      pros: ['Auto-scaling', 'Pay-per-use', 'Low maintenance'],
      cons: ['Cold starts', 'Vendor lock-in', 'Limited execution time']
    },
    {
      title: 'Event-Driven Architecture',
      description: 'System based on event production and consumption',
      pros: ['Loose coupling', 'Real-time processing', 'Scalability'],
      cons: ['Complex debugging', 'Event versioning', 'Eventual consistency']
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
          <h1 className="text-4xl font-bold mb-8">Server Architecture Patterns</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architecturePatterns.map((pattern, index) => (
              <motion.div
                key={pattern.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">{pattern.title}</h2>
                <p className="text-gray-300 mb-4">{pattern.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-green-400 font-semibold mb-2">Pros</h3>
                    <ul className="list-disc list-inside text-gray-400">
                      {pattern.pros.map((pro) => (
                        <li key={pro}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-semibold mb-2">Cons</h3>
                    <ul className="list-disc list-inside text-gray-400">
                      {pattern.cons.map((con) => (
                        <li key={con}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Architecture;
