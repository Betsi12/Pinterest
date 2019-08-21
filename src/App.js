import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Board from './components/board/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
         <Board />
        </header>
      </div>
    );
  }
}

export default App;


/*mport './Components/Api.css';
const apiKey= "8540a06957bba7edb8ec581240178641a0fe9f10d8bd30329a42272a3de373ab";
const endpoint= "http://api.unsplash.com/search/photos";*/



  

