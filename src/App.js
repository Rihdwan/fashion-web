import React from 'react';
import './App.css';
import { About, Footer, Hero, Product, Discount, Mobile, Fav, Brands, Navbar } from './container';


const App = () => (
  <div className="App">
    <Navbar />
    <Hero />
    <Brands />
    <Product />
    <Discount />
    <Fav />
    <Mobile />
    <About />
    <Footer />
  </div>
)

export default App;
