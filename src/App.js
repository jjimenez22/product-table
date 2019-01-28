import React, {Component} from 'react';
import './App.css';
import FilterableProductTable from "./ProductTable/FilterableProductTable";
import {PRODUCTS} from "./ProductTable/data";

class App extends Component {
  render() {
    return (
      <FilterableProductTable products={PRODUCTS}/>
    );
  }
}

export default App;
