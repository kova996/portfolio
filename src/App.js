import logo from './logo.svg';
import './App.css';
import Test from './components/test';
import { HelloLuka } from './components/test2';
import { DummyNavigation } from './components/global/navigation';

function App(props) {
  return (
    <div className="App">
      <DummyNavigation></DummyNavigation>
      <header className="App-header">
        <HelloLuka></HelloLuka>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React every day
        </a>
        <Test />
      </header>
    </div>
  );
}

export default App;
