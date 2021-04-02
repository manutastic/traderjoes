import React, { Component } from "react"
import "./App.css"

import item01 from "./assets/item01.png";
import item02 from "./assets/item02.png";
import item03 from "./assets/item03.png";
import item04 from "./assets/item04.png";
import item05 from "./assets/item05.png";
import item06 from "./assets/item06.png";

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null, image: null, filter: 0 }
  }

  handleClick = api => e => {
    e.preventDefault()

    const images = [item01, item02, item03, item04, item05, item06];
    const image = images[Math.floor(Math.random() * (images.length))];
    const filter = Math.floor(Math.random() * 3) * 10 + 'deg';

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg, image, filter }))
  }


  render() {
    const { loading, msg, image, filter } = this.state
    return (
      <p>
        {image ? <img className="productImage" style={{ filter: `hue-rotate(${filter})` }} src={image} alt="Product" /> : null}
        <br />
        <span>{msg}</span>
        <br />
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "New Product Please"}</button>
        {/* <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button> */}
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Trader Joe's
          </h1>
          <p>(unofficial) Product Name Generator</p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
