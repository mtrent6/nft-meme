import './App.css';
import dog from './dog.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{paddingBottom: 40}}>
        World's most fungible token 😴🙃😤
        </div>
        <img alt="this is a dog" src={dog}/>
      </header>
    </div>
  );
}

export default App;
