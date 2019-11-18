import React, { Component } from 'react';
import { faShoppingCart, faUser, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeaderComponent extends Component{
   render(){
   	return (<div className="row">
   		<div id="rectangle">
           <p id="fREEUSSHIP">FREE US SHIPPNG & RETURN</p>
           </div>
           <div id="rectangle2">
              <div className="row rectangle2Content">
                 <p id="mEN" className="col-md-1 col-lg-1 hidden-xs hidden-sm">Men</p>
                 <p id="wOMEN" className="col-md-2 col-lg-2 hidden-xs hidden-sm">Women</p>
                 <p><FontAwesomeIcon id="amberCrome" icon={faAlignJustify} /></p>
                 <div id="rings" className="row">
                      <div id="oval"></div>
                      <div id="ovalCopy"></div>
                 </div>
                 <div className="col-md-5 col-lg-5 "></div>
                 <p id="aBOUT" className="col-md-2 col-lg-2 hidden-xs hidden-sm">About</p>
                 <div className="cartContent col-md-1 col-lg-1 hidden-xs hidden-sm">
                 <p className="iconContainer">
                 <FontAwesomeIcon icon={faUser} />
                 <FontAwesomeIcon id="cart" icon={faShoppingCart} />
                 </p>
                 </div>
              </div>
           </div>
   		</div>)
   }
}

export default HeaderComponent;