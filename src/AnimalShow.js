import './AnimalShow.css';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import { useState } from 'react';

const svgMap = {
  bird,
  dog,
  cat,
  cow,
  horse,
  gator,
};

function AnimalsShow({ type }) {
  const [size, setSize] = useState(0);
  const handleClick = () => {
    setSize(size + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="Animal Logo" src={svgMap[type]} />
      <img className="heart" alt="Heart" src={heart} style={{ width: 10 + 10 * size }} />
    </div>
  );
}

export default AnimalsShow;
