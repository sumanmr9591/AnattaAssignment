import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FooterComponent extends Component{
    render(){
    	return(<footer>
             <div className="row footerText">
                 <div className="col-lg-2 col-md-2 footerDiv">
                      <ul className="footerList">
                          <li><b>MEN</b></li>
                          <li>OCA Low</li>
                          <li>OCA High</li>
                          <li>CATIBA Low</li>
                          <li>ACTIBA High</li>
                      </ul>
                 </div>
                 <div className="col-lg-2 col-md-2 footerDiv">
                      <ul className="footerList">
                          <li><b>WOMEN</b></li>
                          <li>OCA Low</li>
                          <li>OCA High</li>
                          <li>CATIBA Low</li>
                          <li>ACTIBA High</li>
                      </ul>
                 </div>
                 <div className="col-lg-2 col-md-2 footerDiv">
                   <ul className="footerList">
                          <li><b>SUPPORT</b></li>
                          <li>FAQ</li>
                          <li>Returns</li>
                          <li>Live Chat</li>
                      </ul>
                 </div>
                 <div className="col-lg-2 col-md-2 footerDiv">
                     <ul className="footerList">
                          <li><b>ABOUT</b></li>
                          <li>Mission</li>
                          <li>Vision</li>
                          <li>Future</li>
                      </ul>

                 </div>
                 <div className="col-lg-2 col-md-2 footerDiv">
                      <ul className="footerList">
                          <li><b>POP UP STORES</b></li>
                          <li>Find Near You</li>
                          <li>Register</li>
                          <li><input type="text" placeholder="Find Your sneakers" className="footerInput" /></li>
                      </ul>

                 </div>
                 <div className="col-lg-2 col-md-2 footerDiv">
                     <ul className="footerList">
                          <li><b>NEWSLETTER</b></li>
                          <li><input type="text" placeholder="Enetr email" className="footerInput" /></li>
                          <li>
                          <button id="joinButton">JOIN US</button>
                          </li>
                      </ul>
                    </div>
             </div>
    		</footer>)
    }
}

export default FooterComponent;