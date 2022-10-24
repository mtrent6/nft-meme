import './App.css';
import dog from './dog.png'
import dog2 from './dog2.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ paddingBottom: 40 }}>
          World's most fungible token 😴🙃😤
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

          <img alt="this is a dog" src={dog} />
          <img alt="this is the second dog" src={dog2} />
        </div>
      </header>
    </div>
  );
}

export default App;
