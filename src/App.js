import logo from './logo.svg';
import './App.css';
import dog from './dog.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{paddingBottom: 40}}>
        World's most fungible token 😴🙃😤
        </div>
        <img src={dog}/>
      </header>
    </div>
  );
}

export default App;
