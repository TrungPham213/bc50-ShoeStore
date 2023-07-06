import React, { Component } from 'react'
import ProductList from './product'
import data from './data.json'
import Modal from './modal';
export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listProductInfo: [],

    }
  }
  handleDetailProduct = (product) => {
    // nhận product từ dssp

    this.setState({
      detailProduct: product,
    })
  }
  render() {
    const {listProductInfo } = this.state;

    return (

      <div>
        <h3 className="title" style={{ textAlign: "center" }}>Shoes shop</h3>
        <div className="container">
          <ProductList
            getDetailProduct={this.handleDetailProduct}
            listProduct={this.state.listProduct}
          />
          <Modal listProductInfo={listProductInfo}
          />
        </div>
      </div>

    )
  }
}
