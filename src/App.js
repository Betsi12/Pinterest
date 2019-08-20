import React, { Component } from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';
import Modal from './Components/Modal/Modal';
import Navbar from './Components/Navbar/Navbar';
import './Components/Cards/Cards.css';
import InfiniteScroll from 'react-infinite-scroll-component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      modal: false,
      page: 20
    }
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
}

  modalOpen(i) {
    this.setState({
      ...this.state,
      modal: i,
    })
  }

  modalClose() {
    this.setState({
      ...this.state,
      modal: false,
    })
  }

  componentDidMount() {
    fetch("https://api.unsplash.com/search/photos?page=1&per_page=20&query=dog&client_id=8540a06957bba7edb8ec581240178641a0fe9f10d8bd30329a42272a3de373ab")
      .then(data => data.json())
      .then(data => {
        let arr = data.results;
        this.setState({
          ...this.state,
          img: arr,
        })
      });
     
  }

  fetchData = () => {
  
    let con = this.state.page + 20;
    this.setState({
      page: con
    
    })
    console.log(con)
    fetch("https://api.unsplash.com/search/photos?page="+(this.state.page/20)+"&per_page=20&query=dog&client_id=8540a06957bba7edb8ec581240178641a0fe9f10d8bd30329a42272a3de373ab")
      .then(data => data.json())
      .then(data => {
        console.log(data)
        let arr = data.results;
        this.setState({
          ...this.state,
          img: arr.concat(this.state.img)
        })
         console.log(arr.concat(this.state.img))
      });
  }

  show() {
    const travel = this.state.img.map(element => {
      return (
        <Cards imgClick={this.modalOpen}
          url={element.urls.thumb}
          name={element.user.name} />

      )
    })
    return travel
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="contenedr">
          {this.state.modal && <Modal modalClose={this.modalClose}
            viewImg={this.state.modal} />}
          {this.state.img && this.show()}
      </div>
        <InfiniteScroll
          dataLength={this.show.length}
          next={this.fetchData}
          hasMore={true}
          >{this.show}
        </InfiniteScroll>
      </div>
    );
  }
}
export default App;

/*import './Components/Api.css';
const apiKey= "8540a06957bba7edb8ec581240178641a0fe9f10d8bd30329a42272a3de373ab";
const endpoint= "http://api.unsplash.com/search/photos";*/



  

