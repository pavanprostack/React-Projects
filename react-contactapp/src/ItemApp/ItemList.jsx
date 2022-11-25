import React, { Component } from 'react'

export class itemList extends Component {
  getList = (e)=>{
    console.log(e.id);
    this.props.method(e)
  }

  render() {
    return <>
    {/* <pre>{JSON.stringify(this.props)}</pre> */}
    <div className="container">
      <div className="row">
        <div className="col">
          <table className='table table-hover '>
            <thead className='bg-primary text-white'>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody className='bg-secondary'>
              {
                this.props.prop1.products.map((product, index)=>{
                  return <tr key={index} onClick={this.getList.bind(this, product)}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.rating}</td>
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
}

export default itemList
