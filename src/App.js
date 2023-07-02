import logo from './backlogo2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          당시:  <code>당신의 시간을 기록해드립니다.</code>
        </p>
        <a
          className="App-link"
          href="./main.js"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Loading...
        </a>
      </header>
    </div>
  );
}

export default App;
