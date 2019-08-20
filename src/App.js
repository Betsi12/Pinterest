import React, { Component } from 'react';

import Nav from './Components/Nav';
import Modal from './Components/Modal';
import './Components/Modal.css'
import './Components/Api.css';
const apiKey= "8540a06957bba7edb8ec581240178641a0fe9f10d8bd30329a42272a3de373ab";
const endpoint= "http://api.unsplash.com/search/photos";


export  default class App extends Component {
  constructor(){
    super()
    this.query= "";
    this.trackQueryValue=this.trackQueryValue.bind(this);
    this.search=this.search.bind(this);
  
    this.state={
      images:[]
    }
  }
  
  
  search(){
    fetch (`${endpoint}?query=${this.query}&client_id=${apiKey}`)
    .then(response=>{
      return response.json()
    })
    .then(jsonResponse=>{
      this.setState({
        images:jsonResponse.results
      })
    })

  }

  trackQueryValue(ev){
    this.query=ev.target.value;
  }
  
  images(){
    return this.state.images.map(image=>{
      return <img src={image.urls.thumb}/>
    })
  }
  render(){
    return(
      <div>
          <input type="text" onChange={this.trackQueryValue}/>
            <button onClick={this.search}>Buscar</button>
            <div>
              {this.images()}
            </div>
      </div>
    );
  }
}

  

