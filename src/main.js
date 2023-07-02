import logo from './backlogo2.png';
import './App.css';

function main() {
  return (
    <div className="main">
      <header className="main-header">
        <img src={logo} className="main-logo" alt="logo" />
        <p>
          메인페이지로 이동함.
        </p>
        <a
          className="main-link"
          href="./"
          target="_blank"
          rel="noopener noreferrer"
        >
          이동할 페이지 주소넣기
        </a>
      </header>
    </div>
  );
}

export default App;
