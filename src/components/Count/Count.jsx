import React from 'react';
import "./style.scss";

import iconUp from "../../img/icons/icon-up.svg";
import iconDown from "../../img/icons/icon-down.svg";

const Count = (props) => {

  function increaseCount(e) {

    let curId = e.target.closest(".product").id;
    console.log(curId)

    let newCartArr = props.cartArr.map( el => {
      if( el.id == curId ){
        el.count = el.count + 1
        return el
      }
      else{
        return el
      }

    } )


    props.setCartArr( () => {
      return newCartArr
    } )

  }


  function reduceCount(e) {
    let curId = e.target.closest(".product").id;
    let newCartArr = props.cartArr.filter( el => {
      if( el.id == curId ){
        el.count = el.count - 1;
        if( el.count != 0 ){
          return el
        }
      }
      else{
        return el
      }

    } )

    props.setCartArr( () => {
      return newCartArr
    } )
  }

  return (
    <div className="count">
        <div className="count-box">
          <input type="number" className='count_input' max={100} min={1} value={props.count}/>
        </div>

        <div className="count_controls">
          <button type='button' className='count_up' onClick={ (e) => increaseCount(e) } >
            <img src={iconUp} alt="" />
          </button>

          <button type='button' className='count_down' onClick={ (e) => reduceCount(e) } >
            <img src={iconDown} alt="" />
          </button>
        </div>
      </div>
  )
}

export default Count;