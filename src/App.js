import React, { Component } from 'react';
import './App.css';
import ProductList from './Components/ProductList';


class App extends Component {
  state = {
    product: [],
  };
  
  componentDidMount() {
    this.setState({
      product: this.props.product
    });
  }
  
  handleProductUpVote = (productID) => {
    console.log( productID + " Was Upvoted!" );
    const nextProducts = this.state.product.map((product) => {
      if (product.id === productID) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      product: nextProducts,
    });

    console.log("This is from nextProduct", nextProducts);


  }

  render() {
    return (
      <div className="App">
        <div className="App-view">
          <h1>Popular Products</h1>
          <ProductList 
              product={this.state.product}
              handleProductUpVote={this.handleProductUpVote}
          />
        </div>
      </div>
    );
  }
}

export default App;
