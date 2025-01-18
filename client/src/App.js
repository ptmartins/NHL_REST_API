import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/logos'); 

        console.log(response.ok);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const logoData = await response.json();
        console.log(logoData);
        setLogos(logoData);
      } catch (error) {
        console.error('Error fetching logos:', error);
      }
    };

    fetchLogos();
  }, []); 

  return (
    <div>
      <h1>Logos</h1>
      <ul>
        {logos.map(logo => (
          <li key={logo.name}>
            <img src={`/api/logos/${logo.name}`} alt={logo.name} /> 
            <span>{logo.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
