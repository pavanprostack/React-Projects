import React from 'react'

const ProductList = (props) => {
  let getUpdate = (value)=>{
    console.log(value);
    props.method(value);
 
  }
  return <>
  {/* <pre>{JSON.stringify(props)}</pre>   */}
  <div className="container">
    <div className="row">
      <div className="col">
        <table className='table table-hover'>
          <thead className='bg-primary'>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody className='bg-secondary'>
            {
              props.pavan.product.products.map((kalyan, index)=>{
                return <tr key={index} onMouseOver={getUpdate.bind(this, kalyan)}>
                  <td>{kalyan.id}</td>
                  <td>{kalyan.title}</td>
                  <td>{kalyan.brand}</td>
                  <td>{kalyan.price}</td>
                  
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </>
}

export default ProductList
