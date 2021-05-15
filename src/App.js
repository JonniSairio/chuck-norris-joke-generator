import React, { useState, useEffect } from 'react';

const App = () => {
  const API_URL = 'http://api.icndb.com/jokes/random';

  const [joke, setJoke] = useState('');
  const generateJoke = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setJoke(data.value.joke));
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div>
      <div className='joke-container'>
        <h2>Chuck Norris Joke Generator</h2>
        <p>{joke}</p>
        <button onClick={generateJoke}>Another epic joke!</button>
      </div>
    </div>
  );
};

export default App;
