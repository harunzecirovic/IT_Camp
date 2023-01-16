import logo from './logo.svg';
import './App.css';
import StyledButton from './components/styleButton/styledButton';
import StyledHeader from './components/styleButton/styledHeader'
const App =() => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledHeader innerText="This is header"/>
        <StyledButton innerText="CLICK"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
