import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';

import cart from './../../data';

const Cart = () => {
  const [cartArr, setCartArr ] = useState(cart);
  return (
    <section className='cart' >
      <Header/>

      { cartArr.map( (el) => 
        <Product 
          id={el.id}  
          img = {el.img}
          title = {el.title}
          count = {el.count}
          price = {el.price}
          priceTotal = {el.priceTotal}
          key={el.id}
          cartArr={cartArr}
          setCartArr={setCartArr}
        />
      ) }
      <Footer 
        cartArr={cartArr}
        setCartArr={setCartArr}
      />
    </section>
  )
}



export default Cart
