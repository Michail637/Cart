import React from 'react';
import "./style.scss";

const Footer = (props) => {

  function calcTotalCount() {
    let totalCount = 0;
    props.cartArr.forEach( (el) => {
      totalCount += el.count;
    } )
    return totalCount
  }


  function calcTotalPrice() {
    let totalPrice = 0;
    props.cartArr.forEach( (el) => {
      totalPrice += el.count * el.price;
    } )
    return totalPrice
  }

  return (
    <footer className="cart-footer">
    <div className="cart-footer_count"> Total Quantity:  {calcTotalCount()}  </div>
    <div className="cart-footer_count"> Total price: {calcTotalPrice()}  </div>
  </footer>
  )
}

export default Footer
