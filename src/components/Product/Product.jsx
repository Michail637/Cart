import React from 'react';
import "./style.scss";
import Count from '../Count/Count';
import Button from '../ButtonDelete/Button';


const Product = (props) => {
  return (
    <section className="product" id={props.id} >
      <div className="product_img">
        <img src={props.img} alt="" />
      </div>
      <div className="product_title">{props.title}</div>
      <Count 
        count={props.count}
        cartArr = {props.cartArr}
        setCartArr = {props.setCartArr}
      />
      <div className="product_price">{props.price * props.count}</div>
      <div className="product_controls">
      <Button cartArr={props.cartArr} setCartArr={props.setCartArr} />
      </div>
    </section>
  )
}

export default Product
