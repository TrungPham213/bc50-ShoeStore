import React, { Component } from 'react'
import ProductItem from './productItem'

export default class ProductList extends Component {
    renderListProduct = ()=>{
        const{getAddCart, listProduct, getDetailProduct}=this.props;
        return listProduct.map((product)=> {
            return <ProductItem key={product.id} product={product} getDetailProduct={getDetailProduct} getAddCart={getAddCart}
            />;
          });
    }
  render() {
    return (
        <div className="container">
        <div className="row" >
          {this.renderListProduct()}
          
        </div>
      </div>
    )
  }
}
