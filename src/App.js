import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';

function App() {
  return (
    <div>
      <div>
        <Book name="JS for beginners" year="2018" price="1000" />
        <Book name="React for beginners" year="2019" price="1200" />
        <Book name="Vue for beginners" year="2021" price="1500" />
      </div>
      <div>
        <h1>Hello from React</h1>
        <div>
          <Book name="JS for beginners" year="2018" price="1000" />
          <Book name="React for beginners" year="2019" price="1200" />
          <Book name="Vue for beginners" year="2021" price="1500" />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  rootElement,
);

export default App;
