import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

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
    <div className={ styles.app }>
      <h1 className={ styles.app__title }>NHL Logos</h1>
      <ul className={ styles.logos }>
        {logos.map(logo => (
          <li key={logo.name} className={ styles.logo }>
            <img src={`/api/logos/${logo.name}`} alt={logo.name} className={ styles.logo__image } /> 
            <h2 className={ styles.logo__team }>{logo.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
