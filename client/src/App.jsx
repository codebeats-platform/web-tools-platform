import { useEffect, useState } from 'react';

function App() {
  const [statusMessage, setStatusMessage] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the Node.js backend API
    fetch('http://localhost:5000/api/status')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to connect to server');
        }
        return res.json();
      })
      .then((data) => {
        setStatusMessage(data.message);
      })
      .catch((err) => {
        setError(err.message);
        setStatusMessage('');
      });
  }, []);

  return (
    <main>
      <h1>React + Node.js Connection</h1>
      {error ? <p>Error: {error}</p> : <p>{statusMessage}</p>}
    </main>
  );
}

export default App;