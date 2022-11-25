import React, { Component } from 'react'

export class ContactDetails extends Component {
  render() {
    return <>
      {/* <pre>{JSON.stringify(this.props)}</pre> */}
      <div className="container">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header bg-warning">
                        {
                            <img src={this.props.kalyan.image} alt="" height='170px' />
                        }
                    </div>
                    <div className="card-body bg-dark">
                        <ul className='list-group'>
                            <li className='list-group-item'>{this.props.kalyan.firstName + " " + this.props.kalyan.lastName}</li>
                            <li className='list-group-item'>{this.props.kalyan.id}</li>
                            <li className='list-group-item'>{this.props.kalyan.gender}</li>
                            <li className='list-group-item'>{this.props.kalyan.email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
  }
}

export default ContactDetails