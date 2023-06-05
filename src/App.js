import './App.css';

import AnimalShow from './AnimalShow';
import { useState } from 'react';

function getRandomAnimals() {
  const animals = ['dog', 'horse', 'cat', 'gator', 'bird', 'cow'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  function handleClick() {
    return setAnimals([...animals, getRandomAnimals()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
