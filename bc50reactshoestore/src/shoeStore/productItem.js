import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {product, getDetailProduct, getAddCart} = (this.props);

    return (
        <div className="col-sm-4" style={{padding:'10px 10px'}}>
        <div className="card"  onClick={()=>{
              getDetailProduct(product)
              }}>
          <img className="card-img-top" src={product.image} alt="" />
          <div className="card-body" >
            <h4 className="card-title" style={{fontSize:"18px"}}>{product.name}</h4>
            <div className='money'>{product.price} $</div>
            <button className="btn btn-danger" style={{backgroundColor:'black'}} onClick={() =>{getAddCart(product)}} data-toggle="modal"
            data-target="#modelId">Add to Cart
            <i className="fa-solid fa-cart-shopping"></i>
                </button>
          </div>
        </div>
      </div>
    )
  }
}
