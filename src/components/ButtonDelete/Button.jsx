import React from 'react';
import cross from "../../img/icons/cross.svg";


const Button = (props) => {

  function deleteBtn(e) {
    let curId = e.target.closest(".product").id;
    let curEl = {};
    let newCartArr = props.cartArr.filter( el => {
      if( el.id != curId ) {
        return el
      }
    } )

    props.setCartArr( () => {
      return newCartArr
    } )

    console.log(newCartArr)
  }

  return (
    <button type='button' onClick={ (e) => deleteBtn(e) } >
      <img src={cross} alt="" />
    </button>
  )
}

export default Button
