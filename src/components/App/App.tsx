import React from 'react';
import Header from '../../layout/Header/Header';
import ProductList from '../ProductsList/ProductsList';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import '../../styles/styles.css';

function App() {

  return (
    <div className="App">
      <Header />
      <ProductList />
      <ShoppingCart />
    </div>
  );
}

export default App;
