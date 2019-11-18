import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

class CarouselComponent extends Component{
	state={
		images:[]
	}
	componentDidMount(){
     axios.get('https://anatta-demo-app.herokuapp.com/api/images')
     .then((res)=>{
     	this.setState({images: res.data});
     })
	}
  render(){
  	return(<div>
          <Carousel>
                   {
				  	this.state.images.map((image)=>{
				  		return( <Carousel.Item key={image.id}>
				    <img
				      className="d-block w-100"
				      src={image.url}
				      alt={image.id}
				    />
				    <Carousel.Caption>
				      <h3>{image.id}</h3>
				      <p>Producd ID: {image.productId}</p>
				    </Carousel.Caption>
				  </Carousel.Item>)
				  	})
				  }
         </Carousel>
  		</div>)
  }
}

export default CarouselComponent;