import React, { Component } from 'react';
import './App.css';
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import child components
import  HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CarouselComponent from './components/CarouselComponent';

class App extends Component{
  render(){
    return(<div>
    	<HeaderComponent></HeaderComponent>
    	<CarouselComponent></CarouselComponent>
    	<FooterComponent></FooterComponent>
      </div>)
  }
}

export default App;
