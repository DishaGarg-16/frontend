import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome to Vashundhra Beauty Collection</h1>
        <ProductList products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
