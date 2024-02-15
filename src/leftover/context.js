import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

//create a contect object

const ProductContext = React.createContext();

//context api has two components;provider and consumer

class ProductProvider extends Component {
  state = {
    products:storeProducts,
    detailProduct:detailProduct
  }
  handleDetail= ()=>{
    console.log('Hello from Detail');
  }
  addToCart= ()=>{
    console.log('Hello from Add To Cart');
  }
  render() {
    return (
      <ProductContext.Provider value={{...this.state,
      handleDetail:this.handleDetail,
      addToCart:this.addToCart

      }}>
        {this.props.children}


      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;


export{ProductConsumer,ProductProvider};