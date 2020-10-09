import React from 'react';
import './App.css';
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className='content'>
        <Content/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
