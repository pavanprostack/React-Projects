import React from 'react'

const ProductDetails = (props) => {
  return <div>
    <h2>Product Details</h2>
    {/* <pre>{JSON.stringify(props)}</pre> */}
    <div className="card">
      <div className="card-header bg-danger">
        <img src={props.Details.selectedProduct.thumbnail} alt="img" height='190px' width='100%'/>
      </div>
      <div className="card-body bg-danger">
        <ul className='list-group'>
          <li className='list-group-item'>ID : <b>{props.Details.selectedProduct.id}</b></li>
          <li className='list-group-item'>Rating : <b>{props.Details.selectedProduct.rating}</b></li>
          <li className='list-group-item'>Brand : <b>{props.Details.selectedProduct.brand}</b></li>
          <li className='list-group-item'>Price : <b>{props.Details.selectedProduct.price}</b></li>
          <li className='list-group-item'>DiscountPercentage : <b>{props.Details.selectedProduct.discountPercentage}</b></li>
        </ul>
      </div>
    </div>
  </div>
}

export default ProductDetails

