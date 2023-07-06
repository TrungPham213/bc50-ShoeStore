import React, { Component } from 'react'
import ProductList from './product'
import data from './data.json'
import Modal from './modal';


export default class ShoeStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: [],
      
    }
  }
  


  _findIndex=(id)=>{
    return this.state.listCart.findIndex((product)=>product.id ===id)};


  handleDetailProduct = (product) => {
    // nhận product từ dssp

    this.setState({
      detailProduct: product,
    })
  }
  // thêm sp vào giỏ hàng
  handleAddProductToCart = (product) =>{
const index = this._findIndex(product.id);
let listCart = [...this.state.listCart];
if (index !== -1) {

  listCart[index].quantity += 1;
} else {
  const productAddCart = {
    id: product.id,
    name: product.name,
    image: product.image,
    quantity: 1,
    price: product.price,

  }
  listCart.push(productAddCart);

};
this.setState({
  listCart,
}
)
  }
  // xoá sp trong giỏ hàng
  handleDelProduct = (id)=>{
let listCartClone = [...this.state.listCart];
const index = this._findIndex(id);
if (index !== -1){
  listCartClone.splice(index,1);
  this.setState({
    listCart:listCartClone,
  })
}
  }
  handleUpdateQuantity = (id, isPlus) => {
    const index = this._findIndex(id);
    let listCartClone = [...this.state.listCart];

    if (isPlus) {

      listCartClone[index].quantity += 1;
    } else {
      if (listCartClone[index].quantity > 1) {
        listCartClone[index].quantity -= 1
      }
    }
    this.setState({
      listCart: listCartClone,
    })
  }
  totalQuantity =()=>{
    return this.state.listCart.reduce((total, product)=>(total += product.quantity ),0);
   }
  render() {
    const { detailProduct,listCart } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-4" style={{ padding: '5rem 2rem 0 2rem' }}>
            <div classname="row" style={{ display: "block" }}>
              <button type="button" style={{ display: "block", fontSize: "30px" }} href="#" className="btn btn-link">Home</button>
              <button type="button" style={{ display: "block", fontSize: "30px" }} href="#" className="btn btn-link">Shop</button>
            </div>
            <div className='row sticky-top'>
            <div className="col-sm-7 "style={{ padding: '5rem 2rem ' }}>
            <h3>Thông tin sản phẩm</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>id</td>
                  <td>{detailProduct.id}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{detailProduct.name}</td>
                </tr>
                <tr>
                  <td>description</td>
                  <td>{detailProduct.description}</td>
                </tr>
                <tr>
                  <td>shortDescription</td>
                  <td>{detailProduct.shortDescription}</td>
                </tr>
                <tr>
                  <td>quantity</td>
                  <td>{detailProduct.quantity}</td>
                </tr>
                <tr>
                  <td>image</td>
                  <td>{detailProduct.image}</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
            </div>        
          <div className="col-md-8">
            <div>
              <h3 className="title" style={{ textAlign: "center" }}>Shoes shop</h3>
              <div className="container">
                <ProductList
                  getDetailProduct={this.handleDetailProduct}
                  listProduct={this.state.listProduct}
                  getAddCart = {this.handleAddProductToCart}
                />
                <Modal listCart={listCart}
                getDelProduct = {this.handleDelProduct}
                getQuantityProduct = {this.handleUpdateQuantity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
