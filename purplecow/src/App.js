import logo from './logo.svg';
import './App.css';
import CounterComp from './Counter';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className='Hero-text'>
          Project Purple Cow        </span>
      </div>
      <CounterComp />

    </div>
  );
}

export default App;
