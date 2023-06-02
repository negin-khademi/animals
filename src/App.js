import AnimalsShow from './AnimalsShow';

function App() {
  const handleClick = () => {
    console.log('button has just click');
  };

  return (
    <>
      <AnimalsShow />
      <div>
        <button onClick={handleClick}>Add animal</button>
      </div>
    </>
  );
}

export default App;
