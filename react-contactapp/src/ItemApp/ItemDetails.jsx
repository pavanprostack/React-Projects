import React, { Component } from 'react'

export class itemDetails extends Component {
  render() {
    return <>
    {/* <pre>{JSON.stringify(this.props)}</pre> */}
    <div className="card">
      <div className="card-header bg-success">
        <img src={this.props.props2.thumbnail} height="150px" alt="img" />
      </div>
      <div className="card-body bg-success">
        {/* <h5>{this.props.props2.id}</h5> */}
        <ul className='list-group '>
          <li className='list-group-item'>Title : <b>{this.props.props2.title}</b></li>
          <li className='list-group-item'> Brand : <b> {this.props.props2.brand}</b></li>
          <li className='list-group-item'>Price : <b>{this.props.props2.price}</b></li>
          <li className='list-group-item'>Rating : <b>{this.props.props2.price}</b></li>
        </ul>
      </div>
    </div>

    </>
  }
}

export default itemDetails
