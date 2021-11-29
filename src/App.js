import React, { Component } from "react"
import "./App.css"

import item01 from "./assets/item01.png";
import item02 from "./assets/item02.png";
import item03 from "./assets/item03.png";
import item04 from "./assets/item04.png";
import item05 from "./assets/item05.png";
import item06 from "./assets/item06.png";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null, image: null, filter: 0 }
  }

  getProduct = () => {

    const images = [item01, item02, item03, item04, item05, item06];
    const image = images[Math.floor(Math.random() * (images.length))];

    this.setState({ loading: true })
    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg, image }))
  }

  componentDidMount() {
    this.getProduct();
  }


  render() {
    const { loading, msg, image } = this.state
    const words = msg && msg.split(' ');
    const lastTwo = words && <span class="nowrap"> {words[words.length - 2] + ' ' + words[words.length - 1]}</span>;
    if (words) words.splice(-2, 2);
    const productName = words && words.join(' ');

    const productImage = <div className="productImage" style={{ backgroundImage: `url(${image})` }}></div>
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Trader Joe's
          </h1>
          <p className={'subheader'}>(Unofficial) Product Name Generator</p>
          <div className="product">
            {image && productImage}
            <span className="productName">{productName}{lastTwo}</span>
          </div>
          <button className="newProduct" onClick={() => this.getProduct()}>{loading ? "Loading..." : "New Product Please"}</button>
        </header>
      </div>
    )
  }
}

export default App
