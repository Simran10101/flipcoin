import React from 'react';
import ProductCard from './ProductCards';

const App = () => {
  return (
    <div>
   <ProductCard imageFileName="product1.jpg" title="product 1" description="image file" price="500"/>
   <ProductCard imageFileName="product2.jpg" title="product 2" description="image file" price="200"/>
   </div>
  );
}; 

export default App;
