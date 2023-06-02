import AnimalsShow from './AnimalsShow';

function App() {
  const clickHandle = () => {
    console.log('button has just click');
  };

  return (
    <>
      <AnimalsShow />
      <div>
        <button onClick={clickHandle}>Add animal</button>
      </div>
    </>
  );
}

export default App;
