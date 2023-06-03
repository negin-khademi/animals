import { useState } from 'react';

function getRandomAnimals() {
  const animals = ['dog', 'horse', 'cat', 'gator', 'bird', 'cow'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Add animal</button>
        <div>{animals}</div>
      </div>
    </>
  );
}

export default App;
