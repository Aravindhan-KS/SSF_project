import '../styles/pages.css';

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
    <div className="page-container">
      <div className="content-container">
        <div>
          <h1 className="page-title">Server Architecture Patterns</h1>
          <div className="grid-container two-columns">
            {architecturePatterns.map((pattern) => (
              <div
                key={pattern.title}
                className="card"
              >
                <h2 className="card-title">{pattern.title}</h2>
                <p className="card-description">{pattern.description}</p>
                <div className="pros-cons-grid">
                  <div>
                    <h3 className="pros-title">Pros</h3>
                    <ul className="list">
                      {pattern.pros.map((pro) => (
                        <li key={pro}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="cons-title">Cons</h3>
                    <ul className="list">
                      {pattern.cons.map((con) => (
                        <li key={con}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
