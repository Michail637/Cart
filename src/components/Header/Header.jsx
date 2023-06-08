import React from 'react';
import "./style.scss";

const Header = () => {
  return (
    <header className='cart-header' >
    <div className="cart-header_title">Title</div>
    <div className="cart-header_count">Quantity</div>
    <div className="cart-header_cost">Price</div>
  </header>
  )
}

export default Header
