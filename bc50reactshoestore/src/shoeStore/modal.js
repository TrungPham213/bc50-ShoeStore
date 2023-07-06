import React, { Component } from 'react'

export default class Modal extends Component {

  renderListCart = () => {
    const { listCart, getDelProduct, getQuantityProduct } = this.props;
   
    return listCart.map((product) => {
      
      return (
        <>


          <tr
            key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.price * product.quantity}</td>
            <td>
              <img src={product.image} width={50} alt="" />
            </td>
            <td>
              <button onClick={()=>{getQuantityProduct(product.id, false)}}
              >-</button>{product.quantity}<button onClick={()=>{getQuantityProduct(product.id, true)}} >+</button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => {
                getDelProduct(product.id)
              }}
              >Delete</button>
            </td>
          </tr>
        

        </>
      )
    }
    )
    
  }

  renderTotal=()=>{
    const { listCart} = this.props;
    const totalPrice = listCart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const totalQuantity = listCart.reduce((total, product) => total + product.quantity, 0);
    
      return(
      <tr>
            <td>Total quantity:</td>
            <td>{totalQuantity}</td>
            <td></td>
            <td></td>
            <td></td>
            
            <td>Total Price:</td>
            <td>{totalPrice}</td>
          </tr>
      )
    
    
  }



  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cart</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                
                  <thead>
                    <tr>
                      <th>id:</th>
                      <th>name:</th>
                      <th>price:</th>
                      <th>Total Price</th>
                      <th>image:</th>
                      <th>quantity:</th>
                      <th>action:</th>
                    </tr>
                    </thead>
                  
                 <tbody>
                 {this.renderListCart()};
                  {this.renderTotal()};
                 </tbody>

                
              </table>
            </div>
            <div className="modal-footer">
            
            <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success" data-dismiss="modal"
                
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
